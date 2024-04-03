import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent {
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private recipeService: RecipeService,
    private userService: UserService
  ) {}

  get userId() {
    return this.userService.user?._id;
  }

  imgPattern: RegExp = new RegExp('^https?://');

  createForm = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
    descriptionGroup: this.fb.group({
      category: [''],
      servings: ['', [Validators.required]],
    }),
    timeGroup: this.fb.group({
      prepTime: ['', [Validators.required]],
      cookTime: ['', [Validators.required]],
    }),
    directions: ['', [Validators.required, Validators.minLength(13)]],
    imageURL: ['', [Validators.required, Validators.pattern(this.imgPattern)]],
  });

  createRecipe(): void {
    const {
      title,
      descriptionGroup: { category, servings } = {},
      timeGroup: { prepTime, cookTime } = {},
      directions,
      imageURL,
    } = this.createForm.value;

    const owner = this.userId;

    if (this.createForm.invalid) return;

    this.recipeService
      .createRecipe(
        title!,
        category!,
        prepTime!,
        cookTime!,
        servings!,
        directions!,
        imageURL!,
        owner!
      )
      .subscribe((createdRecipe) => {
        this.createForm.reset();
        this.router.navigate([`/recipes/${createdRecipe._id}`]);
      });

  }
}
