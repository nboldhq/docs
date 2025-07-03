  // server.js
  const express = require('express');
  const fs = require('fs');
  const path = require('path');
  const cors = require('cors');
  const app = express();
  const multer = require('multer');
  const port = 3000;
  const DATA_DIR = path.join(__dirname, '../../data/');
  const DATA_FILE = path.join(DATA_DIR, 'categories.json');
  const OPENAPI_FILE = path.join(DATA_DIR, 'openapi.json'); 
  const upload = multer({ dest: '../../data/' });
  app.use(cors({ origin: '*', methods: ['GET','POST','PUT','PATCH','DELETE'] }));

  app.use(express.json({ 
    limit: '50mb' 
  }));

  app.use(express.urlencoded({
    extended: true,
    limit: '50mb'
  }));

  // Ensure data directory exists
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
}
  // ——— Helpers —————————————————————————————
  const readCategories = () => {
    try {
      if (!fs.existsSync(DATA_FILE)) {
        fs.writeFileSync(DATA_FILE, JSON.stringify([], null, 2));
        return [];
      }
      const data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
      if (!Array.isArray(data)) {
        console.error('Invalid categories.json: Expected an array');
        return [];
      }
      return data.map(category => ({
        ...category,
        children: Array.isArray(category.children) ? category.children : []
      }));
    } catch (e) {
      console.error('Error reading categories.json:', e.message);
      return [];
    }
  };
  
  const writeCategories = (data, retries = 3, delay = 1000) => {
    for (let attempt = 1; attempt <= retries; attempt++) {
      try {
        fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
        return;
      } catch (e) {
        if (attempt === retries) throw e;
        require('util').promisify(setTimeout)(delay);
      }
    }
  };

  function sanitizeFilename(name) {
    return name.replace(/[<>:"/\\|?*\x00-\x1F]/g,'').trim();
  }

  function getCategoryPath(cat, allCats, root) {
    const parts = [];
    let cur = cat;
    while (cur && cur.name) {
      const siblings = allCats.filter(c => c.parentId === cur.parentId);
      const idx = siblings.findIndex(s => s.id === cur.id);
      const part = `${String(idx + 1).padStart(2, '0')}-${sanitizeFilename(cur.name)}`;
      parts.unshift(part);
      console.log('getCategoryPath part:', part);
      cur = allCats.find(c => c.id === cur.parentId);
    }
    const finalPath = path.join(root, ...parts);
    console.log('getCategoryPath final:', finalPath);
    return finalPath;
  }

  // ——— API ROUTES ————————————————————————————

  // Health check
  app.get('/api/health', (req, res) => {
    res.json({ status:'ok', timestamp: new Date().toISOString() });
  });

  // Load existing OpenAPI spec
  let openAPISpec = {};
  try {
    openAPISpec = require('../../data/openapi.json');
  } catch (err) {
    console.log('No existing openapi.json file found');
  }

  // API Endpoints

    // Get current spec
    app.get('/api/spec', (req, res) => {
      fs.readFile(OPENAPI_FILE, 'utf8', (err, data) => {
        if (err) {
          return res.status(500).json({ error: 'Error reading OpenAPI file' });
        }
    
        try {
          const spec = JSON.parse(data);
          res.json(spec);
        } catch (parseError) {
          res.status(500).json({ error: 'Invalid JSON in OpenAPI file' });
        }
      });
    });
    
    // Upload new spec file
    app.post('/api/upload', upload.single('file'), (req, res) => {
      if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
      }

      // Read the uploaded file
      fs.readFile(req.file.path, 'utf8', (err, data) => {
        // Always delete the temp file first
        fs.unlink(req.file.path, (unlinkErr) => {
          if (unlinkErr) console.error('Error deleting temp file:', unlinkErr);
        });

        if (err) {
          return res.status(500).json({ error: 'Error reading uploaded file' });
        }

        try {
          // Validate JSON
          const openAPISpec = JSON.parse(data);

          // Delete old file if exists
          if (fs.existsSync(OPENAPI_FILE)) {
            fs.unlinkSync(OPENAPI_FILE);
          }

          // Write new file
          fs.writeFileSync(
            OPENAPI_FILE,
            JSON.stringify(openAPISpec, null, 2),
            'utf8'
          );

          res.json({ message: 'File uploaded and saved as openapi.json' });
        } catch (parseError) {
          res.status(400).json({ error: 'Invalid JSON file' });
        }
      });
    });


    // Save modifications
    app.post('/api/save', (req, res) => {
      try {
        // Validate request body
        if (!req.body || typeof req.body !== 'object') {
          return res.status(400).json({ error: 'Invalid request format' });
        }
    
        // Validate OpenAPI structure
        if (!req.body.info || !req.body.paths) {
          return res.status(400).json({ 
            error: 'Invalid OpenAPI structure - missing required fields'
          });
        }
    
        // Write to file
        fs.writeFileSync(OPENAPI_FILE, JSON.stringify(req.body, null, 2));
        openAPISpec = req.body;
        
        res.json({ 
          success: true,
          message: 'Changes saved successfully',
          timestamp: new Date().toISOString()
        });
    
      } catch (err) {
        console.error('Save error:', err);
        res.status(500).json({ 
          error: 'Error saving file',
          details: err.message 
        });
      }
    });

    // GET all categories
    app.get('/api/categories', (req, res) => {
      try { res.json(readCategories()) }
      catch (e) { res.status(500).json({error:'Failed to load'}) }
    });

    // CREATE or UPDATE a category
    app.post('/api/categories', (req, res) => {
      try {
        const data = readCategories();
        const cat = req.body;
    
        if (!cat.name?.trim()) {
          return res.status(400).json({ error: 'Name is required' });
        }
    
        if (cat.id) {
          // Update existing category
          const idx = data.findIndex(c => c.id === cat.id);
          if (idx < 0) return res.status(404).json({ error: 'Category not found' });
    
          data[idx] = { ...data[idx], ...cat };
        } else {
          // Create new category
          cat.id = Date.now();
          data.push(cat);
        }
    
        writeCategories(data);
        res.json({ success: true, category: cat });
      } catch (e) {
        console.error('Error in POST /api/categories:', e.message, e.stack);
        res.status(500).json({ error: 'Failed to save category', details: e.message });
      }
    });
    

    app.post('/api/categories/reorder', (req, res) => {
      try {
        const { draggedId, newParentId, newIndex } = req.body;
        console.log('Reorder request:', { draggedId, newParentId, newIndex });
    
        if (!draggedId || newIndex === undefined) {
          return res.status(400).json({ error: 'Missing required fields: draggedId and newIndex are required' });
        }
    
        let data;
        try {
          data = readCategories();
        } catch (e) {
          console.error('Error reading categories.json:', e.message, e.stack);
          return res.status(500).json({ error: 'Failed to read categories data', details: e.message });
        }
    
        if (!Array.isArray(data)) {
          console.error('Invalid categories data: Expected an array');
          return res.status(500).json({ error: 'Invalid categories data: Expected an array' });
        }
    
        const findCategory = (categories, id, parentArray = null) => {
          for (let i = 0; i < categories.length; i++) {
            const category = categories[i];
            if (category.id === id) {
              return { category, parent: parentArray, index: i };
            }
            if (Array.isArray(category.children) && category.children.length > 0) {
              const found = findCategory(category.children, id, categories[i].children);
              if (found) return found;
            }
          }
          return null;
        };
    
        const isDescendant = (parentCategory, targetId) => {
          if (parentCategory.id === targetId) return true;
          if (Array.isArray(parentCategory.children)) {
            return parentCategory.children.some((child) => isDescendant(child, targetId));
          }
          return false;
        };
    
        const dragged = findCategory(data, draggedId);
        if (!dragged) {
          console.error(`Category not found for draggedId: ${draggedId}`);
          return res.status(400).json({ error: `Invalid draggedId: ${draggedId} not found` });
        }
    
        if (newParentId !== null) {
          const targetParent = findCategory(data, newParentId);
          if (!targetParent) {
            console.error(`Category not found for newParentId: ${newParentId}`);
            return res.status(400).json({ error: `Invalid newParentId: ${newParentId} not found` });
          }
          if (draggedId === newParentId || isDescendant(dragged.category, newParentId)) {
            return res.status(400).json({ error: 'Cannot move category into itself or its descendants' });
          }
        }
    
        if (!dragged.parent && newParentId !== null) {
          console.error(`Invalid state: Dragged category ${draggedId} has no parent array`);
          return res.status(500).json({ error: `Invalid state: Dragged category ${draggedId} has no parent array` });
        }
    
        try {
          (dragged.parent || data).splice(dragged.index, 1);
        } catch (e) {
          console.error(`Error removing category ${draggedId} from parent:`, e.message);
          return res.status(500).json({ error: `Failed to remove category ${draggedId}`, details: e.message });
        }
    
        let newParentArray;
        if (newParentId === null) {
          newParentArray = data;
        } else {
          const targetParent = findCategory(data, newParentId);
          if (!Array.isArray(targetParent.category.children)) {
            targetParent.category.children = [];
          }
          newParentArray = targetParent.category.children;
        }
    
        if (newIndex < 0 || newIndex > newParentArray.length) {
          console.error(`Invalid newIndex: ${newIndex} for parent array length ${newParentArray.length}`);
          return res.status(400).json({ error: `Invalid newIndex: ${newIndex}` });
        }
    
        newParentArray.splice(newIndex, 0, {
          ...dragged.category,
          parentId: newParentId,
          children: Array.isArray(dragged.category.children) ? dragged.category.children : []
        });
    
        try {
          writeCategories(data);
        } catch (writeError) {
          console.error('Error writing categories:', writeError.message, writeError.stack);
          return res.status(500).json({ error: 'Failed to save categories', details: writeError.message });
        }
    
        res.json({ success: true });
      } catch (e) {
        console.error('Error reordering categories:', e.message, e.stack);
        res.status(500).json({ error: 'Reorder failed', details: e.message });
      }
    });

    // DELETE a category
    app.delete('/api/categories/:id', (req, res) => {
      try {
        const id = +req.params.id;
        let data = readCategories();
        const toDel = data.find(c=>c.id===id);
        if (!toDel) return res.status(404).json({error:'not found'});

        const docsRoot = path.join(__dirname,'docs');
        const folder   = getCategoryPath(toDel,data,docsRoot);

        // remove from array recursively
        const removeRec = i => {
          data.filter(c=>c.parentId===i).forEach(child=>removeRec(child.id));
          data = data.filter(c=>c.id!==i);
        };
        removeRec(id);
        writeCategories(data);

      if (fs.existsSync(folder)) fs.rmSync(folder,{recursive:true,force:true});
      res.json({success:true});
    } catch (e) {
      console.error(e);
      res.status(500).json({error:'delete failed'});
    }
    });

    // PATCH a category
    app.patch('/api/categories/:id', (req, res) => {
      try {
        const id = +req.params.id;
        const data = readCategories();
        const idx = data.findIndex(c=>c.id===id);
        if (idx<0) return res.status(404).json({error:'not found'});
        data[idx] = {...data[idx],...req.body};
        writeCategories(data);
        res.json({success:true,category:data[idx]});
      } catch (e) {
        console.error(e);
        res.status(500).json({error:'patch failed'});
      }
    });

    app.post('/api/categories/reorder', (req, res) => {
      try {
        const { draggedId, newParentId, newIndex } = req.body;
    
        if (!draggedId || newIndex === undefined) {
          return res.status(400).json({ error: 'Missing required fields' });
        }
    
        const data = readCategories();
        if (!Array.isArray(data)) {
          return res.status(500).json({ error: 'Invalid categories data' });
        }
    
        // Helper function to find a category and its parent array
        const findCategory = (categories, id, parentArray = null) => {
          for (let i = 0; i < categories.length; i++) {
            const category = categories[i];
            if (category.id === id) {
              return { category, parent: parentArray, index: i };
            }
            if (category.children && category.children.length > 0) {
              const found = findCategory(category.children, id, categories[i].children);
              if (found) return found;
            }
          }
          return null;
        };
    
        // Check if the dragged category is being dropped into its own descendants
        const isDescendant = (parentCategory, targetId) => {
          if (parentCategory.id === targetId) return true;
          if (parentCategory.children) {
            return parentCategory.children.some((child) => isDescendant(child, targetId));
          }
          return false;
        };
    
        const dragged = findCategory(data, draggedId);
        if (!dragged) {
          return res.status(400).json({ error: 'Invalid draggedId' });
        }
    
        // Prevent dropping a category into itself or its descendants
        if (newParentId !== null) {
          const targetParent = findCategory(data, newParentId);
          if (!targetParent) {
            return res.status(400).json({ error: 'Invalid newParentId' });
          }
          if (draggedId === newParentId || isDescendant(dragged.category, newParentId)) {
            return res.status(400).json({ error: 'Cannot move category into itself or its descendants' });
          }
        }
    
        // Remove the dragged category from its current position
        dragged.parent.splice(dragged.index, 1);
    
        // Find the new parent array (root or a category's children)
        let newParentArray;
        if (newParentId === null) {
          newParentArray = data;
        } else {
          const targetParent = findCategory(data, newParentId);
          if (!targetParent.category.children) {
            targetParent.category.children = [];
          }
          newParentArray = targetParent.category.children;
        }
    
        // Validate newIndex
        if (newIndex < 0 || newIndex > newParentArray.length) {
          return res.status(400).json({ error: 'Invalid newIndex' });
        }
    
        // Insert the dragged category at the new index
        newParentArray.splice(newIndex, 0, { ...dragged.category, parentId: newParentId });
    
        try {
          writeCategories(data);
        } catch (writeError) {
          console.error('Error writing categories:', writeError);
          return res.status(500).json({ error: 'Failed to save categories' });
        }
    
        res.json({ success: true });
      } catch (e) {
        console.error('Error reordering categories:', e);
        res.status(500).json({ error: 'Reorder failed' });
      }
    });

    // FOLDER CONTENTS
    app.get('/api/folder-content', (req, res) => {
      try {
        const name = req.query.folderName;
        if (!name) return res.status(400).json({error:'folderName required'});
        const root = path.join(__dirname,'../content');
        const folder = path.join(root,name);
        if (!fs.existsSync(folder)) return res.status(404).json({error:'not found'});
        res.json({success:true, files: fs.readdirSync(folder)});
      } catch (e) {
        console.error(e);
        res.status(500).json({error:'list failed'});
      }
    });

  // ——— SPA & Static Assets ————————————————————

  // Serve React build
  const staticPath = path.resolve(__dirname, './public');
  console.log('Serving static files from:', staticPath);
  app.use(express.static(staticPath));
  app.use(express.static(path.resolve(__dirname, './public')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
  });
  // 404 for anything else
  app.use((req,res) => {
    res.status(404).json({error:'Not found'});
  });


  app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
  });
