//! Sets -> Collection of unique elements
/* const companies = new Set();
console.log(companies);

const languages = [
  'English',
  'Finnish',
  'English',
  'French',
  'Spanish',
  'English',
  'French',
]
const setOfLanguages = new Set(languages);
console.log(setOfLanguages);
for (const language of setOfLanguages){
  console.log(language);
} */
//? Adding Elements to Sets .add
// const companies = new Set();
// const arrOfCompanies = ['Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft'];
// console.log('Companies size: ', companies.size);
// arrOfCompanies.forEach((company) => companies.add(company));
// companies.add('Google');
// companies.add('Facebook');
// companies.add('Amazon');
// companies.add('Oracle');
// companies.add('Microsoft');
// console.log('Companies size: ', companies.size);
// console.log(companies);

//? Deleting Elements from Sets .delete
// console.log(companies.delete('Facebook'));
// console.log(companies);

//? Checking elements in Sets .has
// console.log(companies.has('Google'));
// console.log(companies.has('Apple'));

//? Clearing Elements from Sets .clear
// companies.clear();
// console.log(companies);
//? Using sets to count how many items are in an array
// const languages = [
//   'English',
//   'Finnish',
//   'English',
//   'French',
//   'Spanish',
//   'English',
//   'French',
// ];
// const langSet = new Set(languages);
// console.log(langSet);
// console.log(langSet.size);
// const counts = [];
// const count = {};

// for (const l of langSet) {
//   const filteredLang = languages.filter((lng) => lng === l);
//   console.log(filteredLang);
//   counts.push({ lang: l, count: filteredLang.length });
// }
// console.log(counts);

//? Count unique values in an array
// const numbers = [5, 3, 2, 5, 5, 9, 4, 5];
// const setOfNumbers = new Set(numbers);
// console.log(setOfNumbers);
// console.log(setOfNumbers.size);

//? Union of Sets A U B
let a = [1, 2, 3, 4, 5];
let b = [3, 4, 5, 6];
// let c = [...a, ...b];
// console.log(c);
// let A = new Set(a);
// let B = new Set(b);
// let C = new Set(c);
// console.log(C);

//? Intersection of Sets A n B
let A = new Set(a);
let B = new Set(b);
let c = a.filter((num) => B.has(num));
let C = new Set(c);
console.log(C);

//? Difference of sets A\B
