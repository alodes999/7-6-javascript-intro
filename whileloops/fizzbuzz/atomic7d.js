var startnumber = parseInt(prompt("What number should we start at?"), 10);
var endnumber = parseInt(prompt("What number should we end at?"), 10);

if (startnumber > endnumber) {  
  while (startnumber >= endnumber) {
    if (startnumber % 5 == 0 && startnumber % 3 == 0) {
      console.log("FizzBuzz");
    } else if (startnumber % 5 == 0) {
      console.log("Buzz");
    } else if (startnumber % 3 == 0) {
      console.log("Fizz");
    } else {
      console.log(startnumber);
    }
    startnumber--;
  }
} else {
  while (startnumber <= endnumber) {
    if (startnumber % 5 == 0 && startnumber % 3 == 0) {
      console.log("FizzBuzz");
    } else if (startnumber % 5 == 0) {
      console.log("Buzz");
    } else if (startnumber % 3 == 0) {
      console.log("Fizz");
    } else {
      console.log(startnumber);
    }
    startnumber++;
  }
}