// Only change code below this line
function myMutation(arr) {
    var result = true;

    for (let index = 0; index < arr[1].length; index++) {
        var didFind = false;

        for (let i = 0; i < arr[0].length; i++) {
            if (arr[0][i].toLowerCase() === arr[1][index].toLowerCase()) {
                didFind = true;
                break;
            } else {
                didFind = false;
            }
        }
        
        result = didFind;

        if (result === false) {
            break;
        }
    }

    return result;
}
// Only change code above this line

console.log(myMutation(["Noel", "Ole"])); // Change this line
module.exports = myMutation;