// server.js
const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
const DATA_FILE = path.join(__dirname, 'categories.json');

app.use(express.json());
app.use(cors({ origin: '*', methods: ['GET','POST','PUT','PATCH','DELETE'] }));

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

// GET all categories
app.get('/api/categories', (req, res) => {
  try { res.json(readCategories()) }
  catch (e) { res.status(500).json({error:'Failed to load'}) }
});

// CREATE or UPDATE a category
app.post('/api/categories', (req, res) => {
  try {
    const data = readCategories();
    const cat  = req.body;
    if (!cat.name?.trim()) return res.status(400).json({error:'name required'});

    const docsRoot = path.join(__dirname,'docs');
    let filePath;

    if (cat.id) {
      // — update existing
      const idx = data.findIndex(c=>c.id===cat.id);
      if (idx<0) return res.status(404).json({error:'not found'});
      const old = data[idx];
      const oldDir = getCategoryPath(old,data,docsRoot);
      data[idx] = {...old,...cat};
      const newDir = getCategoryPath(data[idx],data,docsRoot);
      if (!fs.existsSync(newDir)) fs.mkdirSync(newDir,{recursive:true});

      // move or rename the single markdown file
      const files = fs.existsSync(oldDir)?fs.readdirSync(oldDir):[];
      const f = files.find(f=>f.includes(sanitizeFilename(old.name)))||'';
      if (oldDir!==newDir && f) {
        fs.renameSync(path.join(oldDir,f), path.join(newDir, `${f}`));
        filePath = path.join(newDir, f);
      } else if (f) {
        filePath = path.join(oldDir,f);
      }
    } else {
      // — create new
      cat.id = Date.now();
      data.push(cat);
      const parent = data.find(c=>c.id===cat.parentId) || {};
      const dir   = path.join(
        getCategoryPath(parent,data,docsRoot),
        `${String(data.filter(c=>c.parentId===cat.parentId).length).padStart(2,'0')}-${sanitizeFilename(cat.name)}`
      );
      if (!fs.existsSync(dir)) fs.mkdirSync(dir,{recursive:true});
      filePath = path.join(dir, `01_${sanitizeFilename(cat.name)}.md`);
    }

    writeCategories(data);

    const fm = `---\n`
             + `title: ${cat.name}\n`
             + `author: ${cat.author||''}\n`
             + `tags: [${(cat.tags||[]).join(',')}]\n`
             + `status: ${cat.status}\n`
             + `---\n\n${cat.description||''}\n`;

    fs.writeFileSync(filePath, fm,'utf8');
    res.json({success:true,category:cat});
  } catch (e) {
    console.error(e);
    res.status(500).json({error:'save failed'});
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
