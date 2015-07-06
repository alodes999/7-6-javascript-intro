var userage = prompt("Please enter your age, to see if you can drive!");

var checkage = parseInt(userage, 10);

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


