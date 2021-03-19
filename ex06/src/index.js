// Only change code below this line
function multiplyArrayFunction(myArray) {
    var myNewArray = [...myArray]
    var product = 1;
    var sum = 0;

    for (let i = 0; i < myNewArray.length; i++) {
        
        for (let j = 0; j < myNewArray[i].length; j++) {
            sum = sum + myNewArray[i][j];
            product = product * myNewArray[i][j];
        }
        
    }

    return [product, sum];
}
// Only change code above this line
console.log(multiplyArrayFunction([[1,2], [3,4,5,6], [7,8,9]])); // Change this line
module.exports = multiplyArrayFunction;