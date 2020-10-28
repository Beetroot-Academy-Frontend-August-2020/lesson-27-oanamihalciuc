/* 1)	Write a program that requests a number from a user and finds the sum of every number from 1 to num. For example, for number 4 it is 1 + 2 + 3 + 4 = 10. */

var result = 0;
var number = parseInt(prompt('Please write a number from 1 to 10.'));

for(add = 0; add <=number; add++) {
  result += add;
}

console.log(result);