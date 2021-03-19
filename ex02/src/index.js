// Create a temps array here
var temps = [
    [31, 32, 19, 37],
    [29, 27, 55, 36],
    [17, 27, 42, 46],
    [29, 52, 21, 64],
    [91, 27, 31, 61]
]
// End of temps array
function myArrayFunction(arr) {
    var temps = [...arr];
    var averageDayTemp = [];
    // Only change code below this line
    for (let i = 0; i < temps.length; i++) {
        var total = 0;
        for (let j = 0; j < temps[i].length; j++) {
            total = total + temps[i][j];
        }
        averageDayTemp.push(total / temps[i].length);
        
    }
    // Only change code above this line
    return averageDayTemp;
}

console.log(myArrayFunction(temps)) // Change this line
module.exports = myArrayFunction;