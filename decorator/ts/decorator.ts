interface Component {
  getDetail(): string;
}

class ProductComponent implements Component {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  public getDetail(): string {
    return `${this.name}`;
  }
}

// decorator
abstract class ProductDecorator implements Component {
  protected component: Component;

  constructor(component: Component) {
    this.component = component;
  }

  getDetail(): string {
    return this.component.getDetail();
  }
}

// decorator 1
class ComercialInfoProductDecorator extends ProductDecorator {
  private tradename: string;
  private brand: string;

  constructor(component: Component, tradename: string, brand: string) {
    super(component);

    this.tradename = tradename;
    this.brand = brand;
  }

  public getDetail(): string {
    return `${this.tradename} ${this.brand} ` + super.getDetail();
  }
}

// execution
// component
const productComponent = new ProductComponent("Cerveza");
console.log(productComponent.getDetail());

// decorator 1 component
const commercialInfoProduct = new ComercialInfoProductDecorator(
  productComponent,
  "London Porter",
  "Fuller's"
);
console.log(commercialInfoProduct.getDetail());
