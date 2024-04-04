const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const recipeController = require('../controllers/recipeController');
// middleware that is specific to this router

router.get('/', recipeController.getRecipes);
router.post('/', auth(), recipeController.createRecipe);

router.get('/:recipeId', recipeController.getOne);
// router.put('/:recipeId', recipeController.like);
router.put('/:recipeId', auth(), recipeController.editRecipe);
router.delete('/:recipeId', auth(), recipeController.deleteRecipe);

module.exports = router;
