const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const recipeSchema = new mongoose.Schema(
   {
      title: {
         type: String,
         required: true,
         minLength: [3, 'Title must be at least 3 characters long!'],
      },
      category: {
         type: String,
         required: true,
         toLowerCase: true,
         minLength: [3, 'Category must be at least 3 characters long!'],
      },
      prepTime: {
         type: Number,
         required: true,
         min: 1,
      },
      cookTime: {
         type: Number,
         required: true,
         min: 1,
      },
      servings: {
         type: Number,
         required: true,
         min: 1,
      },
      directions: {
         type: Array,
         required: true,
         minLength: [13, 'Directions must be at least 13 characters long!'],
      },
      imageURL: {
         type: String,
         required: true,
         match: /^https?:\/\//,
      },
      tags: {
         type: Array,
         required: true,
      },
      owner: {
         type: ObjectId,
         ref: 'User',
      },
      likedBy: [
         {
            type: ObjectId,
            ref: 'User',
         },
      ],
   },
   { timestamps: { createdAt: 'created_at' } }
);

module.exports = mongoose.model('Recipe', recipeSchema);
