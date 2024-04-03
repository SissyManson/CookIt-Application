import { RouterModule, Routes } from '@angular/router';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { DetailsComponent } from './details/details.component';
import { CreateComponent } from './create/create.component';
import { NgModule } from '@angular/core';
import { AuthActivate } from '../guards/auth.activate';

const routes: Routes = [
  {
    path: 'recipes',
    children: [
      { path: '', title: 'All recpies', component: AllRecipesComponent },
      {
        path: 'create',
        title: 'Create a Recipe',
        component: CreateComponent,
        canActivate: [AuthActivate],
      },
      {
        path: ':recipeId',
        title: 'Recipe Details',
        component: DetailsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipeRoutingModule {}
