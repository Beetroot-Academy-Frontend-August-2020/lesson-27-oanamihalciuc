/* 3)	Loop day input like this: «Day of the week. Would you like to see the next one?» which continues as long as the user clicks OK. */

var day = 1;
var answer = confirm(`Today is ${day++}. Would you like to see the next one?`);

while (answer == true) {
    var answer = confirm(`Next day is ${day++}. Would you like to see the next one?`);
}


