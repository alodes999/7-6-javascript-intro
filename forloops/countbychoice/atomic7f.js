var startnumber = parseInt(prompt("What number should we start at?"), 10);
var endnumber = parseInt(prompt("What number should we end at?"), 10);
var countby = parseInt(prompt("How much should we count by?"), 10);

if (startnumber > endnumber) {
  for (number = startnumber; number >= endnumber; number = number - countby) {
    console.log(number);
  }
} else {
  for (number = startnumber; number <= endnumber; number = number + countby) {
    console.log(number);
  }
}
