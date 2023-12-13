const express = require('express');
const authController = require('./authController');
const authMiddleware = require('./authMiddleware');

const router = express.Router();

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/protected', authMiddleware, (req, res) => {
  res.send('This is a protected route');
});

module.exports = router;