/*
    Type Casting
*/

type Combined = string | number;
let var1: Combined = 0;

if (var1 === 0) {
  var1 = "Type Casting";
}

console.log((var1 as string).split(" "));
console.log((<string>var1).split(" "));

// Below code will give error
// console.log(var1.split(" "));
