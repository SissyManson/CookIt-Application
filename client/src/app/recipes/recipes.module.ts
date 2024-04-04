import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { RecipeRoutingModule } from './recipe-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    RecipeCardComponent,
    DetailsComponent,
    CreateComponent,
    AllRecipesComponent,
  ],
  imports: [
    CommonModule,
    RecipeRoutingModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class RecipesModule {}
