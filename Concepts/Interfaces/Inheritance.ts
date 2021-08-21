interface Name {
  name: string;
}

interface Age {
    age: number;
}

// Inheritance
interface Person extends Name, Age {}

const person: Person = { name: "Alex", age: 20 };
console.log(person);


