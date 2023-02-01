import { countries } from './countries.js';
import { webTechs } from './web_techs.js';

// let cLength = countries.length;
// console.log(`TL ~ cLength`, cLength);
// let wtLength = webTechs.length;
// console.log(`TL ~ cLength`, wtLength);

// if (countries.includes('Ethiopia')) {
//   console.log(countries[countries.indexOf('Ethiopia')].toUpperCase());
// } else {
//   countries.push('Ethiopia');
//   console.log(`TL ~ countries`, countries);
// }
// if (webTechs.includes('Sass')) {
//   console.log('Sass is a CSS preprocess');
// } else {
//   webTechs.push('Sass');
//   console.log(`TL ~ webTechs`, webTechs);
// }

// //6
// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
// const backEnd = ['Node', 'Express', 'MongoDB'];
// const fullStack =frontEnd.concat(backEnd)
// console.log(`TL ~ fullStack`, fullStack)

//! level 3
//1
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
console.log(`TL ~ ages`, ages);
//? Sort array of numbers
//? Reverse array of numbers array.sort(function(a,b){return b-a})
ages.sort(function (a, b) {
  return a - b;
});
console.log(`TL ~ ages`, ages);
//? Min / Max
const min = Math.min.apply(null, ages);
const max = Math.max.apply(null, ages);
console.log(`TL ~ min`, min);
console.log(`TL ~ max`, max);

//? Median if odd / even array length
console.log(ages.length);
let medianIndex;
if (ages.length % 2 != 0) {
  medianIndex = Math.floor((ages.length - 1) / 2);
  console.log('Median Age: ', ages[medianIndex]);
} else {
  let medianAge =
    (ages[(ages.length - 2) / 2] + ages[Math.floor((ages.length - 1) / 2)]) / 2;
  console.log(`TL ~ Median Age: `, medianAge);
}
//?Find average Age
let sum = ages.reduce(function (a, b) {
  return a + b;
});
let average = sum / ages.length;

console.log(sum);
console.log(`TL ~ average`, average);

//?range = max - min
let rangeAges = max - min;
console.log(`TL ~ rangeAges`, rangeAges, 'years');

//? Compare min-average and max-average

let minAvg = Math.abs(min - average);
console.log(`TL ~ minAvg`, minAvg);
let maxAvg = Math.abs(max - average);
console.log(`TL ~ maxAvg`, maxAvg);

//?Slice 1st 10countries
console.log(countries);
const cSliced = countries.slice(0, 10);
console.log(`TL ~ cSliced`, cSliced);
//?Middle country/countries
let cLength = countries.length;
console.log(`TL ~ cLength`, cLength);

cLength % 2 != 0
  ? console.log('Middle country', countries[Math.floor((cLength - 1) / 2)])
  : console.log(
      'Middle countries:',
      countries[Math.floor((cLength - 1) / 2)],
      countries[Math.floor(cLength / 2)]
    );

let arr1;
let arr2;
// let arr3;
if (cLength % 2 != 0) {
  arr1 = countries.slice(0, Math.floor((cLength + 1) / 2));
  console.log(`TL ~ arr1`, arr1);
  arr2 = countries.slice(Math.floor((cLength + 1) / 2));
  console.log(`TL ~ arr2`, arr2);
} else {
  arr1 = countries.slice(0, cLength / 2);
  console.log(`TL ~ arr1`, arr1);
  arr2 = countries.slice(cLength / 2);
  console.log(`TL ~ arr2`, arr2);
  // arr3 = countries.slice(-3,-2);
  // console.log(`TL ~ arr3`, arr3);
}
