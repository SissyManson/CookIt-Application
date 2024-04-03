const { recipeModel, userModel } = require('../models');

function getRecipes(req, res, next) {
   recipeModel
      .find()
      .populate('owner')
      .then((recipes) => res.json(recipes))
      .catch(next);
}

function getOne(req, res, next) {
   const { recipeId } = req.params;

   recipeModel
      .findById(recipeId) // TODO: populate if a detailed recipe is needed
      .then((recipe) => res.json(recipe))
      .catch(next);
}

function createRecipe(req, res, next) {
   const recipeData = req.body;
   const { _id: userId } = req.user;

   recipeModel
      .create({
         owner: userId,
         ...recipeData,
      })
      .then((recipe) => res.status(200).json(recipe))
      .catch(next);
}

function editRecipe(req, res, next) {
   const { recipeId } = req.params;
   const recipeData = req.body;
   const { _id: userId } = req.user;

   // if the userId is not the same as the one of the recipe, the recipe will not be updated
   recipeModel
      .findOneAndUpdate(
         { _id: recipeId, userId },
         { ...recipeData },
         { new: true }
      )
      .then((updatedRecipe) => {
         if (updatedRecipe) {
            res.status(200).json(updatedRecipe);
         } else {
            res.status(401).json({ message: `Not allowed!` });
         }
      })
      .catch(next);
}

function deleteRecipe(req, res, next) {
   const { recipeId } = req.params;
   const { _id: userId } = req.user;

   Promise.all([
      recipeModel.findOneAndDelete({ _id: recipeId, userId }),
      userModel.findOneAndUpdate(
         { _id: userId },
         { $pull: { recipes: recipeId } }
      ),
   ])
      .then(([deletedOne, _]) => {
         if (deletedOne) {
            res.status(200).json(deletedOne);
         } else {
            res.status(401).json({ message: `Not allowed!` });
         }
      })
      .catch(next);
}

function like(req, res, next) {
   const recipeId = req.params.recipeId;
   const { _id: userId } = req.user;

   recipeModel
      .findByIdAndUpdate(
         { _id: recipeId },
         { $addToSet: { likedBy: userId } },
         { new: true }
      )
      .then((updatedRecipe) => res.status(200).json(updatedRecipe))
      .catch(next);
}

module.exports = {
   getRecipes,
   getOne,
   createRecipe,
   editRecipe,
   deleteRecipe,
   like,
};
