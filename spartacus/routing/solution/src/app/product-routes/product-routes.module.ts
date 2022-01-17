import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigModule, RouteConfig, PRODUCT_NORMALIZER } from '@spartacus/core';
import { ProductNameNormalizer } from './product-name.normalizer';

// 3. Configure Product Details Page routes to have:
//    - product code, name,
//    - the entire route has to be lowercase,
//    - spaces have to be replaced with dashes

@NgModule({
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      routing: {
        routes: {
          product: {
            paths: [
              'product/:productCode/:name',
            ],
            paramsMapping: {
              name: 'lowercaseName',
            },
          }
        }
      }
    } as RouteConfig)
  ],
  declarations: [],
  providers: [
    {
      provide: PRODUCT_NORMALIZER,
      useClass: ProductNameNormalizer,
      multi: true
    }
  ]
})
export class ProductRoutesModule { }