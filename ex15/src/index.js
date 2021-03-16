// Only change code below this line

function myDoWhile(){
    var myNumbers = "";
    var num = 0;
    do {
        myNumbers += num + ", ";
        num++;
    } while (num < 9);
    myNumbers += num;
    return myNumbers;
}

console.log(myDoWhile());
// Only change code above this line

module.exports = myDoWhile;
