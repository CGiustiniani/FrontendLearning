import { Component, OnInit } from "@angular/core";
import { ProductService } from "../product.service";
import { CartService } from "../cart.service";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  products = [];

  constructor() {}

  ngOnInit() {
    // this.products = this.productService.getProductList();
  }

  addProductToCart(id) {
    // this.cartService.addProductToCart(id);
  }

  removeProductFromCart(id) {
    // this.cartService.removeProductFromCart(id);
  }
}
