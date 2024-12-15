const express = require('express');
const { createMovie, getAllMovies, getMovie, updateMovie, deleteMovie } = require('../controllers/movieController');
const verifyToken = require('../utils/verifyToken');
const router = express.Router();

router.post('/', verifyToken, createMovie);
router.get('/', verifyToken, getAllMovies);
router.get('/:id', verifyToken, getMovie);
router.put('/:id', verifyToken, updateMovie);
router.delete('/:id', verifyToken, deleteMovie);

module.exports = router;
