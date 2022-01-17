import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigModule, RouteConfig } from '@spartacus/core';

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

            ],
            paramsMapping: {
              
            },
          }
        }
      }
    } as RouteConfig)
  ],
  declarations: [],
  providers: [

  ]
})
export class ProductRoutesModule { }