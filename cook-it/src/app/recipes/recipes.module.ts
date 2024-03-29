import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { DetailsComponent } from './details/details.component';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { RecipeRoutingModule } from './recipe-routing.module';

@NgModule({
  declarations: [
    DetailsComponent,
    RecipeCardComponent,
    CreateComponent,
    EditComponent,
    AllRecipesComponent,
  ],
  imports: [CommonModule, RecipeRoutingModule],
})
export class RecipesModule {}
