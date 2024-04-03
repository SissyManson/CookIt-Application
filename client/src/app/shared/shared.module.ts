import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page404Component } from './page-404/page-404.component';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from './loader/loader.component';
import { SlicePipe } from './slice.pipe';

@NgModule({
  declarations: [LoaderComponent, Page404Component, SlicePipe],
  imports: [CommonModule, RouterModule],
  exports: [LoaderComponent, Page404Component, SlicePipe],
})
export class SharedModule {}
