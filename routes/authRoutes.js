const express = require('express');
const { register, login,getAllUsers  } = require('../controllers/authController');
// const { } = require('../controllers/userController');
const verifyToken = require('../utils/verifyToken');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/users', verifyToken, getAllUsers); 

module.exports = router;
