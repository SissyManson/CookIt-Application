export interface User {
  id: string;
  username: string;
  email: string;
  password: string;
  ownedRecipes:Array<string>
  likedRecipes:Array<string>
}
