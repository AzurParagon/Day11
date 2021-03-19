// Only change code below this line
function myBouncer(arr) {
    var newArray = []
    for (var index = 0; index < arr.length; index++) {
        if (arr[index] != false && !isNaN(arr[index]) && arr[index] != undefined && arr[index] != "" && arr[index] != null && arr[index] != 0) {
            newArray.push(arr[index]);
        }
    }

    return newArray;
}
// Only change code above this line

console.log(myBouncer([null, NaN, 1, 2, undefined])); // Change this line
module.exports = myBouncer;