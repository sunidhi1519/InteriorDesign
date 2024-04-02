const express = require('express');
const router = express.Router();
const designController = require('../controllers/designController');


router.get('/', designController.getDesigns);

module.exports = router;
