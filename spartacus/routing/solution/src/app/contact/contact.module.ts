import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { CmsPageGuard } from '@spartacus/storefront';
import { UrlModule } from '@spartacus/core';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      // Exercise 2. Create static content page with url `contact`. On that page, add links to cart and product details pages.
      {
        path: 'contact',
        canActivate: [CmsPageGuard],
        component: ContactComponent
      },
    ]),
    UrlModule
  ],
  declarations: [ContactComponent]
})
export class ContactModule { }