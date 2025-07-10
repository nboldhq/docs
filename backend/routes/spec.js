const express = require('express');
const fs = require('fs');
const path = require('path');
const multer = require('multer');
const router = express.Router();

const DATA_DIR = path.join(__dirname, '../data/');
const OPENAPI_FILE = path.join(DATA_DIR, 'openapi.json');
const UPLOAD_DIR = path.join(__dirname, '../uploads/');

// Ensure upload directory exists
if (!fs.existsSync(UPLOAD_DIR)) {
    fs.mkdirSync(UPLOAD_DIR, { recursive: true });
}

const upload = multer({ dest: UPLOAD_DIR });

router.get('/', (req, res) => {
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

router.post('/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }

    // Read the uploaded file
    fs.readFile(req.file.path, 'utf8', (err, data) => {
        // Always delete the temp file
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

module.exports = router;