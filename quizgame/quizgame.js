//Here is our variable definitions, including defining the questions as objects with two attributes each, question and answer.
var correctcount = 0, finalscore = 0;
var question1 = {question:"How many Heisman Trophy winners has the Nebraska Football Program had? (1)- 2, (2)- 3, (3)- 4, (4)- 7", answer: 2};
var question2 = {question:"How many National Championships has the Nebraska Football Program won? (1)- 3, (2)- 4, (3)- 5, (4)- 6", answer: 3};
var question3 = {question:"Which Adidas school changed to use Nike Apparel on 7-6-2015? (1)- Nebraska, (2)- Notre Dame, (3)- Texas A&M, (4)- Michigan", answer: 4};
var question4 = {question:"Which school did NOT appear in the 2014 College Football Playoff? (1)- Alabama, (2)- Ohio State, (3)- TCU, (4)- Oregon", answer: 3};
var question5 = {question:"What year did the Big 10 approve Nebraska to join its ranks?? (1)- 2010, (2)- 2011, (3)- 2012, (4)- 2013", answer: 1};
//Here is our questionarray, putting each of the question objects into the array.
var questionarray = [question1, question2, question3, question4, question5];
//Here's our loop logic.  We loop through the array until we reach the value of the length of the array, which can change in case we add more questions.  We count up, and use that count to pull the specific question from the array (starting with the 0th element) and put that question up in a prompt for the user.  If they get it right, they get an alert saying they were correct and then 1 gets added to correctcount.  If they get it wrong, they are told it was incorrect and the correct answer is shown.
for (count = 0; count < questionarray.length; count++) {
  question = questionarray[count];
  var useranswer = parseInt(prompt(question.question), 10);
  
  if (useranswer === question.answer) {
    correctcount++;
    alert("That's correct!");
  } else {
    alert("That's not correct, the correct answer was " + question.answer);
  }
}
//Here is our final score component for the user.  Once the last question is answered, a popup shows the user how well they did, the total number they got right and the grade that equates out to.
finalscore = (correctcount / questionarray.length) * 100;
alert("Your final score:  You got " + correctcount + " right! Your grade for that is " + finalscore + "%!");