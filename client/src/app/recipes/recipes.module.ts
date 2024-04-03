import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { DetailsComponent } from './details/details.component';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { RecipeRoutingModule } from './recipe-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    RecipeCardComponent,
    DetailsComponent,
    CreateComponent,
    EditComponent,
    AllRecipesComponent,
  ],
  imports: [
    CommonModule,
    RecipeRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class RecipesModule {}
