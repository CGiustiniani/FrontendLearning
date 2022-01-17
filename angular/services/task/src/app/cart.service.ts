import { Injectable } from "@angular/core";

export class CartService {
  INITIAL_PRODUCT_ADD_QUANTITY = 1;

  cart: { id: number; quantity: number }[];
  cartProductsCount = 0;
  inserted = false;

  addProductToCart(id): void {
    if (this.cart === undefined || this.cart === null) {
      this.cart = [];
      this.cart.push({
        id: id,
        quantity: this.INITIAL_PRODUCT_ADD_QUANTITY
      });
      this.inserted = true;
    } else {
      this.cart.forEach(product => {
        if (product.id === id) {
          product.quantity++;
          this.inserted = true;
        }
      });
    }

    if (!this.inserted) {
      this.cart.push({
        id: id,
        quantity: this.INITIAL_PRODUCT_ADD_QUANTITY
      });
    }
    this.cartProductsCount++;
    this.inserted = false;
  }

  removeProductFromCart(id): void {
    if (this.cart === undefined || this.cart === null) {
      this.cart = [];
    }
    this.cart.forEach(product => {
      if (product.id === id && product.quantity > 0) {
        product.quantity--;
        this.cartProductsCount--;
      }
    });
  }
}
