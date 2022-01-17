import { Injectable } from '@angular/core';
import { Converter, Occ, Product } from '@spartacus/core';

interface CustomProduct extends Product {
  lowercaseName?: string;
} 

@Injectable({
  providedIn: 'root',
})
export class ProductNameNormalizer
  implements Converter<Occ.Product, Product> {
  convert(source: Occ.Product, target: CustomProduct): CustomProduct {
    if (source.name) {
      target.lowercaseName = source.name.replace(/ /g, '-').toLocaleLowerCase();
    }
    return target;
  }
}