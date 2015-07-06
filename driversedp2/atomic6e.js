//Sets the user's entered age from the users input.
var userage = prompt("Please enter your age, to see if you can drive!");
//Sets the users entered age as a variable for our loop.
var checkage = parseInt(userage, 10);
//Our loop logic, the variable is checked against each value until one is found to be true, and then that result is output.
if (checkage >= 25) {
  alert("You can rent a car");
} else if (checkage >= 21 && checkage < 25) {
  alert("Please don't drink and drive");
} else if (checkage >= 16 && checkage < 21) {
  alert("You're eligible for a driver's license");
} else if (checkage >= 0 && checkage < 16) {
  alert("You can't drive yet, but you'll be able to in a few years");
} else if (checkage < 0) {
  alert("You haven't been born yet");
} else {
  alert("Sorry, but that isn't a number!");
}


