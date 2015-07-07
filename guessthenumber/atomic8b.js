var correctnumber = 77;
var trycount = 0;
var userguess = parseInt(prompt("Guess the correct number between 1 and 100!"), 10);

while (userguess != correctnumber) {
  alert("That is not the correct number, guess again!");
  userguess = parseInt(prompt("Guess the correct number between 1 and 100!"), 10);
  trycount++;
}

if (userguess == correctnumber) {
  alert("That is the correct number!!");
  trycount++;
  alert("It took you " + trycount + " times to get it right!")
}