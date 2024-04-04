import { User } from './User';

export interface Recipe {
  _id: string;
  title: string;
  category: string;
  prepTime: number;
  cookTime: number;
  servings: number;
  directions: string;
  imageURL: string;
  owner: User;
  likedBy: User[];
  created_at: string;
  updatedAt: string;
}
