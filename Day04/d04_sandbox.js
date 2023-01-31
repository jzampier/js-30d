// !Conditionals
// //? if
// let num = 3;
// if (num > 0) {
//   console.log(`${num} is a positive number`);
// }
// let isRaining = true;
// if (isRaining) {
//   console.log('Remember to take your rain coat.');
// }

// //? if else
// num = 3;
// if (num > 0) {
//   console.log(`${num} is a positive number`);
// } else {
//   console.log(`${num} is a negative number`);
// }

// num = -3;
// if (num > 0) {
//   console.log(`${num} is a positive number`);
// } else {
//   console.log(`${num} is a negative number`);
// }

// isRaining = false;
// if (isRaining) {
//   console.log(`You need a rain coat`);
// } else {
//   console.log('No need for a rain coat.');
// }
// // ? if else if else

// let a = 5;
// if (a > 0) {
//   console.log(`${a} is a positive number`);
// } else if (a < 0) {
//   console.log(`${a} is a negative number`);
// } else if (a == 0) {
//   console.log(`${a} is zero`);
// } else {
//   console.log(`${a} is not a number`);
// }

// let weather = 'sunny';
// if (weather === 'rainy') {
//   console.log('You need a rain coat.');
// } else if (weather === 'cloudy') {
//   console.log(`It might be cold, you need a jacket.`);
// } else if (weather === 'sunny') {
//   console.log('Go out freely.');
// } else {
//   console.log('No need for rain coat.');
// }

// ?Switch
// let weather = 'cloudy';
// switch (weather) {
//   case 'rainy':
//     console.log('You need a rain coat.');
//     break;
//   case 'cloudy':
//     console.log('It might be cold, you need a jacket.');
//     break;
//   case 'sunny':
//     console.log('Get out');
//     break;
//   default:
//     console.log('No need for rain coat');
// }

// let dayUserInput = prompt('What day is today?');
// let day = dayUserInput.toLowerCase();

// switch (day) {
//   case 'monday':
//     console.log('Today is Monday');
//     break;
//   case 'tuesday':
//     console.log('Today is Tuesday');
//     break;
//   case 'wednesday':
//     console.log('Today is Wednesday');
//     break;
//   case 'thursday':
//     console.log('Today is Thursday');
//     break;
//   case 'friday':
//     console.log('Today is friday');
//     break;
//   case 'saturday':
//     console.log('Today is Saturday');
//     break;
//   case 'sunday':
//     console.log('Today is Sunday');
//     break;
//   default:
//     console.log('It is not a week day.');
//     break;
// }

// let num = prompt('Enter number');
// switch (true) {
//   case num > 0:
//     console.log('Number is positive');
//     break;
//   case num == 0:
//     console.log('Number is zero');
//     break;
//   case num < 0:
//     console.log('Number is negative');
//     break;
//   default:
//     console.log('Entered value was not a number');
// }
// let isRaining = true;
// isRaining
//   ? console.log('You need a rain coat')
//   : console.log('You dont need a rain coat.');

// let age = Number(prompt('Enter your age'));
// if (age >= 18) {
//   console.log('You are old enough to drive');
// } else {
//   console.log(`You are left with ${18 - age} years to drive`);
// }
// let myAge = 42;
// let yourAge = Number(prompt('Enter your age:'));
// if (myAge == yourAge) {
//   console.log('We have the same age');
// } else if (myAge > yourAge) {
//   console.log(`I'm ${myAge - yourAge} years older than you.`);
// } else {
//   console.log(`You are ${yourAge - myAge} years older than me.`);
// }
//!3
// let a = 4,
//   b = 3;
// if (a > b) {
//   console.log('a is greater than b');
// } else {
//   console.log('b is greater than a');
// }

// a > b ? console.log('a is greater than b') : console.log('b is greater than a');

// !4
// let number = Number(prompt('Enter a number:'));

// if (number % 2 == 0) {
//   console.log(`${number} is even`);
// } else {
//   console.log(`${number} is odd`);
// }
//! Level 2 - Exercise 01
// let score = Number(prompt('What is your score?'));

// switch (true) {
//   case score > 100:
//     console.log(`Score: ${score} >> Invalid value`);
//     break;
//   case score >= 80:
//     console.log(`Score: ${score} >> grade: A`);
//     break;
//   case score >= 70:
//     console.log(`Score: ${score} >> grade: B`);
//     break;
//   case score >= 60:
//     console.log(`Score: ${score} >> grade: C`);
//     break;
//   case score >= 50:
//     console.log(`Score: ${score} >> grade: D`);
//     break;
//   default:
//     console.log(`Score: ${score} >> grade: F`);
// }
//!02
// let month = prompt('Enter the month:').toLowerCase();
// switch (month) {
//   case 'september':
//   case 'october':
//   case 'november':
//     console.log('The season is Autumn');
//     break;
//   case 'december':
//   case 'january':
//   case 'february':
//     console.log('The season is Winter');
//     break;
//   case 'march':
//   case 'april':
//   case 'may':
//     console.log('The season is Spring');
//     break;
//   case 'june':
//   case 'july':
//   case 'august':
//     console.log('The season is Summer');
//     break;
//   default:
//     console.log('Enter correct month');
// }
//!03
// let day = prompt('What is the day today?').toLowerCase();

// switch (day) {
//   case 'monday':
//   case 'tuesday':
//   case 'wednesday':
//   case 'thursday':
//   case 'friday':
//     console.log(
//       `${day.charAt(0).toUpperCase() + day.slice(1)} is a working day`
//     );
//     break;
//   case 'saturday':
//   case 'sunday':
//     console.log(`${day.charAt(0).toUpperCase() + day.slice(1)} is a weekend`);
//     break;
// }
//!04
/*
j 31
f 28
m 31
a 30
m 31
j 30
j 31
a 31
s 30
o 31
n 30
d 31
 */
let month = prompt('Enter a month: ').toLowerCase();
let isLeapYear = prompt('Is leap year (yes/no): ').toLowerCase();
switch (month) {
  case 'january':
  case 'march':
  case 'may':
  case 'july':
  case 'august':
  case 'october':
  case 'december':
    console.log(
      `${month.charAt(0).toUpperCase() + month.slice(1)} has 31 days.`
    );
    break;
  case 'april':
  case 'june':
  case 'september':
  case 'november':
    console.log(
      `${month.charAt(0).toUpperCase() + month.slice(1)} has 30 days.`
    );
    break;
  case 'february':
    if (isLeapYear == 'yes') {
      console.log(
        `${month.charAt(0).toUpperCase() + month.slice(1)} has 29 days.`
      );
    } else if (isLeapYear == 'no') {
      console.log(
        `${month.charAt(0).toUpperCase() + month.slice(1)} has 28 days.`
      );
    } else {
      console.log(`invalid option, inform if is or is not a leap year`);
    }
    break;
  default:
    console.log('Enter correct month');
}
