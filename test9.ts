function CarName<T extends { new (...args: any[]): {} }>(constructor: T) {
  console.log(constructor);
  return class extends constructor {
    name = "206";
  };
}

@CarName
class Car {
  model: string;
  constructor(param: string) {
    this.model = param;
  }
  print() {
    console.log("my car is" + this.model);
  }
}

const DC = new Car("test");
console.log(DC);
DC.print();
