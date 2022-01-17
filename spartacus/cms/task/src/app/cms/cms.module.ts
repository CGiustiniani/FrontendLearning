import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigModule, CmsConfig } from '@spartacus/core';

@NgModule({
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      cmsComponents: {
        // Exercise 1: Customize the SimpleResponsiveBanner. Modify the display of your custom component in any way you want - get creative!

        // Exercise 2: Replace the cart details section with the simple list of entries and prices. Note: use ActiveCartService
      }
    } as CmsConfig)
  ],
  declarations: []
})
export class CmsModule { }