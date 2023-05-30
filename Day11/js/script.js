//! Destructuring and Spread
//? Destructuring = unpack arrays and store their values in variables
// const numbers = [1, 2, 3];
// let [numOne, numTwo, numThree] = numbers;
// console.log(
//   `Number one: ${numOne}, Number two: ${numTwo}, Number three: ${numThree}`
// );

// const names = ['Kiko', 'Zinho', 'Branco', 'Lindo'];
// let [firstPerson, secondPerson, thirdPerson, fourthPerson] = names;
// console.log(`LOG ~ names:`, names);

// const scientificConstants = [2.72, 3.14, 9.81, 37, 100];
// let [e, pi, gravity, humanBodyTemp, waterBoilingPoint] = scientificConstants;
// console.log(e, gravity, waterBoilingPoint);

// const fullStack = [
//   ['HTML', 'CSS', 'JS', 'React'],
//   ['Node', 'Express', 'MongoDB'],
// ];
// const [frontEnd, backEnd] = fullStack;
// console.log(frontEnd);
// console.log(backEnd);

// const numbersTwo = [1, 2, 3];
//? using comma to skip an specific index and omit the second value
// let [numOne_, , numThree_] = numbersTwo;
// console.log(numOne_, numThree_);

// const namesTwo = ['Asabeneh', 'Brook', 'David', 'John'];
// let [, secondpers, , fourthpers] = namesTwo;
// console.log(secondpers, fourthpers);
//? assigning default values to destructured variables
// const namesThree = [undefined, 'Pasteleiro', 'Vadio'];
// let [firstMf = 'Kiko', secondMf, thirdMf, fourthMf = 'Zinho'] = namesThree;
// console.log(firstMf, secondMf, thirdMf, fourthMf);

//? Destructuring just few elements from an array
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let [num1, num2, num3, ...rest] = numbers;
// console.log(num1, num2, num3);
// console.log(rest);

//? Destructuring during iteration
// const countries = [
//   ['Finland', 'Helsinki'],
//   ['Sweden', 'Stockholm'],
//   ['Norway', 'Oslo'],
// ];
// for (const [country, capital] of countries) {
//   console.log(`Country: ${country}, Capital: ${capital}`);
// }
// const fullStack = [
//   ['HTML', 'CSS', 'JS', 'React'],
//   ['Node', 'Express', 'MongoDB'],
// ];
// for (const [first, second, , fourth] of fullStack) {
//   console.log(first, second, fourth);
// }

//? Destructuring Objects - name of variable must be the same as the key/property
// const rectangle = {
//   width: 20,
//   height: 10,
//   area: 200,
// };
// let { width, height, area, perimeter } = rectangle;
// console.log(width, height, area, perimeter);
//? but you can change the name of the variable during destructuring
//? also we can assign default values to destructured variables (see perimeter)
// let { width: w, height: h, area: a, perimeter: p = 60 } = rectangle;
// console.log(w, h, a, p);

// const calculatePerimeter = (rectangle) => {
//   return 2 * (rectangle.width + rectangle.height);
// };
// console.log(calculatePerimeter(rectangle));
//? another example,
// const person = {
//   firstName: 'Asabeneh',
//   lastName: 'Yetayeh',
//   age: 25,
//   country: 'Finland',
//   job: 'Instructor and Developer',
//   skills: [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB',
//     'Python',
//     'D3.js',
//   ],
//   languages: ['Amharic', 'English', 'Suomi(Finnish)'],
// };
// const getPersonInfo = (obj) => {
//   const skills = obj.skills;
//   const formattedSkills = skills.slice(0, -1).join(', ');
//   const languages = obj.languages;
//   const formattedLanguages = languages.slice(0, -1).join(', ');
//   let personInfo = `${obj.firstName} ${obj.lastName} lives in ${obj.country}, ${
//     obj.age
//   } years old. He is an ${obj.job}. He teaches ${formattedSkills} and ${
//     skills[skills.length - 1]
//   }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`;
//   return personInfo;
// };

// console.log(getPersonInfo(person));

//?Object parameter with destructuring
// const calculatePerimeter = ({ width, height }) => {
//   return 2 * (width + height);
// };
// console.log(calculatePerimeter(rectangle));

// const getPersonInfo = ({
//   firstName,
//   lastName,
//   age,
//   country,
//   job,
//   skills,
//   languages,
// }) => {
//   const formattedSkills = skills.slice(0, -1).join(', ');
//   const formattedLanguages = languages.slice(0, -1).join(', ');
//   let personInfo = `${firstName} ${lastName} lives in ${country}. He is ${age} years old. He is an ${job}. He teaches ${formattedSkills} and ${
//     skills[skills.length - 1]
//   }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}`;
//   return personInfo;
// };
// console.log(getPersonInfo(person));

//?Destructuring objects during iteration
// const todoList = [
//   {
//     task: 'Prepare JS Test',
//     time: '4/1/2020 8:30',
//     completed: true
//   },
//   {
//     task: 'Give JS Test',
//     time: '4/1/2020 10:00',
//     completed: false
//   },
//   {
//     task: 'Assess Test Result',
//     time: '4/1/2020 1:00',
//     completed: false
//   }
// ]
// for (const {task, time, completed} of todoList){
//   console.log(task, time, completed);
// }

//! Spread Operator (or Rest Operator)
//? Spread Operator = get the rest elements as  array and spread array elements
//? to another array
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let [num1, num2, num3, ...rest] = nums;
// console.log(num1, num2, num3);
// console.log(rest);
// console.log(...nums);

// const countries = [
//   'Germany',
//   'France',
//   'Belgium',
//   'Finland',
//   'Sweden',
//   'Norway',
//   'Denmark',
//   'Iceland',
// ];
// let [ger, fra, ,...nordicCountries]= countries;
// console.log(ger);
// console.log(fra);
// console.log(nordicCountries);

//? Spread Operator to copy arrays
// const evens = [0, 2, 4, 6, 8, 10];
// const evenNumbers = [...evens]

// const odds = [1, 3, 5, 7, 9];
// const oddNumbers = [...odds]

// const wholeNumbers = [...evens, ...odds]

// console.log(evenNumbers);
// console.log(oddNumbers);
// console.log(wholeNumbers);

// const frontEnd = ['HTML', 'CSS', 'JS', 'React'];
// const backEnd = ['Node', 'Express', 'MongoDB'];
// const fullStack = [...frontEnd, ...backEnd]
// const fullStack2 = [frontEnd, backEnd]
// console.log(fullStack2);
// console.log(fullStack);

//? Spread operator to copy objects
// const user = {
//   name: 'Kiko',
//   title: 'Mechanic',
//   country: 'Brazil',
//   city: 'Manaus',
// };

// const copiedUser = { ...user };
// console.log(copiedUser);

//? Modifying or changing the object while copying
// const copiedUser2 = { ...user, title: 'Engenheiro', country: 'England' };
// console.table(copiedUser2);

//? Spread Operator with arrow function: Whenever we want to write an arrow
//? function which takes unlimited number of args. the arg passed will change
//? to an array

// const allArgs = (...args) => {
//   console.log(args);
// };
// allArgs(1, 3, 5, 9); //* [1, 3, 5, 9] all args passed became an array

// const sumAllNumbers = (...args) => {
//   let sum = 0;
//   for (const number of args) {
//     sum += number;
//   }
//   return sum;
// };
// console.log(sumAllNumbers(1, 2, 3, 4, 5, 6));

//!Exercises
import { constants, countries, rectangle, users } from './consts.js';
//! Lv-1
// 1 Destructure and assign the elements of constants array to e, pi, gravity,
//humanBodyTemp, waterBoilingTemp.
let [e, pi, gravity, hbt, wbt] = constants;
console.log(e, pi, gravity, hbt, wbt);

// 2 Destructure and assign the elements of countries array to fin, est, sw,
//den, nor
let [fin, est, sw, den, nor] = countries;
console.log(fin, est, sw, den, nor);

// 3 Destructure the rectangle object by its properties or keys.
let { width, height, area, perimeter } = rectangle;
console.log('width', width);
console.log('height', height);
console.log('area', area);
console.log('perimeter', perimeter);

//! Lv-2
/* 1 Iterate through the users array and get all the keys of the object using
destructuring */

//2 Find the persons who have less than two skills
const usersWithLessTwoSkills = [];
for (const { name, skills } of users) {
  if (skills.length < 2) {
    usersWithLessTwoSkills.push(name);
  }
}
console.log(usersWithLessTwoSkills);
