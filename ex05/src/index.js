// Only change code below this line
var myNestedArray = [[]];

function myNestedFunction(arr) {
    arr[0] = ["Toblerone", 5];
    arr[1] = ["Milka", 3];

    return arr;
}
// Only change code above this line
console.log(myNestedFunction(myNestedArray)); // Change this line
module.exports = myNestedFunction;