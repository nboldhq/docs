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


module.exports = router;