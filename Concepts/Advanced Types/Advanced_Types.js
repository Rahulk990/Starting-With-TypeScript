/*
    Discriminated Types
*/
// Adding literal type to all interfaces helps in type guarding
function moveAnimal(animal) {
    var speed;
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
var obj = {
    "user": 1,
    "name": 4
};
console.log(obj['user'], obj['name']);
var obj1 = {
    name: "Alex",
    age: 10,
    occupation: "Engg."
};
console.log(obj1);
var num = 5;
console.log(num);
