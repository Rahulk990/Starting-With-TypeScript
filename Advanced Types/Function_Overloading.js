/*
    Functions Overloading
*/
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
// Below code will give error if overloads are not available
var result = add('Hello', ' World');
console.log(result.split(' '));
