import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { RecipesModule } from './recipes/recipes.module';
import { SharedModule } from './shared/shared.module';
import { UserModule } from './user/user.module';
import { ContactsComponent } from './contacts/contacts.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, ContactsComponent],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    RecipesModule,
    UserModule,
    AppRoutingModule, // ! Keep this at the BOTTOM
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
