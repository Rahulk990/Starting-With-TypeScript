
// Defining Class
class Student {
  name: string;
  private age: number;

  constructor(name: string) {
    this.name = name;
    this.age = 10;
  }

  printName(): void {
    console.log(this.name, this.age);
  }
}


// Creating Objects
const st1 = new Student("Foo");
console.log(st1);
st1.printName();


// Shorthand Initializations
class Employee {
  constructor(private name: string, public readonly age: number) {}
}

const emp1 = new Employee("Foo", 25);
console.log(emp1);
console.log(emp1.age);



// Getters and Setters
// Only available with ES6+

/*
    class Parent {
    constructor(public name: string, private age: number) {}

    get Age() {
        return this.age;
    }

    set Age(value: number) {
        this.age = value;
    }
    }

    const parent1 = new Parent("Foo", 25);
    parent1.Age = 10;
    console.log(parent1.Age);
*/



// Static Properties and Methods
class Car {
    static count = 0;
    static Counter() {
        console.log(this.count);
    }

    constructor(){
        Car.count++;
    }
}

const car1 = new Car();
const car2 = new Car();
console.log(Car.count);
