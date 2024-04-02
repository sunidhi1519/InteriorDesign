const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

// Import routes
const designRoutes = require('./routes/designRoutes');

// Middleware
app.use(cors());
app.use(express.json());

// Use Routes
app.use('/api/designs', designRoutes);
app.get('/api/design-image/:designId', async (req, res) => {
    try {
        const { designId } = req.params;
        // Replace with your actual query and parameterization method
        const query = 'SELECT image_column FROM your_design_table WHERE id = ?';
        const [row] = await db.promise().query(query, [designId]);

        if (row.length > 0) {
            const imageBuffer = row[0].image_column;
            res.writeHead(200, {
                'Content-Type': 'image/jpeg',
                'Content-Length': imageBuffer.length,
            });
            res.end(imageBuffer);
        } else {
            res.status(404).send('Design not found');
        }
    } catch (error) {
        console.error('Error serving design image:', error);
        res.status(500).send('Internal Server Error');
    }
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
