
// Interface
// Used to define the structure of objects and classes
interface Student {
  name: string;
  age: number;
  print(): void;
}

const object: Student = {
  name: "Alex",
  age: 36,
  print() {
    console.log(this.age);
  },
};

console.log(object);
object.print();


// Interface with Classes
interface Name {
  name: string;
}

interface Age {
  age: number;
}

class Human implements Name, Age {
  // We will get error, if Name and Age interfaces are not satisfied
  name: string = "Hello";
  age: number;
  occupation: string;
}

const human: Name = new Human();
console.log(human);



// Function Types
interface Add {
  (a: number, b: number): number;
}

const add: Add = (num1: number, num2: number) => num1 + num2;
console.log(add(1, 2));
