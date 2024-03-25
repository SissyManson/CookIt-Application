import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { DetailsComponent } from './details/details.component';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';



@NgModule({
  declarations: [
    RecipeCardComponent,
    CreateComponent,
    EditComponent,
    DetailsComponent,
    AllRecipesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RecipesModule { }
