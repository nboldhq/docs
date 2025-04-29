const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const DATA_FILE = path.join(__dirname, 'categories.json');

    function readCategories() {
      try {
        if (!fs.existsSync(DATA_FILE)) return [];
        const data = fs.readFileSync(DATA_FILE, 'utf8');
        return JSON.parse(data);
      } catch (error) {
        console.error('Error reading categories:', error);
        throw error;
      }
    }
    function writeCategories(data) {
      try {
        fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
      } catch (error) {
        console.error('Error writing categories:', error);
        throw error;
      }
    }
    function getCategoryPath(category, categories, contentRoot) {
      const parts = [];
      let current = category;
    
      while (current && current.name) {
        const siblings = categories.filter(c => c.parentId === current.parentId);
        const index = siblings.findIndex(s => s.id === current.id);
        const seq = String(index + 1).padStart(2, '0');
        parts.unshift(`${seq}-${sanitizeFilename(current.name)}`);
        current = categories.find(c => c.id === current.parentId);
      }
    
      return path.join(contentRoot, ...parts);
    }
    
    function sanitizeFilename(name) {
      return name.replace(/[<>:"/\\|?*\x00-\x1F]/g, '').trim();
    }
    // Get all categories
    app.get('/api/categories', (req, res) => {
        try {
          const categories = readCategories(); 
          res.json(categories);
        } catch (error) {
          console.error('Error fetching categories:', error);  
          res.status(500).json({ error: 'Failed to load categories' });
        }
      }); 
    // Create or update a category
    app.post('/api/categories', (req, res) => {
      try {
        const category = req.body;
        const categories = readCategories();
    
        // Validate required fields
        if (!category.name?.trim()) {
          return res.status(400).json({ error: 'Category name is required.' });
        }
    
        const contentRoot = path.join(__dirname, 'docs');
        let filePath = null;
    
        if (category.id) {
          // Update existing category
          const index = categories.findIndex(c => c.id === category.id);
          if (index === -1) {
            return res.status(404).json({ error: 'Category not found' });
          }
    
          const originalCategory = categories[index];
          const oldFolderPath = getCategoryPath(originalCategory, categories, contentRoot);
          categories[index] = { ...originalCategory, ...category };
          const newFolderPath = getCategoryPath(categories[index], categories, contentRoot);
    
          // Create new folder structure if needed
          if (!fs.existsSync(newFolderPath)) {
            fs.mkdirSync(newFolderPath, { recursive: true });
          }
    
         // Find the old file name
            const oldFiles = fs.readdirSync(oldFolderPath);
            const oldFile = oldFiles.find(f => f.includes(sanitizeFilename(originalCategory.name)));
            const oldSeqMatch = oldFile?.match(/^(\d+)_/);
            const seq = oldSeqMatch ? oldSeqMatch[1] : '01';

            // If the folder changed, move the file
            if (oldFolderPath !== newFolderPath && oldFile) {
              const oldFilePath = path.join(oldFolderPath, oldFile);
              const newFileName = `${seq}_${sanitizeFilename(category.name)}.md`;
              filePath = path.join(newFolderPath, newFileName);
              fs.renameSync(oldFilePath, filePath);
            } else if (oldFile) {
              // Folder didn't change; just update the same file
              filePath = path.join(oldFolderPath, oldFile);
            }

    
          // Move old files to new location
            if (oldFolderPath !== newFolderPath) {
              const oldFiles = fs.readdirSync(oldFolderPath);
              
              oldFiles.forEach(file => {
                const oldFilePath = path.join(oldFolderPath, file);
                const newFilePath = path.join(newFolderPath, file);
                fs.renameSync(oldFilePath, newFilePath);
              });

              // After moving, check if old folder is empty
              const remainingFiles = fs.readdirSync(oldFolderPath);
              if (remainingFiles.length === 0) {
                fs.rmdirSync(oldFolderPath);
                console.log(`Removed old empty folder: ${oldFolderPath}`);
              }
            }
        }else {
          // Create new category
          category.id = Date.now();
          categories.push(category);

          const parent = categories.find(c => c.id === category.parentId);
          const siblings = categories.filter(c => c.parentId === category.parentId);
          const folderSeq = String(siblings.length).padStart(2, '0');

          const sanitizedName = sanitizeFilename(category.name);
          const numberedFolderName = `${folderSeq}-${sanitizedName}`;
          const folderPath = path.join(
            getCategoryPath(parent || {}, categories, contentRoot),
            numberedFolderName
          );

          if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath, { recursive: true });
          }

          // File name inside folder
          const files = fs.readdirSync(folderPath);
          const maxSeq = files.reduce((max, file) => {
            const match = file.match(/^(\d+)_/);
            return match ? Math.max(max, parseInt(match[1])) : max;
          }, 0);

          filePath = path.join(folderPath, `${maxSeq + 1}_${sanitizedName}.md`);
        }

    
        // Write category data
        writeCategories(categories);
    
        // Create markdown content with frontmatter
        const frontmatter = `---\n
        title: ${category.name}\n
        author: ${category.author || ''}\n
        tags: [${(category.tags || []).join(', ')}]\n
        status: ${category.status}\n
        ---\n\n
        ${category.description || ''}`;
        
            fs.writeFileSync(filePath, frontmatter, 'utf-8');
            
            return res.status(200).json({ success: true, category });
          } catch (error) {
            console.error('Error saving category:', error);
            return res.status(500).json({ error: 'Internal server error' });
          }
    }); 
    // Delete a category and its children
    app.delete('/api/categories/:id', (req, res) => {
      try {
        const id = parseInt(req.params.id);
        let categories = readCategories();
    
        const categoryToDelete = categories.find(c => c.id === id);
        if (!categoryToDelete) {
          return res.status(404).json({ error: 'Category not found' });
        }
    
        const contentRoot = path.join(__dirname, 'docs');
        const folderPath = getCategoryPath(categoryToDelete, categories, contentRoot);
    
        // Recursively delete children first
        const deleteRecursive = (idToDelete) => {
          const children = categories.filter(c => c.parentId === idToDelete);
          children.forEach(child => deleteRecursive(child.id));
          categories = categories.filter(c => c.id !== idToDelete);
        };
    
        deleteRecursive(id);
        writeCategories(categories);
    
        // Remove the folder and all contents
        if (fs.existsSync(folderPath)) {
          fs.rmSync(folderPath, { recursive: true, force: true });
          console.log(`Deleted folder and files: ${folderPath}`);
        }
    
        res.json({ success: true });
      } catch (error) {
        console.error('Error deleting category:', error);
        res.status(500).json({ error: 'Failed to delete category' });
      }
    });
    

    app.post('/api/categories/reorder', (req, res) => {
        try {
          const { draggedId, targetId } = req.body;
          const categories = readCategories();
      
          const draggedIndex = categories.findIndex(c => c.id === draggedId);
          const targetIndex = categories.findIndex(c => c.id === targetId);
      
          if (draggedIndex === -1 || targetIndex === -1) {
            return res.status(400).json({ error: 'Invalid IDs for reordering' });
          }
      
          const [draggedItem] = categories.splice(draggedIndex, 1);
          categories.splice(targetIndex, 0, draggedItem);
      
          writeCategories(categories);
          res.json({ success: true });
        } catch (error) {
          res.status(500).json({ error: 'Failed to reorder categories' });
        }
      });
    // Endpoint to get the contents and files in a folder
    app.get('/api/folder-content', (req, res) => {
        try {
          // Get the folder path from query parameters
          const folderName = req.query.folderName;
          if (!folderName) {
            return res.status(400).json({ error: 'folderName is required' });
          }
      
          const contentRoot = path.join(__dirname, '../content');
          const folderPath = path.join(contentRoot, folderName);
      
          // Check if the folder exists
          if (!fs.existsSync(folderPath)) {
            return res.status(404).json({ error: 'Folder not found' });
          }
      
          // Read the contents of the folder
          const files = fs.readdirSync(folderPath).map(file => {
            return {
              fileName: file,
              filePath: path.join(folderPath, file),
              isDirectory: fs.statSync(path.join(folderPath, file)).isDirectory(),
            };
          });
      
          // Return the list of files and directories in the folder
          res.json({ success: true, files });
        } catch (error) {
          console.error('Error reading folder content:', error);
          res.status(500).json({ error: 'Failed to retrieve folder content' });
        }
      });
      
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });