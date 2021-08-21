// Abstract Classes
abstract class A {
  abstract printSomething(): void;
}

class B extends A {
  printSomething() {
    console.log("Base Class");
  }
}

const objB = new B();
objB.printSomething();


// Singleton Classes
class Single {
    private static instance: Single;
    private constructor(public name: string = "Foo") {}
    static getInstance(): Single {
        if(!Single.instance) {
            Single.instance = new Single();
        }
        return Single.instance;
    }
}

const single1 = Single.getInstance();
console.log(single1);