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

for (let i = 3; i <= 100; i++) {
  if (i % 2 == 0) {
  } else {
    for (let b = 2; b < Math.sqrt(i); b++) {
      if (i % b == 0) {
      } else {
        console.log(i);
      }
    }
  }
}
console.log('9%3 :>> ', 9 % 3);
