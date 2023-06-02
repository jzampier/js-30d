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
