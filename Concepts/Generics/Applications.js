var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
// Generic Functions
function addOrMerge(item1, item2) {
    return item1 + item2;
}
console.log(addOrMerge(1, 2));
console.log(addOrMerge("Add", " Merge"));
function countAndDescribe(element) {
    var descriptionText = "Got no value.";
    if (element.length === 1) {
        descriptionText = "Got 1 element.";
    }
    else if (element.length > 1) {
        descriptionText = "Got " + element.length + " elements.";
    }
    return [element, descriptionText];
}
console.log(countAndDescribe(["Hello", "World"]));
// KeyOf constraints with generic types
function extract(obj, key) {
    return obj[key];
}
console.log(extract({ name: "Alex" }, "name"));
// Generic Classes
var DataStore = /** @class */ (function () {
    function DataStore() {
        this.data = [];
    }
    DataStore.prototype.addItem = function (item) {
        this.data.push(item);
    };
    DataStore.prototype.removeItem = function (item) {
        this.data.splice(this.data.indexOf(item), 1);
    };
    DataStore.prototype.getItems = function () {
        return __spreadArray([], this.data);
    };
    return DataStore;
}());
var textStore = new DataStore();
textStore.addItem("Hello");
console.log(textStore.getItems());
var numberStore = new DataStore();
numberStore.addItem(12);
console.log(numberStore.getItems());
