import { countries } from './countries.js';
/*
* For loop structure

! for(initialization, condition, increment/decrement){
? code goes here
? }
*/
// for (let i = 0; i <= 5; i++) {
//   console.log(i);
// }
// for (let i = 10; i >= 0; i--) {
//   console.log('i :>> ', i);
// }
// for (let i = 0; i <= 5; i++) {
//   console.log(`${i}*${i} = ${i * i}`);
// }

// const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland'];
// const newArr = [];
// for (let i = 0; i < countries.length; i++) {
//   newArr.push(countries[i].toUpperCase());
// }
// console.log('newArr :>> ', newArr);
//!sum all elements in an array
// const numbers = [1, 2, 3, 4, 5];
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
//   console.log(`TL ~ sum`, sum);
// }

//!Create new array based on other array
// const newArr = [];
// for (let i = 0; i < numbers.length; i++) {
//   newArr.push(numbers[i] ** 2);
// }
// console.log('newArr :>> ', newArr);

// const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland'];
// const newArr = [];
// for (let i = 0; i < countries.length; i++) {
//   newArr.push(countries[i].toUpperCase());
// }
// console.log('newArr :>> ', newArr);

//! While Loop
/*
? while(condition){
? code goes here
? }
*/

// let i = 0;
// while (i <= 5) {
//   console.log('i :>> ', i);
//   i++;
// }

//! do while Loop
/*
? do {
? code goes here
? } while(condition)
*/
// let j = 0;
// do {
//   console.log('j :>> ', j);
//   j++;
// } while (j <= 5);

//! for of loop
/* 
? for(const element of arr){
?  code goes here
?}
 */

// const numbers = [1, 2, 3, 4, 5];
// for (const num of numbers) {
//   console.log(num);
// }

// for (const num of numbers) {
//   console.log(num * num);
// }

// let sum = 0;
// for (const num of numbers) {
//   sum += num;
// }
// console.log('sum: ', sum);

// const webTechs = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'React',
//   'Redux',
//   'Node',
//   'MongoDB',
// ];
// for (const tech of webTechs) {
//   console.log('tech to uppercase :>> ', tech.toUpperCase());
// }

// for (const tech of webTechs) {
//   console.log(tech[tech.length - 1]);
// }

// const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland'];
// const newArr = [];
// for (const country of countries) {
//   newArr.push(country.toUpperCase());
// }
// console.log('newArr :>> ', newArr);

//! forEach() method  array.forEach((element)=>{code})
// sum = 0;
// numbers.forEach((num) => {
//   sum += num;
//   console.log('sum :>> ', sum);
// });

// ! break
// for (let i = 0; i <= 5; i++) {
//   if (i == 3) {
//     break;
//   }
//   console.log(i);
// }

//! continue (skip certain iterations)
// for (let i = 0; i <= 5; i++) {
//   if (i == 3) {
//     continue; //?(skip)
//   }
//   console.log(i);
// }
//1
// for (let i = 0; i <= 10; i++) {
//   console.log('i :>> ', i);
// }
// let i = 0;
// while (i <= 10) {
//   console.log('i :>> ', i);
//   i++;
// }
// i = 0;
// do {
//   console.log('i :>> ', i);
//   i++;
// } while (i <= 10);

//2
// for (let i = 10; i >= 0; i--) {
//   console.log('i :>> ', i);
// }
// let i = 10;
// while (i >= 0) {
//   console.log('i :>> ', i);
//   i--;
// }
// i = 10;
// do {
//   console.log('i :>> ', i);
//   i--;
// } while (i >= 0);

//3
// let n = 9;
// for (let i = 0; i <= n; i++) {
//   console.log(i);
// }
// let text = '#';
// for (let i = 0; i < 7; i++) {
//   console.log(text);
//   text = text.concat('#');
// }

// for (let i = 0; i <= 10; i++) {
//   console.log(`${i} x ${i} = ${i * i}`);
// }
// console.log('i    i^2   i^3');
// for (let i = 0; i <= 10; i++) {
//   if (i <= 3) {
//     console.log(`${i}    ${i ** 2}     ${i ** 3}`);
//   } else if (i <= 9) {
//     console.log(`${i}    ${i ** 2}    ${i ** 3}`);
//   } else {
//     console.log(`${i}   ${i ** 2}   ${i ** 3}`);
//   }
// }

//7
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 == 0) {
//     console.log('i :>> ', i);
//   }
// }

// for (let i = 0; i <= 100; i++) {
//   if (i % 2 != 0) {
//     console.log('i :>> ', i);
//   }
// }

// let factors = [];
// for (let i = 2; i <= 100; i++) {
//   for (let j = 1; j <= i; j++) {
//     let div = i / j;
//     if (Number.isInteger(div) == true) {
//       factors.push(div);
//     }
//   }
//   if (factors.length <= 2) {
//     console.log('i :>> ', i);
//   }
//   // console.log(i, factors);
//   factors = [];
// }
// let sum = 0;
// for (let i = 0; i <= 100; i++) {
//   sum += i;
// }
// console.log(`sum = ${sum}`);
//11
// let eSum = 0;
// let oSum = 0;
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 == 0) {
//     eSum += i;
//   } else {
//     oSum += i;
//   }
// }
// console.log(`Sum of evens = ${eSum}, Sum of odds ${oSum}`);
//12
// let eSum = 0;
// let oSum = 0;
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 == 0) {
//     eSum += i;
//   } else {
//     oSum += i;
//   }
// }
// const arr = [eSum, oSum];
// console.log(`Sum of evens = ${eSum}, Sum of odds ${oSum}`);
// console.log(arr);
//13
// let arr = [];
// for (let i = 0; i < 5; i++) {
//   arr.push(Math.floor(Math.random() * 1000));
// }
// console.log('arr :>> ', arr);
// let arr = [];
// for (let i = 0; i < 5; i++) {
//   let numberToPush = Math.floor(Math.random() * 100000);
//   if (arr.includes(numberToPush)) {
//     continue;
//   } else {
//     arr.push(numberToPush);
//   }
// }
// console.log('arr :>> ', arr);

// 15 id with 6 chars
// let numberOfChars = 30;
// let result = '';
// let charSet =
//   'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&';
// let charSetIndex = charSet.length;
// while (result.length < numberOfChars) {
//   result += charSet.charAt(Math.floor(Math.random() * charSetIndex));
// }
// console.log(result);
// let numberOfChars = 7;
// let result = '#';
// let chars = '0123456789abcdef';
// while (result.length < numberOfChars) {
//   result += chars.charAt(Math.floor(Math.random() * chars.length));
// }
// console.log(result);

// Level 2 exercise 3
// let rColor = Math.floor(Math.random() * 255);
// let gColor = Math.floor(Math.random() * 255);
// let bColor = Math.floor(Math.random() * 255);
// console.log(`rgb(${rColor},${gColor},${bColor})`);
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
// ];
// const webTechs = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'React',
//   'Redux',
//   'Node',
//   'MongoDB',
// ];
// const cToUpp = [];
// for (const country of countries) {
//   cToUpp.push(country.toUpperCase());
// }
// console.log('cToUpp :>> ', cToUpp);

// const arrLength = [];
// for (const country of cToUpp) {
//   arrLength.push(country.length);
// }
// console.log(`TL ~ arrLength`, arrLength);
// const newArr = [];
// let innerArr = [];
// let s = 'Albania';
// let slice = s.slice(0, 3).toUpperCase();
// console.log(`TL ~ slice`, slice);
// for (const country of countries) {
//   innerArr.push(country, country.slice(0, 3).toUpperCase(), country.length);
//   newArr.push(innerArr);
//   innerArr = [];
// }
// console.log(newArr);
// const newArr = [];
// const newArr2 = [];
// for (const country of countries) {
//   if (country.includes('land')) {
//     newArr.push(country);
//   } else {
//     newArr2.push(country);
//   }
// }
// newArr.length > 0 ? console.log(newArr) : console.log(newArr2);
// const newArr = [];
// const newArr2 = [];
// for (const country of countries) {
//   if (country.at(-2) == 'i' && country.at(-1) == 'a') {
//     newArr.push(country);
//   } else {
//     newArr2.push(country);
//   }
// }
// newArr.length > 0 ? console.log(newArr) : console.log(newArr2);
// let lengthArr = [];
// for (const country of countries) {
//   lengthArr.push(Number(country.length));
// }
// let max = Math.max(...lengthArr);
// for (const country of countries) {
//   if (country.length == max) {
//     console.log(country);
//   }
// }
// const lengthArray = [];
// for (const country of countries) {
//   if (country.length == 5) {
//     lengthArray.push(country);
//   }
// }
// console.log(`TL ~ lengthArray`, lengthArray);
// const mainArr = [];
// let innerArr = [];
// for (const tech of webTechs) {
//   innerArr.push(tech, tech.length);
//   mainArr.push(innerArr);
//   innerArr = [];
// }
// console.log(`TL ~ mainArr`, mainArr);
// const mernStack = ['MongoDB', 'Express', 'React', 'Node'];
// //13
// let mern = '';
// for (const tech of mernStack) {
//   mern += tech[0].toUpperCase();
// }
// console.log(`TL ~ mern`, mern);

// //14
// for (const tech of webTechs) {
//   console.log(tech);
// }
// //15
// let fruitArray = ['banana', 'orange', 'mango', 'lemon'];
// const newArr = [];
// for (let i = fruitArray.length - 1; i >= 0; i--) {
//   newArr.push(fruitArray[i]);
// }
// console.log(newArr);
// //16
// const fullStack = [
//   ['HTML', 'CSS', 'JS', 'React'],
//   ['Node', 'Express', 'MongoDB'],
// ];
// for (const arr of fullStack) {
//   for (const item of arr) {
//     console.log(item);
//   }
// }
//!Exercises lv3

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB',
];
const mernStack = ['MongoDB', 'Express', 'React', 'Node'];

// //1 Copy countries array(Avoid mutation)
// const newCountries = countries.slice(0);
// console.log(`TL ~ countries`, countries);
// console.log(`TL ~ newCountries`, newCountries);

// //2
// let sortedCountries = countries.slice(0).sort();
// console.log(`TL ~ sortedCountries`, sortedCountries);

// //3
// let sortedWebTechs = webTechs.sort();
// console.log(`TL ~ sortedWebTechs`, sortedWebTechs);
// let sortedMernStack = mernStack.sort();
// console.log(`TL ~ mernStack`, sortedMernStack);

//4 Extract all the countries contain the word 'land' from the countries
//  array and print it as array
// const newCountries = [];
// for (const country of countries) {
//   if (country.includes('land')) {
//     newCountries.push(country);
//   }
// }
// console.log(`TL ~ newCountries`, newCountries);

//5 Find the country containing the hightest number of characters in the
//  countries array
// const lengths = [];
// for (const country of countries) {
//   lengths.push(country.length);
// }
// const max = Math.max(...lengths);
// console.log(`TL ~ max`, max);
// for (const country of countries) {
//   if (country.length == max) {
//     console.log(country);
//   }
// }

// //6
// const countriesWland = [];
// for (const country of countries) {
//   if (country.includes('land')) {
//     countriesWland.push(country);
//   }
// }
// console.log(`TL ~ countriesWland`, countriesWland);

// //7
// const countriesWfourChars = [];
// for (const country of countries) {
//   if (country.length == 4) {
//     countriesWfourChars.push(country);
//   }
// }
// console.log(`TL ~ countriesWfourChars`, countriesWfourChars);

//8 countries containing two or more words
// const countTwoMoreWords = [];
// for (const country of countries) {
//   if (country.includes(' ')) {
//     countTwoMoreWords.push(country);
//   }
// }
// console.log(countTwoMoreWords);

//9
const reversed = countries.reverse();
const revertalized = [];
for (const country of reversed) {
  revertalized.push(country.toUpperCase());
}
console.log(`TL ~ revertalized`, revertalized);
