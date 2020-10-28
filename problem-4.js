/* 4)	Display the multiplication table of all numbers from 2 to 9. Every number has to be multiplied by 1 to 10. */

function table(number) {
for (multiplier=1; multiplier < 10; multiplier++) {
    var result = number * multiplier;
    console.log(result);
}
}

table(2);
table(3);
table(4);
table(5);
table(6);
table(7);
table(8);
table(9);

