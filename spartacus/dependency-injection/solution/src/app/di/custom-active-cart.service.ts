import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  ActiveCartService,
  AuthService,
  Cart,
  MultiCartService,
  StateWithMultiCart,
} from '@spartacus/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class CustomActiveCartService extends ActiveCartService {

  constructor(
    store: Store<StateWithMultiCart>,
    authService: AuthService,
    multiCartService: MultiCartService
  ) {
    super(store, authService, multiCartService);
  }

  getTotalDistinctItems(): Observable<number> {
    return this.getActive().pipe(map((cart: Cart) => cart.totalItems));
  }

}