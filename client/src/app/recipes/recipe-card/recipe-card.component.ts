import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/types/Recipe';
import { RecipeService } from '../recipe.service';
import { UserService } from 'src/app/user/user.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css'],
})
export class RecipeCardComponent implements OnInit {
  recipes: Recipe[] | null = [];
  isLoading: boolean = true;

  constructor(
    private recipeService: RecipeService,
    private userService: UserService,
    private fb: FormBuilder
  ) {}

  get isLoggedUser(): boolean {
    return this.userService.isLoggedUser;
  }

  get userId(): string {
    return this.userService.user?._id || '';
  }

  // ! TODO: textarea new lines are saved as '\n'
  ngOnInit(): void {
    this.recipeService.getAll().subscribe((recipess) => {
      this.recipes = recipess;
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    });
  }

  searchForm = this.fb.group({
    searchTags: [''],
  });

  searchingFor() {
    const searchTags = this.searchForm.value.searchTags?.trim();

    this.recipeService
      .search(searchTags)
      .subscribe((foundRecipes) => (this.recipes = foundRecipes));
  }
}
