import type { Product } from "$lib/productModel";

export class Cart {
  products: Product[] = [];

  addToCart = (product: Product) => {
    this.products.push(product);
  }

  removeFromCart = (product: Product) => {
    this.products.forEach( (item, index) => {
      if(item === product) this.products.splice(index);
    });
  }
}