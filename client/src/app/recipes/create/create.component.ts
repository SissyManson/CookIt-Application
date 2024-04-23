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
    private userService: UserService,
    private recipeService: RecipeService
  ) {}

  get userId() {
    return this.userService.user?._id;
  }

  imgPattern: RegExp = new RegExp('^https?://');

  createForm = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
    descriptionGroup: this.fb.group({
      category: ['', [Validators.required]],
      servings: ['', [Validators.required, Validators.min(1)]],
    }),
    timeGroup: this.fb.group({
      prepTime: ['', [Validators.required, Validators.min(1)]],
      cookTime: ['', [Validators.required, Validators.min(1)]],
    }),
    directions: ['', [Validators.required, Validators.minLength(13)]],
    imageURL: ['', [Validators.required, Validators.pattern(this.imgPattern)]],
    tags: ['', [Validators.required, Validators.minLength(3)]],
  });

  createRecipe(): void {
    const {
      title,
      descriptionGroup: { category, servings } = {},
      timeGroup: { prepTime, cookTime } = {},
      directions,
      imageURL,
      tags,
    } = this.createForm.value;

    const owner = this.userId;

    if (this.createForm.invalid) return;

    const splitRegex = new RegExp(/[ ,]+/g);
    this.recipeService
      .createRecipe(
        title!,
        category!,
        prepTime!,
        cookTime!,
        servings!,
        directions!,
        imageURL!,
        tags?.split(splitRegex)!,
        owner!
      )
      .subscribe((createdRecipe) => {
        this.createForm.reset();
        this.router.navigate([`/recipes/${createdRecipe._id}`]);
      });
  }
}
