//Showing output on browser console
console.log('30 Days of JavaScript');

//Substitution
console.log('%d %s of JavaScript', 30, 'Days');
let day = 30;
let txt = 'Days';
console.log('%d %s of JavaScript', day, txt);

//CSS
//Styling
console.log(
  '%c30 Days of%c JavaScript',
  'color: red; font-size: 30px',
  'font-weight: bold'
);
console.log(
  '%c30 Days%c %cOf%c %cJavaScript%c',
  'color:green',
  '',
  'color:red',
  '',
  'color:yellow'
);
//? console.warn() , used to give warning on browser
console.warn('This is a warning');
console.warn(
  'You are using React. Do not touch the DOM. Virtual DOM will take care of handling the DOM!'
);
console.warn('Warning is different from error');

//? console.error() , used to give error on browser
console.error(
  'Esta eh uma mensagem de erro! Se voce esta lendo isso \
algo errado nao esta certo'
);

//? console.table() , used to display data in table format
const names = ['Kiko', 'Zinho', 'Branco', 'Lindo'];
console.log(names);
console.table(names);

const user = {
  name: 'Kemmel Pinto',
  title: 'Machanic',
  country: 'Brazil',
  city: 'São Paulo',
  workingPlace: 'Simas Turbo, repair station',
  age: 24,
};
console.table(user);

const countries = [
  ['Finland', 'Helsinki'],
  ['Germany', 'Berlin'],
  ['Spain', 'Madrid'],
];
console.table(countries);

const users = [
  {
    name: 'Kiko',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250,
  },
  {
    name: 'Zinho',
    title: 'Teacher',
    country: 'Sweden',
    city: 'London',
    age: 25,
  },
  {
    name: 'Branco',
    title: 'Instructor',
    country: 'Norway',
    city: 'Oslo',
    age: 22,
  },
  {
    name: 'Lindo',
    title: 'Developer',
    country: 'Denmark',
    city: 'Copenhagen',
    age: 28,
  },
];
console.table(users);

//? console.time() & console.timeEnd() , used to measure time
console.clear();

console.time('Regular for loop');
for (let i = 0; i < countries.length; i++) {
  console.log(countries[i][0], countries[i][1]);
}
console.timeEnd('Regular for loop');

console.time('For of loop');
for (const [name, city] of countries) {
  console.log(name, city);
}
console.timeEnd('For of loop');

console.time('forEach loop');
countries.forEach(([name, city]) => {
  console.log(name, city);
});
console.timeEnd('forEach loop');

//? console.info()
console.clear();
console.info(
  'Gostaria de mandar um abraço para o pessoal da mecanica Simas Turbo'
);

//? console.assert() Writes an error message to the console if the specified
//? condition evaluates to false.
console.clear();
console.assert(4 > 3, '4 is greater than 3');
console.assert(3 > 4, '3 is not greater than 4');

for (let i = 0; i <= 10; i += 1) {
  let errormessage = `${i} is not even`;
  console.log('the $ is ' + i);
  console.assert(i % 2 === 0, { number: i, errormessage: errormessage });
}

//? console.group() & console.groupEnd() , used to group log messages
console.clear();
console.group('Names');
console.log(names);
console.groupEnd();

console.group('Countries');
console.log(countries);
console.groupEnd();

console.group('Users');
console.log(user);
console.log(users);
console.groupEnd();

//? console.count() , used to count the number of times a particular log
console.clear();
const func = () => {
  console.count('A function has been called');
};
func();
func();
func();
func();

console.clear();
//! Exercises
//? Exercises:Level 1
// 1- Display the countries array as a table
console.table(countries);
// 2- Display the countries object as a table
console.table(user);
// 3- Use console.group() to group logs
console.group('Countries and User');
console.table(countries);
console.table(user);
console.groupEnd();
//? Exercises:Level 2
console.clear();
// 1- 10 > 2 * 10 use console.assert()
console.assert(10 > 2 * 10, '10 nao eh maior que 20');
// 2- Write a warning message using console.warn()
console.warn('Seu computador esta infectado com Jadson Virus');
// 3- Write an error message using console.error()
console.error('Seu computador deu pau devido ao Jadson Virus');
//? Exercises:Level 3
console.clear();
// 1- Check the speed difference among the following loops: while, for, for of, forEach
console.warn('while loop');
console.time('while loop');
let i = 0;
while (i < countries.length) {
  console.log(countries[i][0], countries[i][1]);
  i++;
}
console.timeEnd('while loop');

console.warn('for loop');
console.time('for loop');
for (let i = 0; i < countries.length; i++) {
  console.log(countries[i][0], countries[i][1]);
}
console.timeEnd('for loop');

console.warn('for of loop');
console.time('for of loop');
for (const [country, city] of countries) {
  console.log(country, city);
}
console.timeEnd('for of loop');

console.warn('forEach loop');
console.time('forEach loop');
countries.forEach(([country, city]) => {
  console.log(country, city);
});
console.timeEnd('forEach loop');
