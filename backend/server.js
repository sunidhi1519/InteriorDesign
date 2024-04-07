const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

// Import routes
const designRoutes = require('./routes/designRoutes'); // Adjust path as necessary

// Middleware
app.use(cors());
app.use(express.json());

// Use design routes
app.use('/api', designRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
