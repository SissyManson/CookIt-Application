import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from 'src/app/types/Recipe';
import { UserService } from 'src/app/user/user.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  recipe = {} as Recipe;
  totalTime: number = 0;
  getDirections: Array<string> = [];

  get isLoggedUser(): boolean {
    return this.userService.isLoggedUser;
  }

  get userId(): string {
    return this.userService.user?._id || '';
  }

  editMode: boolean = false;
  editForm = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
    category: ['', [Validators.required]],
    prepTime: ['', [Validators.required, Validators.min(1)]],
    cookTime: ['', [Validators.required, Validators.min(1)]],
    servings: ['', [Validators.required, Validators.min(1)]],
    directions: ['', [Validators.required, Validators.minLength(13)]],
    imageURL: [
      '',
      [Validators.required, Validators.pattern(new RegExp('^https?://'))],
    ],
  });

  constructor(
    private recipeService: RecipeService,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    // LOAD the recipe trough the id in the link

    this.activatedRoute.params.subscribe((data) => {
      this.recipeService.getOne(data['recipeId']).subscribe((recipe) => {
        this.recipe = recipe;

        this.recipe.directions = recipe.directions[0];
        this.totalTime = recipe.prepTime + recipe.cookTime;
        this.getDirections = this.recipe.directions.split('\n');

        //! load data in Edit form
        this.editForm.setValue({
          title: recipe.title,
          category: recipe.category,
          cookTime: recipe.cookTime.toString(),
          prepTime: recipe.prepTime.toString(),
          servings: recipe.servings.toString(),
          directions: recipe.directions,
          imageURL: recipe.imageURL,
        });
      });
    });
  }

  toggleEdit(): void {
    this.editMode = !this.editMode;
  }
  onCancel(e: Event) {
    e.preventDefault();
    this.toggleEdit();
  }
  editRecipe(recipeId: string): void {
    if (this.editForm.invalid) {
      return;
    }

    const {
      title,
      category,
      prepTime,
      cookTime,
      servings,
      directions,
      imageURL,
    } = this.editForm.value;

    this.recipeService
      .editRecipe(
        title!,
        category!,
        prepTime!,
        cookTime!,
        servings!,
        directions!,
        imageURL!,
        recipeId
      )
      .subscribe(() => {
        this.toggleEdit();
        window.location.reload();
      });
  }

  deleteRecipe(recipeId: string) {
    if (confirm('Are you sure you want to delete this recipe?')) {
      this.recipeService.deleteRecipe(recipeId).subscribe(() => {
        this.router.navigate(['/recipes']);
      });
    }
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
