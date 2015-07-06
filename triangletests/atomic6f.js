var userside1 = prompt("Please enter the first side's length");
var side1 = parseInt(userside1, 10);

var userside2 = prompt("Please enter the second side's length");
var side2 = parseInt(userside2, 10);

var userside3 = prompt("Please enter the third side's length");
var side3 = parseInt(userside3, 10);

if (side1 === NaN) {
  alert("Side 1 wasn't entered as a number");
} else if (side2 === NaN) {
  alert("Side 2 wasn't entered as a number");
} else if (side3 === NaN) {
  alert("Side 3 wasn't entered as a number");
} else if ((side1 + side2 > side3) && (side2 + side3 > side1) && (side3 + side1 > side2)) {
  console.log(userside1 + " + " + userside2 + " > " + userside3 + " is " + (side1 + side2 > side3));
  console.log(userside2 + " + " + userside3 + " > " + userside1 + " is " + (side2 + side3 > side1));
  console.log(userside3 + " + " + userside1 + " > " + userside2 + " is " + (side3 + side1 > side2));
  alert("This is a valid triangle!");
} else {
  console.log(userside1 + " + " + userside2 + " > " + userside3 + " is " + (side1 + side2 > side3));
  console.log(userside2 + " + " + userside3 + " > " + userside1 + " is " + (side2 + side3 > side1));
  console.log(userside3 + " + " + userside1 + " > " + userside2 + " is " + (side3 + side1 > side2));
  alert("This is not a valid triangle!");
}