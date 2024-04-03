import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from 'src/app/types/Recipe';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  recipe = {} as Recipe;
  totalTime: number = 0;
  getDirections: Array<string> = [];

  constructor(
    private recipeService: RecipeService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // get the recipe trough the id in the link
    this.activatedRoute.params.subscribe((data) => {
      this.recipeService.getOne(data['recipeId']).subscribe((recipe) => {
        this.recipe = recipe;

        this.recipe.directions = recipe.directions[0];
        this.totalTime = recipe.prepTime + recipe.cookTime;
        this.getDirections = this.recipe.directions.split('\n');
      });
    });
  }

  getTotalTime() {
    if (this.totalTime >= 60) {
      let hours = Math.floor(this.totalTime / 60);
      let mins = this.totalTime % 60;
      return `${hours} h ${mins} mins`;
    }
    return `${this.totalTime} mins`;
  }
}
