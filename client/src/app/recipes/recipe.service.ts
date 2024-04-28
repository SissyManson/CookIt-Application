import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Recipe } from '../types/Recipe';

const { apiUrl } = environment;

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Recipe[]>(`${apiUrl}/recipes`);
  }

  getOne(id: string) {
    return this.http.get<Recipe>(`${apiUrl}/recipes/${id}`);
  }

  search(searchTags: string | undefined) {
    return this.http.get<Recipe[]>(
      `${apiUrl}/recipes/search?searchTags=${searchTags}`
    );
  }

  like(recipeId: string, userId: string) {
    return this.http.put<Recipe>(`/api/recipes/${recipeId}/like`, { userId });
  }

  createRecipe(
    title: string,
    category: string,
    prepTime: string,
    cookTime: string,
    servings: string,
    directions: string,
    imageURL: string,
    tags: string[],
    owner: string
  ) {
    return this.http.post<Recipe>('/api/recipes', {
      title,
      category,
      prepTime,
      cookTime,
      servings,
      directions,
      imageURL,
      tags,
      owner,
    });
  }

  editRecipe(
    title: string,
    category: string,
    prepTime: string,
    cookTime: string,
    servings: string,
    directions: string,
    imageURL: string,
    tags: string[],
    recipeId: string
  ) {
    return this.http.put<Recipe>(`/api/recipes/${recipeId}`, {
      title,
      category,
      prepTime,
      cookTime,
      servings,
      directions,
      imageURL,
      tags,
    });
  }

  deleteRecipe(recipeId: string) {
    return this.http.delete<Recipe>(`/api/recipes/${recipeId}`);
  }

  getLastFive(num: number) {
    let url = `${apiUrl}/recipes`;

    if (num) url += `?limit=${num}`;

    return this.http.get<Recipe[]>(url);
  }
}
