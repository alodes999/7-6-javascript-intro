//Sets the variable to guess
var guessingNumber = 21;
//Gets the user's guess from the page
var userguess = prompt("Please guess a number: ");
//Parses the integer out of the guess and sets it into a variable to run our logic on.
var checknumber = parseInt(userguess, 10);
//Our if conditionals for the correct alert return.
if (checknumber == userguess) {
  alert("You've guessed the correct number!");
} 

if (checknumber != userguess)  {
  alert("That is INCORRECT!!!!!!!!  The correct number is " + guessingNumber);
}

//Console logic to test whether the actual value from the prompt is equal to the stored variable, testing both the == method and the === method.
console.log(" '" + userguess + "' " + " == " + guessingNumber + " ? " + (userguess == guessingNumber) );
console.log(" '" + userguess + "' " + " === " + guessingNumber + " ? " + (userguess === guessingNumber) );