export interface Recipe {
  _id: string;
  title: string;
  category: string;
  description: Description;
  imageURL: string;
  owner: string;
  likedBy: string[];
}
interface Description {
  prepTime: number;
  cookTime: number;
  servings: number;
  directions: string;
}
