var startnumber = parseInt(prompt("What number should we start counting at?"), 10);

var endnumber = parseInt(prompt("What number should we stop counting at?"), 10);

var countby = parseInt(prompt("What should we count by in our count?"), 10);

if (startnumber > endnumber) {
  while (endnumber <= startnumber) {
    console.log(startnumber);
    startnumber = startnumber - countby;
  }
} else {
  while (startnumber <= endnumber) {
    console.log(startnumber);
    startnumber = startnumber + countby;
  } 
}