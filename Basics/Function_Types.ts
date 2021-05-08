
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



/*
    Function Types
*/


// TS also have function types
let newFun: Function;
newFun = add;


// More specific types are also there
let newFun2: (a: number, b: number) => number;
newFun2 = add;


// Following Code will give error
// newFun2 = addWithoutReturn;

console.log(newFun, newFun2);



/*
    Never Type
*/


// Used with functions that throw errors
// Never type indicates that this function never returns something
// As soon as the error is thrown, the script is blocked from continuing
function produceError(message: string): never {
  throw new Error(message);
}

produceError("Message");