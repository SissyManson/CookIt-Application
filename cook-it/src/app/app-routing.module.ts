import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Page404Component } from './shared/page-404/page-404.component';
import { ContactsComponent } from './contacts/contacts.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', title: 'Home page', component: HomeComponent },
  { path: 'contacts', title: 'Contacts', component: ContactsComponent },
  { path: '**', redirectTo: '/not-found' },
  { path: 'not-found',title: 'Page Not Found', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
