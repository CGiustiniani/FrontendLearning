import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      // Exercise 2. Create static content page with url `contact`. On that page, add links to cart and product details pages.
    ]),
  ],
  declarations: []
})
export class ContactModule { }