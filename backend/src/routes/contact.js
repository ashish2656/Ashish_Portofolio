const express = require('express');
const router = express.Router();
const { sendContactEmail } = require('../controllers/contactController');

// @route   POST /api/contact
// @desc    Send contact email
// @access  Public
router.post('/', sendContactEmail);

module.exports = router; 