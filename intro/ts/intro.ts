import { clearScreenDown } from "readline";

class DrinkT {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  info(): string {
    return this.name;
  }
}

let drinkT = new DrinkT("Agua");
console.log(drinkT.info()); // this is protected

// interface
interface Product {
  price: number;
  getPrice(): string;
}

// herencia
class BeerT extends DrinkT implements Product {
  private alcohol: number;
  price: number;

  constructor(name: string, alcohol: number, price: number) {
    super(name);
    this.alcohol = alcohol;
    this.price = price;
  }

  info(): string {
    return `${super.info()} ${this.alcohol}`;
  }

  getPrice(): string {
    return `$${this.price}`;
  }
}

// interface implementation
class Snack implements Product {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  getPrice(): string {
    return `El precio es: $${this.price}`;
  }
}

const beerT = new BeerT("Erdinger", 8.5, 5);
console.log(beerT.info());

const products: Product[] = [
  new BeerT("Corona", 4.5, 1),
  new Snack("Papas", 0.5),
  new BeerT("Heineken", 5, 1.2),
];

function getPrices(items: Product[]) {
  for (const item of items) {
    console.log(item.getPrice());
  }
}

getPrices(products);
