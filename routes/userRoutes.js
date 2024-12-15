const express = require('express');
const { getUser, updateUser, deleteUser } = require('../controllers/userController');
const verifyToken = require('../utils/verifyToken');
const router = express.Router();

router.get('/:id', verifyToken, getUser);
router.put('/:id', verifyToken, updateUser);
router.delete('/:id', verifyToken, deleteUser);

module.exports = router;
