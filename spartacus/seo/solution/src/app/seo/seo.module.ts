import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPageMetaResolver } from '@spartacus/core';
import { CustomProductPageMetaResolver } from './custom-product-page-meta.resolver';
import { CustomSeoMetaService } from './custom-seo-meta.service';
import { SeoMetaService } from '@spartacus/storefront';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    // Exercise 1. Meta description should be kept below 160 characters. Some products (e.g. DSC-N1) have a longer description. Implement a custom `ProductPageMetaResolver` to limit the product description to 160 characters.
    {
      provide: ProductPageMetaResolver,
      useExisting: CustomProductPageMetaResolver
    },
    
    // Exercise 2. Currently there is a Open Graph image on PDP, but we want to add twitter image too. Add `twitter:image` tag to product details pages.
    {
      provide: SeoMetaService,
      useExisting: CustomSeoMetaService
    }
  ]
})
export class SeoModule { }