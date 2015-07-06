var password = "Schadenfruede";

userguess = prompt("Please type the password in");

if (userguess == password) {
  alert("Your guess is correct!  Good job!");
}

if (userguess != password) {
  alert("You are INCORRECT!!!!!!!!!!!!!! The password was " + password);
}
  