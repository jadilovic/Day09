// Only change code below this line

function inverseWhile(){
    var num = 5;
    var fiveNumbers = "";

    while(num > 0){
        fiveNumbers += num + ",";
        num--;
    }
    fiveNumbers += num;

    return fiveNumbers;
}

// Only change code above this line

console.log(inverseWhile());

module.exports = inverseWhile;