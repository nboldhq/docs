const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const DATA_FILE = path.join(__dirname, 'categories.json');

// Helper to read categories with error handling
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
// Helper to write categories with error handling
function writeCategories(data) {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Error writing categories:', error);
    throw error;
  }
}
// Helper: recursively build folder path from parent categories
function getCategoryPath(category, categories, contentRoot) {
  const parts = [];
  let current = category;
  while (current) {
    parts.unshift(current.name.trim());
    current = categories.find(c => c.id === current.parentId);
  }
  return path.join(contentRoot, ...parts);
}
// Get all categories
app.get('/api/categories', (req, res) => {
    try {
      const categories = readCategories();  // Make sure this function returns valid JSON data
      res.json(categories);
    } catch (error) {
      console.error('Error fetching categories:', error);  // Log the error for better insights
      res.status(500).json({ error: 'Failed to load categories' });
    }
  }); 
// Create or update a category
app.post('/api/categories', (req, res) => {
  try {
    const category = req.body;
    const categories = readCategories();

    // Validate category name
    if (!category.name?.trim()) {
      return res.status(400).json({ error: 'Le nom de la catégorie est requis.' });
    }

    // Validate parentId if provided
    if (category.parentId && !categories.some(c => c.id === category.parentId)) {
      return res.status(400).json({ error: 'Catégorie parente introuvable.' });
    }

    const contentRoot = path.join(__dirname, '../docs');

    let filePath = null;

    if (category.id) {
      // Update existing category
      const index = categories.findIndex(c => c.id === category.id);
      if (index === -1) {
        return res.status(404).json({ error: 'Catégorie non trouvée.' });
      }

      const originalCategory = categories[index];
      const oldFolderPath = getCategoryPath(originalCategory, categories, contentRoot);
      categories[index] = { ...originalCategory, ...category };
      const newFolderPath = getCategoryPath(categories[index], categories, contentRoot);

      const oldPath = path.join(oldFolderPath, `${originalCategory.name}.md`);
      const newPath = path.join(newFolderPath, 'README.md');  // Use README.md for updated category

      // Create new folder path if it doesn't exist
      if (!fs.existsSync(newFolderPath)) {
        fs.mkdirSync(newFolderPath, { recursive: true });
      }

      // Rename file if necessary
      if (oldPath !== newPath && fs.existsSync(oldPath)) {
        fs.renameSync(oldPath, newPath);
      }

      filePath = newPath;
      categories[index] = { ...originalCategory, ...category };
    } else {
      // Create new category
      category.id = Date.now();
      categories.push(category);

      const tagFolder = category.tags?.[0]?.trim();  // Use the first tag as the folder name

      if (!tagFolder) {
        return res.status(400).json({ error: 'Le tag est requis pour la catégorie.' });
      }

      // Create folder path based on the tag
      const folderPath = path.join(contentRoot, tagFolder);

      // Create folder if it doesn't exist
      if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
      }

      filePath = path.join(folderPath, 'README.md');  // Use README.md for new category
    }

    // Save updated categories
    writeCategories(categories);

    // Write Markdown content
    const frontmatter = `---\ntitle: ${category.name}\nauthor: ${category.author || ''}\ntags: [${(category.tags || []).join(', ')}]\n---\n\n`;
    const markdownContent = `${frontmatter}${category.description || ''}`;
    fs.writeFileSync(filePath, markdownContent, 'utf-8');

    return res.status(200).json({ success: true, category });
  } catch (error) {
    console.error('Erreur lors de l\'enregistrement de la catégorie:', error);
    return res.status(500).json({ error: 'Erreur interne du serveur.' });
  }
});
// Delete a category and its children
app.delete('/api/categories/:id', (req, res) => {
    try {
      const id = parseInt(req.params.id);
      let categories = readCategories();
  
      // Find the category to delete
      const categoryToDelete = categories.find(c => c.id === id);
      if (!categoryToDelete) {
        return res.status(404).json({ error: 'Category not found' });
      }
  
      const tagFolder = categoryToDelete.tags?.[0]?.trim();
      if (!tagFolder) {
        return res.status(400).json({ error: 'No tags found for category' });
      }
  
      const contentRoot = path.join(__dirname, '../docs');
      const folderPath = path.join(contentRoot, tagFolder);
  
      // Delete associated Markdown file
      const filePath = path.join(folderPath, `${categoryToDelete.name}.md`);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
  
      // Remove category and any children recursively
      const deleteRecursive = (idToDelete) => {
        categories = categories.filter(c => {
          if (c.parentId === idToDelete) {
            deleteRecursive(c.id);
          }
          return c.id !== idToDelete;
        });
      };
  
      deleteRecursive(id);
      writeCategories(categories);
  
      // Delete the folder and its contents if it exists
      if (fs.existsSync(folderPath)) {
        fs.rmSync(folderPath, { recursive: true, force: true });
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