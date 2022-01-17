import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigModule } from '@spartacus/core';
import { LayoutConfig } from '@spartacus/storefront';

@NgModule({
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      layoutSlots: {
        // Exercise 1. Remove all the banners from the search result page on mobile devices.

        // Exercise 3. Remove tabs from the PDP. Add SiteLinks there instead.
      }
    } as LayoutConfig)
  ],
  declarations: [],
  providers: [
      // Exercise 2. When the cart is empty, hide the `MiniCart` slot from header. (Tip: use layout handlers). 
  ]
})
export class LayoutModule { }