import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutletsComponent } from './outlets.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [OutletsComponent],
  exports: [OutletsComponent]
})
export class OutletsModule { }