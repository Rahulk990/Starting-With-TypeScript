/*
    Generic Types
*/
// An Array is a built-in generic type
var arr1 = [1, 2, 3];
var arr2 = [1, 2, 3];
console.log(arr1);
// A Promise is a built-in generic type
var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("This is a String!");
    }, 2000);
});
promise.then(function (data) {
    console.log(data.split(" "));
});
