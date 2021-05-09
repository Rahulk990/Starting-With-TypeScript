/*
    Discriminated Types
*/

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}


// Union of Interfaces
type Animal = Bird | Horse;


// Adding literal type to all interfaces helps in type guarding
function moveAnimal(animal: Animal) {
  let speed: number;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
  }
  console.log("Moving at speed: " + speed);
}

moveAnimal({ type: "bird", flyingSpeed: 10 });



/*
    Index Types
*/

// Used to specify the type of indexing variables
interface Dict {
  [key: string]: number;
}

const obj: Dict = {
  "user": 1,
  "name": 4,
};
console.log(obj['user'], obj['name']);



/*
    Intersection Types
*/

// Intersection in Object Types
type A = {name: string, age: number};
type B = {name: string, occupation: string};
type C = A & B;

const obj1:C = {
    name: "Alex",
    age: 10,
    occupation: "Engg."
}
console.log(obj1)

// Intersection in Simple Types
type D = number | string;
type E = number | boolean;
type F = D & E;

const num: F = 5;
console.log(num);
