import { Component, Inject } from '@angular/core';
import { ActiveCartService, Cart } from '@spartacus/core';
import { MiniCartComponent } from '@spartacus/storefront';
import { Observable } from 'rxjs';
import { CustomActiveCartService } from '../custom-active-cart.service';

@Component({
  selector: 'app-custom-mini-cart',
  templateUrl: './custom-mini-cart.component.html',
  styleUrls: ['./custom-mini-cart.component.css']
})
export class CustomMiniCartComponent extends MiniCartComponent {

  // use new method
  quantity$: Observable<number> = this.activeCartService.getTotalDistinctItems();

  // constructor(activeCartService: CustomActiveCartService) {
  // instead we need to supply a custom provider
  constructor(
    @Inject(ActiveCartService)
    protected activeCartService: CustomActiveCartService
  ) {
    super(activeCartService);
  }

}