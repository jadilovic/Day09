// Only change code below this line

function myForLoop1() {
  var evenNumbers = "";
  var i = 0;
  for (i = 0; i < 8; i += 2) {
    evenNumbers += i + ", ";
  }
  evenNumbers += i;
  return evenNumbers;
}

function myForLoop2() {
  var evenInverseNumbers = "";
  var i = 8;
  for (i = 8; i > 0; i -= 2) {
    evenInverseNumbers += i + ", ";
  }
  evenInverseNumbers += i;
  return evenInverseNumbers;
}
// Only change code above this line

console.log(myForLoop1());
console.log(myForLoop2());

module.exports = {
  myForLoop1,
  myForLoop2,
};
