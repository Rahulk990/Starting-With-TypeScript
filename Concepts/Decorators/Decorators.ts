
/*
    Decorators
*/


// Simple Decorator
function Logger(_: Function) {
  console.log("In Logger Decorator");
}


// Attaching the Decorator
@Logger
class Person {
  name: string;
  constructor() {
    this.name = "John";
  }
}


// Decorators are called while classes are defined, not instantiated
const p1 = new Person();
console.log(p1);



/*
    Decorator Factory
*/


// Used to create configurable decorators
function ConfigurableDecorator (config: object) {
    return (_: Function) => {
        console.log("In Configurable Decorator");
        console.log(config);
    }
}


// Applying Configurations
// Multiple Decorators can be applied
// They are execute in Bottom-Up Manner
@Logger
@ConfigurableDecorator({
    target: "Hello",
})
class Student {
    name: string = "Alex";
}

const st1 = new Student();
console.log(st1);