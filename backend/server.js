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
  return fs.existsSync(DATA_FILE)
    ? JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'))
    : [];
}

function writeCategories(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

function getCategorySiblings(categories, parentId) {
  return categories.filter(c => c.parentId === parentId);
}

function getCategoryFolderName(category, categories) {
  const siblings = getCategorySiblings(categories, category.parentId);
  const index = siblings.findIndex(c => c.id === category.id);
  const folderIndex = index !== -1 ? index + 1 : siblings.length + 1;
  return `${folderIndex}-${category.name.replace(/[/\\?%*:|"<>]/g, '')}`;
}

function getCategoryPath(category, categories, contentRoot) {
  let pathParts = [];
  let current = category;
  while (current) {
    const folderName = getCategoryFolderName(current, categories);
    pathParts.unshift(folderName);
    current = categories.find(c => c.id === current.parentId);
  }
  return path.join(contentRoot, ...pathParts);
}

// GET: All categories
app.get('/api/categories', (req, res) => {
  try {
    const categories = readCategories();
    res.json(categories);
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ error: 'Failed to load categories' });
  }
});

// POST: Create or update a category
app.post('/api/categories', (req, res) => {
  try {
    const category = req.body;
    const categories = readCategories();

    if (!category.name?.trim()) {
      return res.status(400).json({ error: 'Le nom de la catégorie est requis.' });
    }

    if (category.parentId && !categories.some(c => c.id === category.parentId)) {
      return res.status(400).json({ error: 'Catégorie parente introuvable.' });
    }

    const contentRoot = path.join(__dirname, '../docs');
    let filePath = null;

    if (category.id) {
      // Updating
      const index = categories.findIndex(c => c.id === category.id);
      if (index === -1) return res.status(404).json({ error: 'Catégorie non trouvée.' });

      const originalCategory = categories[index];
      const oldFolderPath = getCategoryPath(originalCategory, categories, contentRoot);

      categories[index] = { ...originalCategory, ...category };
      const newFolderPath = getCategoryPath(categories[index], categories, contentRoot);

      const oldPath = path.join(oldFolderPath, `README.md`);
      const newPath = path.join(newFolderPath, `README.md`);

      if (!fs.existsSync(newFolderPath)) {
        fs.mkdirSync(newFolderPath, { recursive: true });
      }

      if (oldPath !== newPath && fs.existsSync(oldPath)) {
        fs.renameSync(oldPath, newPath);
      }

      filePath = newPath;
    } else {
      // Creating
      category.id = Date.now();
      categories.push(category);

      const folderPath = getCategoryPath(category, categories, contentRoot);
      if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
      }

      filePath = path.join(folderPath, 'README.md');
    }

    writeCategories(categories);

    const frontmatter = `---\ntitle: ${category.name}\nauthor: ${category.author || ''}\ntags: [${(category.tags || []).join(', ')}]\n---\n\n`;
    const markdownContent = `${frontmatter}${category.description || ''}`;
    fs.writeFileSync(filePath, markdownContent, 'utf-8');

    return res.status(200).json({ success: true, category });
  } catch (error) {
    console.error('Erreur lors de l\'enregistrement de la catégorie:', error);
    return res.status(500).json({ error: 'Erreur interne du serveur.' });
  }
});

// DELETE: Remove a category and its children
app.delete('/api/categories/:id', (req, res) => {
  try {
    const id = parseInt(req.params.id);
    let categories = readCategories();
    const categoryToDelete = categories.find(c => c.id === id);

    if (!categoryToDelete) {
      return res.status(404).json({ error: 'Catégorie non trouvée.' });
    }

    const contentRoot = path.join(__dirname, '../docs');
    const folderPath = getCategoryPath(categoryToDelete, categories, contentRoot);

    // Delete associated README
    const filePath = path.join(folderPath, 'README.md');
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    // Delete children recursively
    const deleteRecursive = (idToDelete) => {
      const children = categories.filter(c => c.parentId === idToDelete);
      children.forEach(child => deleteRecursive(child.id));
      categories = categories.filter(c => c.id !== idToDelete);
    };

    deleteRecursive(id);
    writeCategories(categories);

    if (fs.existsSync(folderPath)) {
      fs.rmSync(folderPath, { recursive: true, force: true });
    }

    res.json({ success: true });
  } catch (error) {
    console.error('Erreur suppression:', error);
    res.status(500).json({ error: 'Erreur interne lors de la suppression.' });
  }
});

// POST: Reorder categories
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
    console.error('Reorder failed:', error);
    res.status(500).json({ error: 'Failed to reorder categories' });
  }
});

// GET: Folder content
app.get('/api/folder-content', (req, res) => {
  try {
    const folderName = req.query.folderName;
    if (!folderName) {
      return res.status(400).json({ error: 'folderName is required' });
    }

    const contentRoot = path.join(__dirname, '../docs'); // unified with create/delete
    const folderPath = path.join(contentRoot, folderName);

    if (!fs.existsSync(folderPath)) {
      return res.status(404).json({ error: 'Folder not found' });
    }

    const files = fs.readdirSync(folderPath).map(file => ({
      fileName: file,
      filePath: path.join(folderPath, file),
      isDirectory: fs.statSync(path.join(folderPath, file)).isDirectory()
    }));

    res.json({ success: true, files });
  } catch (error) {
    console.error('Error reading folder content:', error);
    res.status(500).json({ error: 'Failed to retrieve folder content' });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
