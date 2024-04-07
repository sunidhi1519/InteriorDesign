// File: routes/designRoutes.js

const express = require('express');
const router = express.Router();
const designController = require('../controllers/designController'); // Adjust path as necessary

// Endpoint to fetch both spaces and keywords
router.get('/spaces-and-keywords', designController.getSpacesAndKeywords);
router.get('/price-ranges', designController.getPriceRanges);
router.get('/filtered-designs', designController.getFilteredDesigns);


module.exports = router;
