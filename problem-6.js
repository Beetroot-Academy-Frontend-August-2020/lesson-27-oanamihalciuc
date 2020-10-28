/* 6) Ask a user 3 questions, each with 3 answer options. The user gets 2 points for each correct answer. Show the earned points after the test. */

/* 
1. prompt 3 answers from the user - correct answers 1-b, 2-a, 3-c
2. once a question is correctly answered, the points counter will increase by 2.
2. after the user goes through all the questions, the total points are showed
 */

var points = 0

var answer1 = prompt('When did Elvis Presley die? a)1980 b)1977 c)1993');

if (answer1 == 'b') {
  var points = points + 2;
 } else {
   var points = points;
}

var answer2 = prompt('Where is the Eiffel Tower located? a)Paris b)Rome c)Berlin');
if (answer2 == 'a') {
  var points = points + 2;
 } else {
   var points = points;
}

var answer3 = prompt('How many members did The Beatles band have? a)5 b)6 c)4');
if (answer3 == 'c') {
  var points = points + 2;
 } else {
   var points = points;
}

console.log(points);

