/*
    Functions and Types
*/
// Types can be assigned to arguments and return value
function add(num1, num2) {
    return num1 + num2;
}
// Not a good practice to assign return type
// Return type can be inferred by the TS
function addWithoutReturnType(num1, num2) {
    return num1 + num2;
}
console.log(add, addWithoutReturnType);
console.log(add(4, 5), addWithoutReturnType(1, 2));
/*
    Void Type
*/
// Function that doesn't return anything returns void(nothing)
function addWithoutReturn(num1, num2) {
    console.log(num1 + num2);
}
console.log(addWithoutReturn);
addWithoutReturn(1, 2);
/*
    Function Types
*/
// TS also have function types
var newFun;
newFun = add;
// More specific types are also there
var newFun2;
newFun2 = add;
// Following Code will give error
// newFun2 = addWithoutReturn;
console.log(newFun, newFun2);
/*
    Never Type
*/
// Used with functions that throw errors
// They don't return void, but some error
function produceError(message) {
    throw new Error(message);
}
produceError("Message");
