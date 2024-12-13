const express = require('express');
const { registerUser, loginUser, protectedRoute } = require('../controllers/authController');
const authMiddleware = require('../middlewareS/authmiddleware');

const router = express.Router();

// Route for user registration
router.post('/register', registerUser);

// Route for user login
router.get('/login', loginUser);

// Route for protected access
router.get('/protected', authMiddleware, protectedRoute);

module.exports = router;
