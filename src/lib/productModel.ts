export class Product {
  name: string = "";
  price: string = "";
  volume: string = "";

  Product(prodName: string, prodPrice: string, prodVolume: string) {
    this.name = prodName;
    this.price = prodPrice;
    this.volume = prodVolume;
  }
}

export const createProductModel = (prodName: string, prodPrice: string, prodVolume: string) => {
  const name = document.querySelector(prodName);
  const price = document.querySelector(prodPrice);
  const volume = document.querySelector(prodVolume);
  if (!name || !price || !volume) return;

  console.log(name.textContent);
  console.log(price.textContent);
  console.log(volume.textContent);

  
}