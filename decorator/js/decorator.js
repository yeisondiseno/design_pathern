// components
class ProductComponent {
  constructor(name) {
    this.name = name;
  }

  getDetail() {
    return `${this.name}`;
  }
}

// decorator
class ProductDecorator {
  constructor(productComponent) {
    this.productComponent = productComponent;
  }

  getDetail() {
    return this.productComponent.getDetail();
  }
}

class CommercialInfoProductDecorator extends ProductDecorator {
  constructor(productComponent, tradename, brand) {
    super(productComponent);

    this.tradename = tradename;
    this.brand = brand;
  }

  getDetail() {
    return `${this.tradename} ${this.brand} ` + super.getDetail();
  }
}

class StoreProductDecorator extends ProductDecorator {
  constructor(productComponent, price) {
    super(productComponent);

    this.price = price;
  }

  getDetail() {
    return super.getDetail() + ` ${this.price}`;
  }
}

// Decorator 3
class HTMLProductDecorator extends ProductDecorator {
  getDetail() {
    return `
      <h1>Información del producto</h1>
      <p>${super.getDetail()}</p>
    `;
  }
}

// Execute
// component
const productComponent = new ProductComponent("cerveza");
console.log(productComponent.getDetail());

// decorator 1 with component
const comercialInfoProduct = new CommercialInfoProductDecorator(
  productComponent,
  "London Porter",
  "Fuller's"
);
console.log(comercialInfoProduct.getDetail());

// decorator 2 with component
const storeProduct = new StoreProductDecorator(productComponent, 15.5);
console.log(storeProduct.getDetail());

// decorator 2 with component
const product = new StoreProductDecorator(comercialInfoProduct, 15.5);
console.log(storeProduct.getDetail());
