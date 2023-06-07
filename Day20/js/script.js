// ! Clean code
//? Variables
let firstName = 'Nosdaj';
let lastName = 'Arievilo';
let country = 'Latvia';
let city = 'Riga';

const PI = Math.PI;
const gravity = 9.81;

//? Arrays (names in plural)

const numbers = [1, 2, 3, 4, 5];
const skills = ['JavaScript', 'HTML', 'CSS'];

//? Functions (camelCase)
//*One liner function (explicit return)
// function which returns name of a person
const printFullName = (firstName, lastName) => firstName + ' ' + lastName;

// function which calculates a square of a number
const square = (n) => n * n;

// a function which generate random hexa colors
const hexaColor = () => {
  const str = '0123456789abcdef';
  let hexa = '#';
  let index;
  for (let i = 0; i < 6; i++) {
    index = Math.floor(Math.random() * str.length);
    hexa += str[index];
  }
  return hexa;
};

// a function which shows date and time
const showDateTime = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  if (hours < 10) {
    hours = '0' + hours;
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  const dateMonthYear = date + '.' + month + '.' + year;
  const time = hours + ':' + minutes;
  const fullTime = dateMonthYear + ' ' + time;
  return fullTime;
};

// let tempo = new Date().toLocaleString();
// console.log(`LOG ~ tempo:`, tempo)

//declaring an array variable
const names = ['Nosdaj', 'Arievilo', 'Riga', 'Latvia'];

//iterating an array using regular for loop
let len = names.length;
for (let i = 0; i < len; i++) {
  console.log(names[i].toUpperCase());
}

//iterating an array using for of loop
for (const name of names) {
  console.log(name.toUpperCase());
}

//iterating array using forEach
names.forEach((name) => {
  name.toLowerCase();
  console.log(name);
});

//? Objects
const person = {
  firstName: 'Nosdaj',
  lastName: 'Arievilo',
  age: 3212,
  country: 'Latvia',
  city: 'Riga',
  skills: [
    'World of Warcrafter',
    'Auctions king',
    'Lootbox master',
    'Jasper Gallywix look alike',
  ],
  isMarried: false,
};

//iterating array using for in loop
for (const key in person) {
  console.log(key, person[key]);
}

//? Conditionals
//syntax
// if (condition) {
//   //this part of code run for truthy condition
// } else {
//   //this part of code run for falsy condition
// }
//if else
let num = 3;
if (num > 0) {
  console.log(`${num} is positive number`);
} else {
  console.log(`${num} is negative number`);
}
//if /else if/ else if/ else
let a = 0;
if (a > 0) {
  console.log(`${a} is positive number`);
} else if (a < 0) {
  console.log(`${a} is negative number`);
} else if (a == 0) {
  console.log(`${a} is zero`);
} else {
  console.log(`${a} is not a number`);
}

//*Switch case
//let dayUserInput = prompt('What day is today?');
//let day = dayUserInput.toLowerCase();

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
//     console.log('Today is Friday');
//     break;
//   case 'saturday':
//     console.log('Today is Saturday');
//     break;
//   case 'sunday':
//     console.log('Today is sunday');
//     break;
//   default:
//     console.log('It is not a week day');
// }

//* Ternary operator
//syntax
//condition ? true : false;
let isRaining = true;
isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.');

//? Class (we use CamelCase with first letter capital)
class ClassName {
  //code goes here
}

//defining class
class Person {
  constructor(firstName, lastName) {
    console.log(this);
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const julio = new Person('Julio', 'Arievilo');
