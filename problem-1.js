/* 1)	Write a program that requests a number from a user and finds the sum of every number from 1 to num. For example, for number 4 it is 1 + 2 + 3 + 4 = 10. */

var number = parseInt(prompt('Please input a number from 1 to 10.'));
switch (number) {
    case '1':
      console.log(`The sum is 1`);
      break;
    case 2:
      console.log(`The sum is: 1 + 2 = 3`);
      break;
    case 3:
      console.log(`The sum is: 1 + 2 + 3 = 6`);
      break;
    case 4:
      console.log(`The sum is: 1 + 2 + 3 + 4 = 10`);
      break;
    case 5:
      console.log(`The sum is: 1 + 2 + 3 + 4 + 5 = 15`);
      break;
    case 6:
      console.log(`The sum is: 1 + 2 + 3 + 4 + 5 + 6 = 21`);
      break;
    case 7:
      console.log(`The sum is: 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28`);
      break;
    case 8:
      console.log(`The sum is: 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 = 36`);
      break;
    case 9:
      console.log(`The sum is: 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 = 45`);
      break;
    case 10:
      console.log(`The sum is: 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55`);
      break;
  }