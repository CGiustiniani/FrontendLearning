import { Injectable } from '@angular/core';
import { ActiveCartService } from '@spartacus/core';
import { PageLayoutHandler } from '@spartacus/storefront';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CustomLayoutHandler implements PageLayoutHandler {
  constructor(public activeCartService: ActiveCartService) {}
  handle(
    slots$: import('rxjs').Observable<string[]>,
    pageTemplate?: string,
    section?: string,
    breakpoint?: import('@spartacus/storefront').BREAKPOINT
  ): import('rxjs').Observable<string[]> {
    if (section === 'header') {
      return combineLatest([slots$, this.activeCartService.getActive()]).pipe(
        map(([slots, cart]) => {
          if (!cart.totalItems) {
            // if no items, remove minicart slot
            return slots.filter((slot) => slot !== 'MiniCart');
          }
          return slots;
        })
      );
    }
    return slots$;
  }
}