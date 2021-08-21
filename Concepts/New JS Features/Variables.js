// Const
// These variables cannot be changed
var num = 5;
// num = 10;        --> Error
console.log(num);
// Var
// Not a good practice to use var, due to global scope
if (num === 5) {
    var num2 = 5;
}
console.log(num2);
// Let
// It is similar to var, except it has different scope
if (num === 5) {
    var num3 = 5;
}
// console.log(num3);   --> Error
