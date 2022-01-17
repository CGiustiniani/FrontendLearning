import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { ProductListPageComponent } from './product-list-page/product-list-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CartComponent } from './cart/cart.component';

/* Add component routes in appRoutes const */
const appRoutes: Routes = [
];
@NgModule({
  /* Add required router module in imports*/
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, WelcomePageComponent, ProductListPageComponent, ContactPageComponent, NavBarComponent, CartComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
