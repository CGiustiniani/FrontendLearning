import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigModule, CmsConfig } from '@spartacus/core';
import { CustomBannerComponent } from './custom-banner/custom-banner.component';
import { CustomCartComponent } from './custom-cart/custom-cart.component';
import { MediaModule, GenericLinkModule } from '@spartacus/storefront';

@NgModule({
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      cmsComponents: {
        // Exercise 1: Customize the SimpleResponsiveBanner. Modify the display of your custom component in any way you want - get creative!
        SimpleResponsiveBannerComponent: {
          component: CustomBannerComponent,
        },

        // Exercise 2: Replace the cart details section with the simple list of entries and prices. Note: use ActiveCartService
        CartComponent: {
          component: CustomCartComponent,
        },
      }
    } as CmsConfig),
    MediaModule,
    GenericLinkModule
  ],
  declarations: [CustomBannerComponent, CustomCartComponent],
  exports: [CustomBannerComponent, CustomCartComponent],
  entryComponents: [CustomBannerComponent, CustomCartComponent]
})
export class CmsModule { }