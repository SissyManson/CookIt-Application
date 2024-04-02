import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page404Component } from './page-404/page-404.component';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [LoaderComponent, Page404Component],
  imports: [CommonModule, RouterModule],
  exports: [LoaderComponent, Page404Component],
})
export class SharedModule {}
