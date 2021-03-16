// Only change code below this line

function compareDifferentValues(m, n){
    if(m === n){
        return "Equal";
    } else {
        return "Not equal";
    }
}

compareDifferentValues(33, "33");
compareDifferentValues("23", 23);
compareDifferentValues(23, 23);
console.log(compareDifferentValues(8, "8"));
console.log(compareDifferentValues("8", 8));
console.log(compareDifferentValues('8', 8));
console.log(compareDifferentValues("8", "8"));
console.log(compareDifferentValues(8, 8));

// Only change code above this line

module.exports = compareDifferentValues;