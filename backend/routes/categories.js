const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();
const DATA_DIR = path.join(__dirname, '../data/');
const DATA_FILE = path.join(DATA_DIR, 'categories.json');

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Helper functions
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
    return name.replace(/[<>:"/\\|?*\x00-\x1F]/g, '').trim();
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

// API Endpoints
router.get('/', (req, res) => {
    try {
        res.json(readCategories());
    } catch (e) {
        res.status(500).json({ error: 'Failed to load' });
    }
});

router.post('/', (req, res) => {
    try {
        const data = readCategories();
        const cat = req.body;

        if (!cat.name?.trim()) {
            return res.status(400).json({ error: 'Name is required' });
        }

        if (cat.id) {
            const idx = data.findIndex(c => c.id === cat.id);
            if (idx < 0) return res.status(404).json({ error: 'Category not found' });
            data[idx] = { ...data[idx], ...cat };
        } else {
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

router.post('/reorder', (req, res) => {
    try {
        const { draggedId, newParentId, newIndex } = req.body;
        console.log('Reorder request:', { draggedId, newParentId, newIndex });

        if (!draggedId || newIndex === undefined) {
            return res.status(400).json({ error: 'Missing required fields: draggedId and newIndex are required' });
        }

        const data = readCategories();
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

        newParentArray.forEach((cat, idx) => {
            cat.sortOrder = idx; 
        });

            if (newParentId === null) {
                data.forEach((cat, idx) => {
                    cat.sortOrder = idx;
                });
}


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

router.delete('/:id', (req, res) => {
    try {
        const id = +req.params.id;
        let data = readCategories();
        const toDel = data.find(c => c.id === id);
        if (!toDel) return res.status(404).json({ error: 'not found' });

        const docsRoot = path.join(__dirname, 'docs');
        const folder = getCategoryPath(toDel, data, docsRoot);

        const removeRec = i => {
            data.filter(c => c.parentId === i).forEach(child => removeRec(child.id));
            data = data.filter(c => c.id !== i);
        };
        removeRec(id);
        writeCategories(data);

        if (fs.existsSync(folder)) fs.rmSync(folder, { recursive: true, force: true });
        res.json({ success: true });
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: 'delete failed' });
    }
});

router.patch('/:id', (req, res) => {
    try {
        const id = +req.params.id;
        const data = readCategories();
        const idx = data.findIndex(c => c.id === id);
        if (idx < 0) return res.status(404).json({ error: 'not found' });
        data[idx] = { ...data[idx], ...req.body };
        writeCategories(data);
        res.json({ success: true, category: data[idx] });
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: 'patch failed' });
    }
});

module.exports = router;