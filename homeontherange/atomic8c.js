var timesvalid = 0
for (sumofnumbers = 0, enterednumber = parseInt(prompt("Please enter a valid number!"), 10); enterednumber >= 1 && enterednumber <= 8;) {
  sumofnumbers = sumofnumbers + enterednumber;
  console.log(enterednumber + " , " + sumofnumbers);
  timesvalid++
  enterednumber = parseInt(prompt("Please enter a valid number!"), 10);
}

sumofnumbers = sumofnumbers + enterednumber
console.log(enterednumber + " , " + sumofnumbers);
timesvalid++
alert("The average number of all entered numbers is: " + (sumofnumbers / timesvalid));