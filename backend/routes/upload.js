const express = require('express');
const fs = require('fs');
const path = require('path');
const multer = require('multer');
const router = express.Router();

const DATA_DIR = path.join(__dirname, '../data/');
const OPENAPI_FILE = path.join(DATA_DIR, 'openapi.json');
const UPLOAD_DIR = path.join(__dirname, '../uploads/');

if (!fs.existsSync(UPLOAD_DIR)) {
    fs.mkdirSync(UPLOAD_DIR, { recursive: true });
}

const upload = multer({ dest: UPLOAD_DIR });

router.post('/', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }

    fs.readFile(req.file.path, 'utf8', (err, data) => {
        fs.unlink(req.file.path, () => {}); // cleanup temp file

        if (err) {
            return res.status(500).json({ error: 'Error reading uploaded file' });
        }

        try {
            const openAPISpec = JSON.parse(data);
            fs.writeFileSync(OPENAPI_FILE, JSON.stringify(openAPISpec, null, 2), 'utf8');
            res.json({ message: 'File uploaded and saved as openapi.json' });
        } catch {
            res.status(400).json({ error: 'Invalid JSON file' });
        }
    });
});

module.exports = router;
