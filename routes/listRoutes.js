const express = require('express');
const { createList, getAllLists, getList, updateList, deleteList } = require('../controllers/listController');
const verifyToken = require('../utils/verifyToken');
const router = express.Router();

router.post('/', verifyToken, createList);
router.get('/', verifyToken, getAllLists);
router.get('/:id', verifyToken, getList);
router.put('/:id', verifyToken, updateList);
router.delete('/:id', verifyToken, deleteList);

module.exports = router;
