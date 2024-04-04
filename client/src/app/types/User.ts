import { Recipe } from './Recipe';

export interface User {
  _id: string;
  username: string;
  email: string;
  password: string;
  ownedRecipes: Recipe[];
  likedRecipes: Recipe[];
}
export interface authUser {
  _id: string;
  username: string;
  email: string;
  password: string;
}
