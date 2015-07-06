//This portion defines the variables, and calls for prompts for the user to enter their information.  The information after the comma is default values for each variable.
var username = prompt("Hello!  What is your name?", "Default name");

var userage = prompt("And your age?", 9999);

var userhometown = prompt("What is your hometown?", "Anytown, USA");

var userfavnumber = prompt("What is your favorite number?", 9999);
//This portion sends alerts to the user displaying their submitted values, while also displaying those values in a string to the console.
alert("So your name is " + username);
console.log("User's name is " + username);
alert("And your age is " + userage);
console.log("User's age is " + userage);
alert("Your hometown is " + userhometown + "?  Nice!");
console.log("User's hometown is " + userhometown);
alert("Your favorite number is " + userfavnumber + "? Awesome!  Mine is 7!");
console.log("User's favorite number is " + userfavnumber);

//This was a test to see if I could get multiple fields in a prompt box
//This did not work, merely bringing up two separate boxes.
//
// function disp_prompt()
// {
// var name=prompt("Please enter your name","")
// var age=prompt("Please enter your Age","")
// if (name!=null && name!="")
// {
// if (age != null && age != "")
// {
// document.write("Hello " + name + "! Your age is "+ age);
// }
//
// }
// };
//
// disp_prompt();

