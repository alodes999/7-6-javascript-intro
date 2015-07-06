//These first 3 variables are input from the user prompts.
var firstvalue = prompt("Please enter the first value", 0);

var secondvalue = prompt("Please enter the second value", 0);

var thirdvalue = prompt("Please enter the third value", 0);
//This is the sum of the numbers.  Because I didn't explicitly parse the input into integers, when I use + to add, it concatenates instead of adding the values.  I had to use Number(varname) at that point to make it into integers to add.  I could also parse the variables into integers to accomplish the same thing.
// 
var sumofnumbers = (Number(firstvalue) + Number(secondvalue) + Number(thirdvalue));
alert("The sum of the 3 numbers entered is: " + sumofnumbers);
//This is the difference of the second and third numbers subtracted from the first.
var differenceofnumbers = (firstvalue - secondvalue - thirdvalue);
alert("The difference of the first number minus the second and third is: " + differenceofnumbers);
//This is the product of all of the numbers
var productofnumbers = (firstvalue * secondvalue * thirdvalue);
alert("The product of the 3 numbers entered is: " + productofnumbers);
//This is the quotient of the first and second values
var quotient = (firstvalue / secondvalue);
alert("The quotient of the first and second entered values is: " + quotient);
//This autoincrements the first value.
var incrementfirst = (++firstvalue);
alert("The incremented value of the first number is: " + incrementfirst);
//This autodecrements the second value.
var decrementfirst = (--secondvalue);
alert("The decremented value of the second number is: " + decrementfirst);

//This is a test case for parsing Integers and strings entered together.  If a string and integer are entered together, whatever is entered first is what is attempted to be parsed.  If the string is first, it returns NaN, and if the number is first, it parses it into the integer.  If other characters are entered in the string, it will stop at those characters. ie, if a $ is entered first, it will stop there, returning NaN.
var teststringint = parseInt(prompt("Please enter a string and integer: ", "Error 404"), 10);
console.log(teststringint);