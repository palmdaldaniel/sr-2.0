const express = require('express');


const router = express.Router();
const categoryController = require('../controllers/categoryController');


// Post routes setup goes underneath here...
router.get('', categoryController.getAllCategories);
router.get('/:id', categoryController.getFilteredProgramsByCategory);


module.exports = router;