import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ActiveCartService, ConfigModule, CmsConfig, I18nModule,
  UrlModule } from '@spartacus/core';
import { CustomActiveCartService } from './custom-active-cart.service';
import { CustomMiniCartComponent } from './custom-mini-cart/custom-mini-cart.component';
import { MiniCartModule, IconModule } from '@spartacus/storefront';

@NgModule({
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      cmsComponents: {
        MiniCartComponent: {
          component: CustomMiniCartComponent,
        },
      },
    } as CmsConfig),
    I18nModule,
    UrlModule,
    IconModule,
    RouterModule,
    MiniCartModule
  ],
  declarations: [CustomMiniCartComponent],
  exports: [CustomMiniCartComponent],
  entryComponents: [CustomMiniCartComponent],
  providers: [
    // Exercise 1. MiniCart currently shows total number of items. We want it to show number of distinct items. Extend ActiveCartService to have this method, and then make MiniCart use this method (either with outlets or component mapping).
    {
      provide: ActiveCartService,
      useClass: CustomActiveCartService
    }
  ]
})
export class DiModule { }