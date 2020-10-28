/* 5)	5) Request a user’s age and check whether it is realistic (0-120 y.o.). If it is realistic, display a message ‘Hi! You are # years old’, otherwise – ‘Hm… Is it even possible?’. */

/* 
1. Prompt an age from the user
2. if age is between  0 - 120  return ‘Hi! You are # years old’,
3. else return ‘Hm… Is it even possible?’.
*/

var age = parseInt(prompt('How old are you?'));

if (age > 0 && age <= 120) {
    console.log(`Hi! You are ${age} years old.`);
} else {
    console.log('Hm... Is it even possible?')
}


