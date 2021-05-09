/*
    Optional Chaining
*/
var _a;
// Used when we dont know whether certain property will exist or not
var userData1 = {
    id: 1231,
    name: "Foo",
    job: { title: "CEO", description: "My own company" }
};
var userData2 = {
    id: 1231,
    name: "Foo",
    job: { description: "Nothing" }
};
console.log((_a = userData1 === null || userData1 === void 0 ? void 0 : userData1.job) === null || _a === void 0 ? void 0 : _a.title);
// console.log(userData2?.job?.title);     // This inference may not be present in real case
/*
    Nullish Coalescing
*/
// Used to assign default values if the variable is Null or Undefined
var userInput = undefined;
var storedData = userInput !== null && userInput !== void 0 ? userInput : 'DEFAULT';
console.log(storedData);
// More Strictly when variable is Nullish
var userInput1 = '';
var storedData1 = userInput1 || 'DEFAULT';
console.log(storedData1);
