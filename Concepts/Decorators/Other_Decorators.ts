
/*
    Property Decorators
*/


// Simple Decorator
function Logger(target: any, propertyName: string) {
  console.log("In Logger");
  console.log(target, propertyName);
}


// Applying Decorator
class Student1 {
  @Logger
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  setName(value: string) {
    this.name = value;
  }
}

const st11 = new Student1("Alex");
console.log(st11);



/*
    Accessor and Parameter Decorators
*/


// Simple Decorators
function MethodDecorator(
  target: any,
  name: string,
  descriptor: PropertyDescriptor
) {
  console.log("Method decorator!");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function ParameterDecorator(target: any, name: string, position: number) {
  console.log("Parameter decorator!");
  console.log(target);
  console.log(name);
  console.log(position);
}


// Applying Decorators
class Product {
  title: string;
  private _price: number;

  @MethodDecorator
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Invalid price - should be positive!");
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @MethodDecorator
  getPriceWithTax(@ParameterDecorator tax: number) {
    return this._price * (1 + tax);
  }
}

const pd1 = new Product("Book", 19);
const pd2 = new Product("Book 2", 29);
