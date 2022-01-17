import { Injectable } from "@angular/core";
import { Product, ProductPageMetaResolver, ProductService, RoutingService, TranslationService, } from "@spartacus/core";
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomProductPageMetaResolver extends ProductPageMetaResolver {
  constructor(
    routingService: RoutingService,
    productService: ProductService,
    translation: TranslationService
  ) {
    super(routingService, productService, translation);
  }

  resolveDescription(): Observable<string> {
    return this.product$.pipe(
      switchMap((product: Product) => {
        return this.translation.translate(
          'pageMetaResolver.product.description',
          {
            description: product.summary.substring(0, 160),
          }
        );
      })
    );
  }
}