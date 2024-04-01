export interface Recipe {
  id: string;
  title: string;
  category: string;
  description: Description;
  imageURL: string;
  owner: string;
  likedBy: Array<string>;
}
interface Description {
  prepTime: number;
  cookTime: number;
  servings: number;
  directions: string;
}
