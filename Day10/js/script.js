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
const countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo'],
];
const map = new Map(countries);
console.log(`LOG ~ map:`, map);
console.log(`LOG ~ map size:`, map.size);

//? Adding values to the Map .set
const countriesMap = new Map();
countriesMap.set('Finland', 'Helsinki');
countriesMap.set('Sweden', 'Stockholm');
countriesMap.set('Norway', 'Oslo');
console.log(countriesMap.size);
console.log(countriesMap);

//?  Getting values from the Map .get
console.log(`Capital of Norway =>`, countriesMap.get('Norway'));

//? Checking if a key exists in the Map .has
console.log(countriesMap.has('Finland'));

//? Getting all values from map using loop
countriesMap.forEach((capital, country) =>
  console.log(`Pais: ${country}, Capital: ${capital}`)
);

//? Deleting values from the Map .delete`))
console.log(countriesMap.delete('Norway'));
console.log(countriesMap);
