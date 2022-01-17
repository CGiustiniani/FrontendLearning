import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    // TODO import B2cStorefrontModule
    // use this URL of backend instance: https://api.c39j2-walkersde1-d3-public.model-t.cc.commerce.ondemand.com
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
