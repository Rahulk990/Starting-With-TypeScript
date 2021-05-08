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
console.log(addWithoutReturn(1, 2));
