class SaleContext {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  calculate(amount) {
    return this.strategy.calculate(amount);
  }
}

class RegularSaleStrategy {
  constructor(tax) {
    this.tax = tax;
  }

  calculate(amount) {
    return amount + amount * this.tax;
  }
}

class DiscountSaleStrategy {
  constructor(tax, discount) {
    this.tax = tax;
    this.discount = discount;
  }

  calculate(amount) {
    return amount + amount * this.tax - this.discount;
  }
}

class ForeignSaleStrategy {
  getDollarPrice() {
    return 20;
  }

  calculate(amount) {
    return amount * this.getDollarPrice();
  }
}

const regularSale = new RegularSaleStrategy(0.16);
const disCountSale = new DiscountSaleStrategy(0.16, 3);
const foreignSale = new ForeignSaleStrategy();

// const sale = new SaleContext(regularSale);
// console.log("sale", sale.calculate(10));

// sale.setStrategy(disCountSale);
// console.log("sale", sale.calculate(10));

// sale.setStrategy(foreignSale);
// console.log("sale", sale.calculate(10));

// Practice ------------------------------------------------

const data = [
  {
    name: "Erdinger Pikantus",
    country: "Alemania",
    Info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
    img: "https://jumbocolombiaio.vtexassets.com/arquivos/ids/205647/4002103257707.jpg?v=637814200579500000",
  },
  {
    name: "Corona",
    country: "México",
    Info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
    img: "https://elamigodelanoche.com/wp-content/uploads/2018/10/Cerveza-Corona-355-ML-BOTELLA.jpg",
  },
  {
    name: "Delirium Tremens",
    country: "Bélgica",
    Info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
    img: "https://www.bazzarbog.com/16442-home_default/delirium-tremens.jpg",
  },
];

class InfoContext {
  constructor(strategy, data, element) {
    this.setStrategy(strategy);
    this.data = data;
    this.element = element;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  show() {
    this.strategy.show(this.data, this.element);
  }
}

class ListStrategy {
  show(data, element) {
    element.innerHTML = data.reduce((accumulated, beer) => {
      const { name, country } = beer;
      return (
        accumulated +
        `
          <div>
            <h2>${name}</h2>
            <p>${country}</p>
          </div>
          <hr>
        `
      );
    }, "");
  }
}

class ListWithDetailStrategy {
  show(data, element) {
    element.innerHTML = data.reduce((accumulated, beer) => {
      const { name, country, Info } = beer;
      return (
        accumulated +
        `
          <div>
            <h2>${name}</h2>
            <p>${country}</p>
            <p>${Info}</p>
          </div>
          <hr>
        `
      );
    }, "");
  }
}

class listWhitImageStrategy {
  show(data, element) {
    element.innerHTML = data.reduce((accumulated, beer) => {
      const { name, country, Info, img } = beer;
      return (
        accumulated +
        `
          <div>
            <h2>${name}</h2>
            <p>${country}</p>
            <p>${Info}</p>
            <img width='200px' src='${img}' alt='${name}' loading="lazy"  />
          </div>
          <hr>
        `
      );
    }, "");
  }
}

const strategies = [
  new ListStrategy(),
  new ListWithDetailStrategy(),
  new listWhitImageStrategy(),
];

const info = new InfoContext(new ListStrategy(), data, content);
info.show();

slcOptions.addEventListener("change", (event) => {
  const option = event.target.value;
  info.setStrategy(strategies[option]);
  info.show();
});
