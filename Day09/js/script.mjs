import { countries } from './consts.mjs';
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

// const countries = [
//   'Albania',
//   'Bolivia',
//   'Canada',
//   'Denmark',
//   'Ethiopia',
//   'Finland',
//   'Germany',
//   'Hungary',
//   'Ireland',
//   'Japan',
//   'Kenya',
//   'Greenland',
// ];
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
// const countriesContainingLand = countries.filter((element) =>
//   element.includes('land')
// );
// console.log(countriesContainingLand);

// const countriesEndsByia = countries.filter((country) => country.endsWith('ia'));
// console.log(`LOG ~ countriesEndsByia`, countriesEndsByia);

// const countriesWithFiveLetters = countries.filter(
//   (country) => country.length === 5
// );
// console.log(`LOG ~ countriesWithFiveLetters`, countriesWithFiveLetters);

// const scores = [
//   { name: 'Asabeneh', score: 95 },
//   { name: 'Lidiya', score: 98 },
//   { name: 'Mathias', score: 80 },
//   { name: 'Elias', score: 50 },
//   { name: 'Martha', score: 85 },
//   { name: 'John', score: 100 },
// ];

// const pplWithScoreGreaterEight = scores.filter((ppl) => ppl.score > 80);
// console.log(`LOG ~ pplWithScoreGreaterEight`, pplWithScoreGreaterEight);

//! Reduce
/*
?   array.reduce((accumulator, current) => {
?     operations
?     return
?   }, initialValue)
 */
// const numbers = [1, 2, 3, 4, 5]; //                                      offset
// const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
// console.log(`LOG ~ sum`, sum);

//!Every
//?Check if all the elements are similar in one aspect. It returns boolean

//const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook', '', ' '];
// const areAllStr = names.every((name) => typeof name === 'string'); // all names are strings?
// console.log(`LOG ~ areAllStr`, areAllStr);

// const bools = [true, true, true, true];
// const areAllTrue = bools.every((bool) => bool === true); // Are all true
// console.log(`LOG ~ areAllTrue`, areAllTrue);

//!Find
//? Returns the first element which satisfies the condition
//
//const ages = [24, 22, 25, 32, 35, 18];

// const age = ages.find((age) => age < 20);

// console.log(age);

// const names2 = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
// const result = names2.find((name) => name.length < 7);
// console.log(`LOG ~ result`, result);
//

// const scores2 = [
//   { name: 'Asabeneh', score: 95 },
//   { name: 'Mathias', score: 80 },
//   { name: 'Elias', score: 50 },
//   { name: 'Martha', score: 85 },
//   { name: 'John', score: 100 },
// ];
// const score = scores2.find((user) => user.score <= 80);
// console.log(score.name, score.score);

//! FindIndex. Return position of the first element which satisfies the condition
//console.clear();
// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
// const ages = [24, 22, 25, 32, 35, 18];

// const result = names.findIndex((name) => name.length > 7);
// console.log(`LOG ~ result`, result); //index 0

// const age = ages.findIndex((age) => age < 20);
// console.log(age); //index 5

//! array.some(()=>{}) check if some elements are similar in one aspect. (returns boolean)
// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
// const bools = [true, true, false, false];

// const areSomeTrue = bools.some((b) => b === true);
// console.log(`LOG ~ areSomeTrue`, areSomeTrue);

// const areAllStr = names.some((name) => typeof name === 'number'); //exists at least one number? //false
// console.log(`LOG ~ areAllStr`, areAllStr)

//! array.sort() , modifies the original array, not reliable for numbers
//? sorting strings
// const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot'];
// const products2 = [...products];
// console.log(products.sort());
// console.log(products2);

//? sorting numbers
// const numbers = [9.81, 3.14, 100, 37];
// const copyNumbers = [...numbers];

// console.log(copyNumbers);
// numbers.sort((a, b) => a - b); //sort
// console.log(numbers);
// numbers.sort((a, b) => b - a); //reverse
// console.log(numbers);

//? Sorting object Arrays
/*
?   objArr.sort(function(a,b){
?     if(a.key < b.key) return -1
?     if(a.key > b.key) return 1
?     return 0
?   })
*/

// const users = [
//   { name: 'Asabeneh', age: 150 },
//   { name: 'Brook', age: 50 },
//   { name: 'Eyob', age: 100 },
//   { name: 'Elias', age: 22 },
// ];

// users.sort((a, b) => {
//   if (a.age < b.age) return -1;
//   if (a.age > b.age) return 1;
//   return 0;
// });
// console.log(users);

//LV 01

//1
//For each executes a callback to each element of an array
//map executes a function and returns an array
//filter returns an array of elements that got true on callback
//reduce executes an call back and its return (a single value) is accumulated

//2
// const callback = (element) => {
//   return element * 10;
// };

//3
// countries.forEach((country)=>{
//   console.log(country);
// })

//4
// names.forEach((name)=>{
//   console.log(name);
// })

//5
// numbers.forEach(number => {
//   console.log(number);
// });

//6
// const newCountries = countries.map((country) => country.toUpperCase());

// console.log(`LOG ~ newCountries`, newCountries)

//7
// const countriesLength = countries.map((country)=>country.length)
// console.log(`LOG ~ countriesLength`, countriesLength)

//8
// const numbersToSquare = numbers.map(function (number) {
//   return number ** 2;
// });
// console.log(`LOG ~ numbersToSquare ~ numbersToSquare`, numbersToSquare)

//9
// const newNames = names.map(function (name) {
//   return name.toUpperCase();
// });
// console.log(newNames);

//10
// const productsPrices = products.map((product) => product.product+': R$ '+product.price);
// console.log(`LOG ~ productsPrices`, productsPrices)

//11
// const countriesWithLand = countries.filter((country) =>
//   country.toLowerCase().includes('land')
// );
// console.log(`LOG ~ countriesWithLand`, countriesWithLand)

//12
// const countriesWithSixChars = countries.filter(function (country) {
//   return country.length == 6;
// });
// console.log(`LOG ~ countriesWithSixChars ~ countriesWithSixChars`, countriesWithSixChars)

//13
// const countriesWithSixMoreLetters = countries.filter(
//   (country) => country.length >= 6
// );
// console.log(countriesWithSixMoreLetters);

//14
// const countriesStartsE = countries.filter(function (country) {
//   country.startsWith('E');
// });
// console.log(`LOG ~ countriesStartsE ~ countriesStartsE`, countriesStartsE);

//15
// const pricesWithValue = products.filter(
//   (product) => typeof product.price == 'number'
// );
// console.log(`LOG ~ pricesWithValue`, pricesWithValue);

//16
// function getStringLists(arr) {
//   const newArr = arr.map((item) => item.toString());
//   return newArr;
// }
// const test = [1, 12, 'a', 'c', 20];
// console.log(getStringLists(test));

//17
// const sum = numbers.reduce((acc, curr) => acc + curr, 0);
// console.log(`LOG ~ sum`, sum)

//18
// const concatCountries = countries.reduce((a, b) => {
//   if (countries.indexOf(b) != countries.length - 1) {
//     return a.concat(', ' + b);
//   } else {
//     return a.concat(' and ' + b + ' are north European countries');
//   }
// }, 'Estonia');

// console.log(`LOG ~ concatCountries`, concatCountries);

//19
//some at least 1,
//every -> all elements must satisfy the condition

//20
// const someLengthGreaterSeven = names.some(function (name) {
//   return name.length > 7;
// });
// console.log(`LOG ~ someLengthGreaterSeven ~ someLengthGreaterSeven`, someLengthGreaterSeven) //true

//21
// const everyCountryContainsLand = countries.every((country) =>
//   country.toLowerCase().includes('land')
// );
// console.log(`LOG ~ everyCountryContainsLand`, everyCountryContainsLand); //false

// 22
// Find -> Find the first element that satisfies the condition
// findindex -> Find the position of the first element that satisfies the condition

//23

// const country = countries.find((count) => count.length == 6);
// console.log(country);

//24
// const country = countries.findIndex((country) => country.length == 6);
// console.log(country);

//25
// const country = countries.findIndex((country) => country == 'norway');
// console.log(country);

//26
const country = countries.findIndex((country) => country == 'Russia');
console.log(country);

//Exercises Lvl 2
//1
