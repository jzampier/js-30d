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
// let a = [1, 2, 3, 4, 5];
// let b = [3, 4, 5, 6];
// let c = [...a, ...b];
// console.log(c);
// let A = new Set(a);
// let B = new Set(b);
// let C = new Set(c);
// console.log(C);

//? Intersection of Sets A n B
// let A = new Set(a);
// let B = new Set(b);
// let c = a.filter((num) => B.has(num));
// let C = new Set(c);
// console.log(C);

//? Difference of sets A\B
// let A = new Set(a);
// let B = new Set(b);

// let c = a.filter((num)=> !B.has(num))
// let C = new Set(c);
// console.log(`LOG ~ C:`, C)

//! Maps -> Collection of key value pairs
//? Creating a map
// const map = new Map();
// console.log(`LOG ~ map:`, map)
//? Creating a map from array
// const countries = [
//   ['Finland', 'Helsinki'],
//   ['Sweden', 'Stockholm'],
//   ['Norway', 'Oslo'],
// ];
// const map = new Map(countries);
// console.log(`LOG ~ map:`, map);
// console.log(`LOG ~ map size:`, map.size);

//? Adding values to the Map .set
// const countriesMap = new Map();
// countriesMap.set('Finland', 'Helsinki');
// countriesMap.set('Sweden', 'Stockholm');
// countriesMap.set('Norway', 'Oslo');
// console.log(countriesMap.size);
// console.log(countriesMap);

//?  Getting values from the Map .get
// console.log(`Capital of Norway =>`, countriesMap.get('Norway'));

//? Checking if a key exists in the Map .has
// console.log(countriesMap.has('Finland'));

//? Getting all values from map using loop
// countriesMap.forEach((capital, country) =>
//   console.log(`Pais: ${country}, Capital: ${capital}`)
// );

//? Deleting values from the Map .delete`))
// console.log(countriesMap.delete('Norway'));
// console.log(countriesMap);

//! Exercises:
// Level 1
const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const countries = ['Finland', 'Sweden', 'Norway'];
// 1. Create an empty set
const newSet = new Set();

// 2. Create a set containing 0 to 10 using loop
for (let i = 0; i <= 10; i++) {
  newSet.add(i);
}
console.log(newSet);

// 3. Remove element from a set
console.log(newSet.delete(5));
console.log(newSet);

// 4. clear a set
console.log(newSet.clear());
console.log(newSet);

// 5. Create a set of 5 string elements from array
const arr = ['a', 'b', 'c', 'd', 'e'];
const setOfStrings = new Set(arr);
console.log(setOfStrings);

// 6. Create a map of countries and number of characters
const contries = ['Brazil', 'Argentina', 'Chile', 'Uruguay', 'Peru'];
const countriesAndChars = contries.map((country) => [country, country.length]);
console.log(countriesAndChars);
const countriesMap = new Map(countriesAndChars);
console.log(`LOG ~ countriesMap:`, countriesMap);
