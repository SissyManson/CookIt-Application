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

  createRecipe(
    title: string,
    category: string,
    prepTime: string,
    cookTime: string,
    servings: string,
    directions: string,
    imageURL: string,
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
      owner,
    });
  }

  updateRecipe() {}

  deleteRecipe() {}

  getLastFive(num: number) {
    let url = `${apiUrl}/recipes`;

    if (num) url += `?limit=${num}`;

    return this.http.get<Recipe[]>(url);
  }
}
