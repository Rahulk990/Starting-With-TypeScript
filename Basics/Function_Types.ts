
/*
    Functions and Types
*/

// Types can be assigned to arguments and return value
function add(num1: number, num2: number): number {
  return num1 + num2;
}

// Not a good practice to assign return type
// Return type can be inferred by the TS
function addWithoutReturnType(num1: number, num2: number) {
  return num1 + num2;
}

console.log(add, addWithoutReturnType);
console.log(add(4, 5), addWithoutReturnType(1, 2));

/*
    Void Type
*/

// Function that doesn't return anything returns void(nothing)
function addWithoutReturn(num1: number, num2: number) {
  console.log(num1 + num2);
}

console.log(addWithoutReturn);
addWithoutReturn(1, 2);
