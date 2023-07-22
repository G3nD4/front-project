import type { Product } from '$lib/productModel';
import { saveToFirebase } from './firebase';

export class Cart {
	products: Product[] = [];

	saveToFirebase = () => {
		saveToFirebase(this);
	};

	addToCart = (product: Product) => {
		this.products.push(product);
	};

	removeFromCart = (product: Product) => {
		this.products.forEach((item, index) => {
			if (item === product) this.products.splice(index);
		});
	};
}
