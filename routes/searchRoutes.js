const express = require('express');
const { searchPerson, searchMovie, searchTv, getSearchHistory, removeItemFromSearchHistory } = require('../controllers/searchController');
const verifyToken = require('../utils/verifyToken');
const router = express.Router();

router.get('/person/:query', verifyToken, searchPerson);
router.get('/movie/:query', verifyToken, searchMovie);
router.get('/tv/:query', verifyToken, searchTv);
router.get('/history', verifyToken, getSearchHistory);
router.delete('/history/:id', verifyToken, removeItemFromSearchHistory);

module.exports = router;
