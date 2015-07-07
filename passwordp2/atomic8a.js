var password = "vermillion";
var trycount = 0;
var userguess = prompt("What is the password?");

while (userguess != password) {
  alert("That is not the correct password, guess again!");
  userguess = prompt("What is the password?");
  trycount++;
}

if (userguess == password) {
  alert("That is the correct password!");
  trycount++;
  alert("It took you " + trycount + " times to get it right!")
}