class A {
  constructor(protected name: string) {}
  printSomething() {
    console.log("Parent Class");
  }
}

// Inheritance
// In TS, we can inherit from only one class using extends
class B extends A {
  constructor(name: string, public age: number) {
    super(name);
  }

  printSomething() {
    console.log("Base Class");
  }

  changeName(name: string) {
    this.name = name;
  }
}

const objB = new B("Foo", 25);
objB.changeName("Goo");
console.log(objB);
objB.printSomething();
