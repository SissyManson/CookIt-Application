import { authUser } from './User';

export interface Recipe {
  _id: string;
  title: string;
  category: string;
  prepTime: number;
  cookTime: number;
  servings: number;
  directions: string;
  imageURL: string;
  owner: authUser;
  likedBy: string[];
  created_at: string;
  updatedAt: string;
}
