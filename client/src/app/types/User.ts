import { Recipe } from './Recipe';

export interface User {
  _id: string;
  username: string;
  email: string;
  password: string;
  ownedRecipes: Recipe[];
  likedRecipes: string[];
}
export interface authUser {
  id: string;
  username: string;
  email: string;
  password: string;
}
