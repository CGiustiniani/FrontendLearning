import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    // Exercise 1. Meta description should be kept below 160 characters. Some products (e.g. DSC-N1) have a longer description. Implement a custom `ProductPageMetaResolver` to limit the product description to 160 characters.
    
    // Exercise 2. Currently there is a Open Graph image on PDP, but we want to add twitter image too. Add `twitter:image` tag to product details pages.
  ]
})
export class SeoModule { }