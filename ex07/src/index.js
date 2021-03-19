// Only change code below this line
function largestNumFromArr(arr) {
    var maxNumArray = [];

    for (let i = 0; i < arr.length; i++) {
        
        var largest = arr[i][0];

        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > largest) {
                largest = arr[i][j];
            }
        }
        
        maxNumArray.push(largest);
    }
    
    return maxNumArray;
}
// Only change code above this line

 console.log(largestNumFromArr([[13, 27, 18, 26], [4,5,1,3], [32,35,37,39], [1000, 1001, 857,1]])); // Change this line
 module.exports = largestNumFromArr;