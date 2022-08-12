import { clearScreenDown } from "readline";

class DrinkT {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  info(): string {
    return this.name
  }
}

let drinkT = new DrinkT('Agua');
console.log(drinkT.info()); // this is protected


// herencia
class BearT extends DrinkT {
  private alcohol: number;

  constructor(name: string, alcohol: number ){
    super(name);
    this.alcohol = alcohol;
  }

  info(): string {
    return `${super.info()} ${this.alcohol}`;
  }
}

const beerT = new BearT("Erdinger", 8.5);
console.log(beerT.info());
