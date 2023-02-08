//!Higher Order function
//takes other function(s) as parameter(s)
//!Callback
//function myFunction(callback)

// const callback = (n) => {
//   return n ** 2;
// };

// function cube(callback, n) {
//   return callback(n) * n;
// }

// console.log(cube(callback, 98));

//!Returning Function - Higher Order functions return function as a value
// const higherOrder = (n) => {
//   const doSomething = (m) => {
//     const doWhatEver = (t) => {
//       return 2 * n + 3 * m + t;
//     };
//     return doWhatEver;
//   };
//   return doSomething;
// };
// console.log(higherOrder(2)(3)(10));

// const numbers = [1, 2, 3, 4, 5];
// const sumArray = (arr) => {
//   let sum = 0;
//   const callback = (element) => {
//     sum += element;
//   };
//   arr.forEach(callback);
//   return sum;
// };
//console.log(sumArray(numbers))

// const sumArray = (arr) => {
//   let sum = 0;
//   arr.forEach((element) => {
//     sum += element;
//   });
//   return sum;
// };
// console.log(sumArray(numbers));

//!Setting time -> setInterval ; setTimeout
/*
syntax

function callback(){
  code
  code
  code
}
? setInterval(callback,duration)
*/
// function sayHello() {
//   console.log('Hello');
// }
//setInterval(sayHello,10000); //prints hello every 10seconds
//setTimeout(sayHello,2000) // Waits 2 seconds and print hello

//!Functional Programming
//? array.forEach(function()) , use only for arrays
// const arr = [0, 1, 2, 3, 4, 5];
// // arr.forEach((element,index,arr)=>{
// //   console.log(index, element, arr);
// // })

// arr.forEach((element, index, arr) => console.log(index, element, arr));

// let sum = 0;
// const numbers = [1, 2, 3, 4, 5];

// // numbers.forEach((num)=>console.log(num))
// // console.log(sum);
// console.clear();

// numbers.forEach((num) => (sum += num));
// console.log(sum);

// const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'];

// const countries2 = [];
// countries.forEach((element) => countries2.push(element.toUpperCase()));
// console.log(countries2);

//! Map
/*
?   const modifiedArray = originalArray.map(function (element, index, arr){
?     return element
?   })

?   or with arrow function + explicit return

?   const modifiedArray = arr.map((element,index) => element);
*/

// const numbers = [1, 2, 3, 4, 5];
// const numbersSquare = numbers.map((num) => num ** 2);

// console.log(numbersSquare);

// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
// const numbersToUppercase = names.map((name) => name.toUpperCase());

// console.log(numbersToUppercase);

const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
  'Greenland',
];
//? Arrow function
// const countriesToUpperCase = countries.map((country) => {
//   return country.toUpperCase();
// });
//? Function
// const countriesToUpperCase = countries.map(function (country) {
//   return country.toUpperCase();
// });
//? Arrow function + explicit return
// const countriesToUpperCase = countries.map((country) => country.toUpperCase());

// console.log(countriesToUpperCase);

// const countriesFirstThreeLetters = countries.map((country) =>
//   country.slice(0, 3).toUpperCase()
// );

// console.log(countriesFirstThreeLetters);

//! filter()
/*
!   const countriesContainingLand = countries.filter((country) => country.includes('land'))
*/
const countriesContainingLand = countries.filter((element) =>
  element.includes('land')
);
console.log(countriesContainingLand);

const countriesEndsByia = countries.filter((country) => country.endsWith('ia'));
console.log(`LOG ~ countriesEndsByia`, countriesEndsByia);

const countriesWithFiveLetters = countries.filter(
  (country) => country.length === 5
);
console.log(`LOG ~ countriesWithFiveLetters`, countriesWithFiveLetters);

const scores = [
  { name: 'Asabeneh', score: 95 },
  { name: 'Lidiya', score: 98 },
  { name: 'Mathias', score: 80 },
  { name: 'Elias', score: 50 },
  { name: 'Martha', score: 85 },
  { name: 'John', score: 100 },
];

const pplWithScoreGreaterEight = scores.filter((ppl) => ppl.score > 80);
console.log(`LOG ~ pplWithScoreGreaterEight`, pplWithScoreGreaterEight);

//! Reduce
/*
?   array.reduce((accumulator, current) => {
?     operations
?     return
?   }, initialValue)
 */
const numbers = [1, 2, 3, 4, 5]; //                                      offset
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(`LOG ~ sum`, sum);

//!Every
//?Check if all the elements are similar in one aspect. It returns boolean

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook', '', ' '];
const areAllStr = names.every((name) => typeof name === 'string'); // all names are strings?
console.log(`LOG ~ areAllStr`, areAllStr);

const bools = [true, true, true, true];
const areAllTrue = bools.every((bool) => bool === true); // Are all true
console.log(`LOG ~ areAllTrue`, areAllTrue);

//!Find
//? Returns the first element which satisfies the condition
//
const ages = [24, 22, 25, 32, 35, 18];

const age = ages.find((age) => age < 20);

console.log(age);

const names2 = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
const result = names2.find((name) => name.length < 7);
console.log(`LOG ~ result`, result);
//

const scores2 = [
  { name: 'Asabeneh', score: 95 },
  { name: 'Mathias', score: 80 },
  { name: 'Elias', score: 50 },
  { name: 'Martha', score: 85 },
  { name: 'John', score: 100 },
];
const score = scores2.find((user) => user.score <= 80);
console.log(score.name, score.score);
