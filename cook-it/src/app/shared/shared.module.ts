import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page404Component } from './page-404/page-404.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [Page404Component],
  imports: [CommonModule, RouterModule],
})
export class SharedModule {}
