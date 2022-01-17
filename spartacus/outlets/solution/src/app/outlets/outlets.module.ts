import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutletsComponent } from './outlets.component';
import { RouterModule } from '@angular/router';
import { OutletRefModule } from '@spartacus/storefront';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    OutletRefModule
  ],
  declarations: [OutletsComponent],
  exports: [OutletsComponent]
})
export class OutletsModule { }