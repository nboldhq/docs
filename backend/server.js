const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 3000;
const DATA_DIR = path.join(__dirname, 'data/');
const OPENAPI_FILE = path.join(DATA_DIR, 'openapi.json');
const categoriesRouter = require('./routes/categories');
const specRouter = require('./routes/spec');
const healthRouter = require('./routes/health');
const uploadRouter = require('./routes/upload');


app.use(cors({ origin: '*', methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'] }));

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Use routers
app.use('/api/health',healthRouter ); 
app.use('/api/categories', categoriesRouter);
app.use('/api/spec', specRouter);
app.use('/api/upload', uploadRouter);

// API ROUTES

app.post('/api/save', (req, res) => {
    try {
        // Validate request body
        if (!req.body || typeof req.body !== 'object') {
            return res.status(400).json({ error: 'Invalid request format' });
        }

        // Validate OpenAPI structure
        if (!req.body.info || !req.body.paths) {
            return res.status(400).json({
                error: 'Invalid OpenAPI structure - missing required fields',
            });
        }

        // Write to file
        fs.writeFileSync(OPENAPI_FILE, JSON.stringify(req.body, null, 2));

        res.json({
            success: true,
            message: 'Changes saved successfully',
            timestamp: new Date().toISOString(),
        });
    } catch (err) {
        console.error('Save error:', err);
        res.status(500).json({
            error: 'Error saving file',
            details: err.message,
        });
    }
});


// SPA & Static Assets
const staticPath = path.resolve(__dirname, 'public'); 
app.use(express.static(staticPath));
app.get('*', (req, res) => {
    res.sendFile(path.join(staticPath, 'index.html'));
});

// 404 for anything else
app.use((req, res) => {
    res.status(404).json({ error: 'Not found' });
});

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});