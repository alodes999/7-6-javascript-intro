var newbottles = 98;
for (bottlesofbeer = 99; bottlesofbeer > 0; bottlesofbeer--) {
  if (bottlesofbeer == 2) {
    console.log(bottlesofbeer + " bottles of beer on the wall, " + bottlesofbeer + " bottles of beer.  Take one down and pass it around, " + (newbottles) + " bottle of beer on the wall.");
  } else if (bottlesofbeer == 1) {
    console.log(bottlesofbeer + " bottle of beer on the wall, " + bottlesofbeer + " bottle of beer.  Take one down and pass it around, " + (newbottles) + " bottles of beer on the wall.");
  } else {
    console.log(bottlesofbeer + " bottles of beer on the wall, " + bottlesofbeer + " bottles of beer.  Take one down and pass it around, " + (newbottles) + " bottles of beer on the wall.");
  }
  newbottles--;
}