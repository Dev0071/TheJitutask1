const express = require('express');
const router = express.Router();
const { registerUserController } = require('../controllers/registerUser.js');

// Define the route for user registration
router.post('/register', registerUserController);

module.exports = router;
