// Only change code below this line
function splitArrayInGroups(arr, n) {
    var result = [];

    for (let index = 0; index < arr.length; index += n) {
        
        for (let number = 0; number < n; number++) {
            if (index + number < arr.length) {
                result.push([arr[index+number]]);
            }
        }
    }

    return result;
}
// Only change code above this line

console.log(splitArrayInGroups(["a", "b", "c", "d"], 2)); // Change this line
module.exports = splitArrayInGroups;