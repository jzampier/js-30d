/* // Booleans
let isLightON = true;
let isRaining = false;
let isHungry = false;
let isMarried = true;
let truValue = 4 > 3;
let falseValue = 4 < 3;

//Undefined
let firstName;
console.log(firstName);
// Null
let empty = null;
console.log(empty); */
// Operators
// ?Assignment
/* let x = 10;
x %= 2;
console.log(x); */

// ?Arithmetic Operators
/* let numOne = 4;
let numTwo = 3;
let sum = numOne + numTwo;
let diff = numOne - numTwo;
let mult = numOne * numTwo;
let div = numOne / numTwo;
let remainder = numOne % numTwo;
let powerOf = numOne ** numTwo;
console.log(sum, diff, mult, div, remainder, powerOf);

const PI = 3.14;
let radius = 100;
const areaOfCircle = PI * radius ** 2;
console.log('areaOfCircle :>> ', areaOfCircle);

const gravity = 9.81;
let mass = 72;

const weight = mass * gravity;
console.log('weight :>> ', weight, 'N');

const boilingPoint = 100;
const bodyTemp = 37;

console.log(`The boiling point of water is ${boilingPoint} oC.\n Human body\
temperature is ${bodyTemp}oC\nThe gravity of earth is ${gravity}m/s2.`); */

//? Comparison Operators
/* console.log(3 > 2);
console.log(3 >= 2);
console.log(3 < 2);
console.log(2 < 3);
console.log(2 <= 3);
console.log(3 == 2);
console.log(3 != 2);
console.log(3 == '3');
console.log(3 === '3');
console.log(3 !== '3');
console.log(3 != 3);
console.log(3 !== 3);
console.log(0 == false);
console.log(0 === false);
console.log(0 == '');
console.log(0 == ' ');
console.log(0 === '');
console.log(1 == true);
console.log(1 === true);
console.log(undefined == null);
console.log(undefined === null);
console.log(NaN == NaN);
console.log(NaN === NaN);
console.log(typeof NaN);

console.log('mango'.length == 'avocado'.length);
console.log('mango'.length !='avocado'.length);
console.log('mango'.length < 'avocado'.length);
console.log('milk'.length == 'meat'.length);
console.log('milk'.length != 'meat'.length);
console.log('tomato'.length == 'potato'.length)
console.log('python'.length > 'dragon'.length); */

//?Logical Operators

//&&
//||
//!

//?Increment
/* let count =0
//*Pre-increment
console.log(++count)
console.log(count)
//*Post-increment most used
let counter = 0
console.log(counter++)
console.log(counter); */

//?Decrement
/* 
//*pre-decrement
let count = 0
console.log(--count);
console.log('count-- :>> ', count--);
//*post-decrement
let counter = 0
console.log('counter-- :>> ', counter--);
console.log('counter :>> ', counter); */

//! Ternary Operators
/* 
let isRaining = true;
isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat');

isRaining = false;
isRaining
  ? console.log('You need a rain coat')
  : console.log('No need for a rain coat.');

let number = 5;
number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`);
number = -5;
number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`); */

// !Window Methods

// ?Window alert() method

//alert('Welcome to 30DaysOfJavaScript');

// ?Window prompt()
//prompt('required text', 'optional text');

//? confirm()
/* 
const agree = confirm('Are you sure you like to delete?');
console.log(agree);
 */

//!Date Object
//* getFullYear(), getMonth(), getDate(), getDay(), getHours(), getMinutes, getSeconds(), getMilliseconds(), getTime()
// const now = new Date()
// console.log(now)
// console.log('now.getFullYear() :>> ', now.getFullYear());
// console.log('now.getMonth() :>> ', now.getMonth()); /*0 - 11 , 0 = jan 11 = dec*/
// console.log('now.getDate() :>> ', now.getDate());
// console.log('now.getDay() :>> ', now.getDay());
// console.log('now.getHours() :>> ', now.getHours());
// console.log('now.getMinutes() :>> ', now.getMinutes());
// console.log('now.getSeconds() :>> ', now.getSeconds());
// console.log('now.getTime() :>> ', now.getTime());

// ? Date.now()
// const allSeconds = Date.now();
// console.log('allSeconds :>> ', allSeconds);

// const timeInSeconds = new Date().getTime();
// console.log('timeInSeconds :>> ', timeInSeconds);
// console.log(allSeconds == timeInSeconds);

// const now = new Date();
// const year = now.getFullYear();
// const month = now.getMonth() + 1;
// const date = now.getDate();
// const hours = now.getHours();
// const minutes = now.getMinutes();

// console.log(`${date}/${month}/${year} ${hours}:${minutes}`);
// let firstName = 'Julio';
// let lastName = 'Zampier';
// let country = 'Brazil';
// let city = 'Macae';
// let age = 42;
// let isMarried = false;
// let year = 2023;
// console.log(
//   typeof firstName,
//   typeof lastName,
//   typeof country,
//   typeof city,
//   typeof age,
//   typeof isMarried,
//   typeof year
// );
// console.log('10' === 10);
// console.log(parseInt('9.8') === 10);
// console.log(parseInt('9.8') === 9);
// console.log(null != 0);
// console.log(5 >= 3);
// console.log(5 <= 3);
// console.log(0 === '  0');
// console.log(0 === '0');
// console.log(4 > 3);
// console.log(4 >= 3);
// console.log(4 < 3);
// console.log(4 <= 3);
// console.log(4 == 4);
// console.log(4 === 4);
// console.log(4 != 4);
// console.log(4 !== 4);
// console.log(4 != '4');
// console.log(4 == '4');
// console.log(4 === '4','\n');
// console.log('python'.length > 'jargon'.length)

// console.log(4 > 3 && 10 < 12); //t
// console.log(4 > 3 && 10 > 12); //f
// console.log(4 > 3 || 10 < 12); //t
// console.log(4 > 3 || 10 > 12); //t
// console.log(!(4 > 3)); //f
// console.log(!(4 < 3)); //t
// console.log(!false); //t
// console.log(!(4 > 3 && 10 < 12)); //f
// console.log(!(4 > 3 && 10 > 12)); //v
// console.log(!(4 === '4')); //v

// const now = new Date();
// console.log('now :>> ', now);
// console.log('now.getFullYear() :>> ', now.getFullYear());
// console.log('now.getMonth() :>> ', now.getMonth());
// console.log('now.getDate() :>> ', now.getDate());
// console.log('now.getDay() :>> ', now.getDay());
// console.log('now.getHours() :>> ', now.getHours());
// console.log('now.getMinutes() :>> ', now.getMinutes());
// console.log('now.getTime() :>> ', now.getTime());

// let length = Number(prompt('length'));
// let width = Number(prompt('width'));
// alert(`Area = ${length*width}`)
// alert(`Perimeter = ${2*(length+width)}`)

// let radius = Number(prompt('Radius'))
// alert(`Area = ${radius * Math.PI**2}`)
// alert(`Perimeter = ${2*Math.PI*radius}`)

// let yInter= -2
// let slope = 2
// let xInter = - (yInter/slope)
// console.log('xInter :>> ', xInter);

// let x1 = 2,
//   y1 = 2,
//   x2 = 6,
//   y2 = 10;

// let m = (y2 - y1) / (x2 - x1);
// console.log('m :>> ', m);

// let a =1 , b = 6 , c= 9
// let delta = b**2 -4*a*c
// console.log('delta :>> ', delta);

// x = (-b + Math.sqrt(delta))/(2*a)
// console.log('x :>> ', x);

// let x = 1;
// let y = x ** 2 + 6 * x + 9;
// console.log('y :>> ', y);

// let hours = prompt('Enter Hours:')
// let ratePerHour = prompt('Enter Rate per Hour')
// alert(`Your weekly earning is ${hours*ratePerHour}`)

// let name = 'julio';
// let lastName = 'zampier';
// name.length > 7 ? console.log('Name is long') : console.log('Name is short');

// name.length > lastName.length
//   ? console.log(
//       `Your first name, ${name} is longer than your family name, ${lastName}`
//     )
//   : console.log(
//       `Your first name, ${name} is shorter than your family name, ${lastName}`
//     );

// let myAge =250
// let yourAge =25

// console.log(`I'm ${myAge-yourAge} years older than your.`);

// let bornYear = 1981; //Number(prompt('Enter birth year'));
// let now = new Date();
// let checkAge = Number(now.getFullYear()) - bornYear;
// checkAge >= 18
//   ? alert(`You are ${checkAge}. You are old enough to drive`)
//   : alert(
//       `You are ${checkAge}. You will be allowed to drive after ${
//         18 - checkAge
//       } years.`
//     );

// let year = prompt('Enter number of years you live:')
// const seconds = year * (365+0.25) * 24 * 60 * 60
// alert(`You lived ${seconds} seconds.`)
let now = new Date();
console.log(now);

let year = now.getFullYear();
console.log('year :>> ', year);

let month = String(now.getMonth() + 1);
month.length < 2 ? (month = '0'.concat(month)) : (month = month);
console.log('month :>> ', month);

let dayOfMonth = String(now.getDate());
dayOfMonth.length < 2
  ? (dayOfMonth = '0'.concat(dayOfMonth))
  : (dayOfMonth = dayOfMonth);
console.log('dayOfMonth :>> ', dayOfMonth);

let hours = String(now.getHours());
hours.length < 2 ? (hours = '0'.concat(hours)) : (hours = hours);
console.log('hours :>> ', hours);

let minutes = String(now.getMinutes());
minutes.length < 2 ? (minutes = '0'.concat(minutes)) : (minutes = minutes);
console.log('minutes :>> ', minutes);

let humanReadableTime = `${year}-${month}-${dayOfMonth} ${hours}:${minutes}`;
console.log('humanReadableTime :>> ', humanReadableTime);

humanReadableTime = `${dayOfMonth}-${month}-${year} ${hours}:${minutes}`;
console.log('humanReadableTime :>> ', humanReadableTime);

humanReadableTime = `${dayOfMonth}/${month}/${year} ${hours}:${minutes}`;
console.log('humanReadableTime :>> ', humanReadableTime);
