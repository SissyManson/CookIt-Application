import { RouterModule, Routes } from '@angular/router';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { DetailsComponent } from './details/details.component';
import { CreateComponent } from './create/create.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'recipes',
    children: [
      { path: '', component: AllRecipesComponent },
      { path: 'create', component: CreateComponent },
      { path: ':recipeId', component: DetailsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipeRoutingModule {}
