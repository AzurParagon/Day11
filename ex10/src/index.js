// Only change code below this line
function mySplice(arr1, arr2, n) {
    var newArr1 = [...arr1];
    var newArr2 = [...arr2];

    var number = 0;
    for (let index = newArr1.length - 1; index >= 0 ; index--) {
        newArr2.splice(n + number, 0, newArr1[index]);
        number++;
    }

    return newArr2;
}
// Only change code above this line

console.log(mySplice(["b", "c"], ["a", "d"], 1)); // Change this line
module.exports = mySplice;