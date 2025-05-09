  // server.js
  const express = require('express');
  const fs = require('fs');
  const path = require('path');
  const cors = require('cors');
  const app = express();
  const multer = require('multer');
  const port = process.env.PORT || 3000;
  const DATA_FILE = path.join(__dirname, 'categories.json');
  const OPENAPI_FILE = path.join(__dirname, 'openapi.json'); // ✅ Correct file
  const upload = multer({ dest: 'uploads/' });
  app.use(cors({ origin: '*', methods: ['GET','POST','PUT','PATCH','DELETE'] }));

  // Increase payload limit
  app.use(express.json({ 
    limit: '50mb' // 50MB limit (adjust as needed)
  }));

  app.use(express.urlencoded({
    extended: true,
    limit: '50mb'
  }));

  // ——— Helpers —————————————————————————————
  function readCategories() {
    if (!fs.existsSync(DATA_FILE)) return [];
    return JSON.parse(fs.readFileSync(DATA_FILE,'utf8'));
  }
  function writeCategories(data) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data,null,2));
  }
  function sanitizeFilename(name) {
    return name.replace(/[<>:"/\\|?*\x00-\x1F]/g,'').trim();
  }
  function getCategoryPath(cat, allCats, root) {
    const parts = [];
    let cur = cat;
    while (cur && cur.name) {
      const siblings = allCats.filter(c=>c.parentId===cur.parentId);
      const idx = siblings.findIndex(s=>s.id===cur.id);
      parts.unshift(`${String(idx+1).padStart(2,'0')}-${sanitizeFilename(cur.name)}`);
      cur = allCats.find(c=>c.id===cur.parentId);
    }
    return path.join(root, ...parts);
  }

  // ——— API ROUTES ————————————————————————————

  // Health check
  app.get('/api/health', (req, res) => {
    res.json({ status:'ok', timestamp: new Date().toISOString() });
  });

  // Load existing OpenAPI spec
  let openAPISpec = {};
  try {
    openAPISpec = require('./openapi.json');
  } catch (err) {
    console.log('No existing openapi.json file found');
  }

  // API Endpoints

    // Get current spec
    app.get('/api/spec', (req, res) => {
      res.json(openAPISpec);
    });

    // Upload new spec file
    app.post('/api/upload', upload.single('file'), (req, res) => {
      if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
      }

      fs.readFile(req.file.path, 'utf8', (err, data) => {
        if (err) {
          return res.status(500).json({ error: 'Error reading file' });
        }

        try {
          openAPISpec = JSON.parse(data);
          // Save to persistent storage
          fs.writeFileSync('openapi.json', JSON.stringify(openAPISpec, null, 2));
          res.json({ message: 'File uploaded and parsed successfully' });
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
    
        const docsRoot = path.join(__dirname, 'docs');
        let filePath;
    
        if (cat.id) {
          // -- Update existing category
          const idx = data.findIndex(c => c.id === cat.id);
          if (idx < 0) return res.status(404).json({ error: 'Category not found' });
    
          const old = data[idx];
          const oldDir = getCategoryPath(old, data, docsRoot);
    
          data[idx] = { ...old, ...cat };
          const newDir = getCategoryPath(data[idx], data, docsRoot);
    
          if (!fs.existsSync(newDir)) fs.mkdirSync(newDir, { recursive: true });
    
          // Move the existing markdown file if directory changed
          const oldFiles = fs.existsSync(oldDir) ? fs.readdirSync(oldDir) : [];
          const oldFileName = oldFiles.find(f => f.includes(sanitizeFilename(old.name))) || '';
    
          if (oldDir !== newDir && oldFileName) {
            const oldFilePath = path.join(oldDir, oldFileName);
            const newFileName = `01_${sanitizeFilename(cat.name)}.md`;
            const newFilePath = path.join(newDir, newFileName);
            fs.renameSync(oldFilePath, newFilePath);
            filePath = newFilePath;
          } else if (oldFileName) {
            filePath = path.join(oldDir, oldFileName);
          }
        } else {
          // -- Create new category
          cat.id = Date.now();
          data.push(cat);
    
          const parent = data.find(c => c.id === cat.parentId) || {};
          const subCount = data.filter(c => c.parentId === cat.parentId).length;
          const dir = path.join(
            getCategoryPath(parent, data, docsRoot),
            `${String(subCount).padStart(2, '0')}-${sanitizeFilename(cat.name)}`
          );
    
          if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
          filePath = path.join(dir, `01_${sanitizeFilename(cat.name)}.md`);
        }
    
        writeCategories(data);
    
        const frontMatter = [
          `---`,
          `title: ${cat.name}`,
          `author: ${cat.author || ''}`,
          `tags: [${(cat.tags || []).join(',')}]`,
          `status: ${cat.status || 'draft'}`,
          `---`,
          ``,
          `${cat.description || ''}`
        ].join('\n');
    
        fs.writeFileSync(filePath, frontMatter, 'utf8');
    
        res.json({ success: true, category: cat });
      } catch (e) {
        console.error(e);
        res.status(500).json({ error: 'Failed to save category' });
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

    // REORDER categories
    app.post('/api/categories/reorder', (req, res) => {
      try {
        const {draggedId,targetId} = req.body;
        const data = readCategories();
        const dI = data.findIndex(c=>c.id===draggedId);
        const tI = data.findIndex(c=>c.id===targetId);
        if (dI<0||tI<0) return res.status(400).json({error:'invalid ids'});
        const [item] = data.splice(dI,1);
        data.splice(tI,0,item);
        writeCategories(data);
        res.json({success:true});
      } catch (e) {
        console.error(e);
        res.status(500).json({error:'reorder failed'});
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
  const staticPath = path.resolve(__dirname, '../web/dist');
  console.log('Serving static files from:', staticPath);
  app.use(express.static(staticPath));
  app.use(express.static(path.resolve(__dirname, '../web/dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../web/dist/index.html'));
  });
  // 404 for anything else
  app.use((req,res) => {
    res.status(404).json({error:'Not found'});
  });


  app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
  });
