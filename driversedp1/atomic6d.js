var userage = prompt("Please enter your age, to see if you can drive!");

var checkage = parseInt(userage, 10);

if (checkage == NaN) {
  alert("Sorry, but that isn't a number!")
}

if (checkage < 0) {
  alert("You haven't been born yet");
}

if (checkage >= 0 && checkage <= 15) {
  alert("You can't drive yet, but you'll be able to in a few years");
}

if (checkage >= 16) {
  alert("You're eligible for a driver's license");
}

if (checkage >= 21) {
  alert("Please don't drink and drive");
}

if (checkage >= 25) {
  alert("You can rent a car");
}


