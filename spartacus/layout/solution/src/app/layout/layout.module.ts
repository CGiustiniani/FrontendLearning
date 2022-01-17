import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigModule } from '@spartacus/core';
import { LayoutConfig, PAGE_LAYOUT_HANDLER } from '@spartacus/storefront';
import { CustomLayoutHandler } from './custom-layout-handler.ts'

@NgModule({
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      layoutSlots: {
        // Exercise 1. Remove all the banners from the search result page on mobile devices.
        SearchResultsListPageTemplate: {
          slots: [  // no banners on mobile
            'ProductLeftRefinements',
            'SearchResultsListSlot'
          ],
          md: {
            slots: [
              'Section2',
              'ProductLeftRefinements',
              'SearchResultsListSlot',
              'Section4'
            ],
          },
        },

        // Exercise 3. Remove tabs from the PDP. Add SiteLinks there instead.
        ProductDetailsPageTemplate: {
          slots: [
            'Summary',
            'UpSelling',
            'CrossSelling',
            'SiteLinks', // 'SiteLinks' instead of 'Tabs'
          ],
        },
      }
    } as LayoutConfig)
  ],
  declarations: [],
  providers: [
      // Exercise 2. When the cart is empty, hide the `MiniCart` slot from header. (Tip: use layout handlers).
      {
        provide: PAGE_LAYOUT_HANDLER,
        useExisting: CustomLayoutHandler,
        multi: true
      } 
  ]
})
export class LayoutModule { }