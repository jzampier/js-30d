//string
localStorage.setItem('firstName', 'Nosdaj');
//number
localStorage.setItem('age', 1230);
//array of strings
let skills = ['HTML', 'CSS', 'JS', 'React'];
let skillsJSON = JSON.stringify(skills);
localStorage.setItem('skills', skillsJSON);
//array of objects
skills = [
  { tech: 'HTML', level: 10 },
  { tech: 'CSS', level: 9 },
  { tech: 'JS', level: 8 },
  { tech: 'React', level: 9 },
  { tech: 'Redux', level: 10 },
  { tech: 'Node', level: 8 },
  { tech: 'MongoDB', level: 8 },
];
skillsJSON = JSON.stringify(skills);
localStorage.setItem('skills', skillsJSON);

// Object
const user = {
  firstName: 'Nosdaj',
  age: 1254,
  skills: ['WoW', 'WeakAuras', 'AHTrading', 'Speaks Sindarin'],
};
const userJSON = JSON.stringify(user);
localStorage.setItem('user', userJSON);

console.log(localStorage);

//? Getting item from localStorage
//* syntax: localStorage.getItem('key')

let firstName = localStorage.getItem('firstName');
let age = localStorage.getItem('age');
let skillSet = localStorage.getItem('skills');
let skillObj = JSON.parse(skillSet);

console.log(firstName, age, skillObj);
localStorage.removeItem('firstName');
localStorage.removeItem('age');
localStorage.clear();

//! Exercises

const oCara = {
  firstname: 'Jadson',
  lastLame: 'The Oliver',
  age: '3033',
  country: 'Lhorien',
  city: 'Valfenda',
};
const oCaraTxt = JSON.stringify(oCara);
localStorage.setItem('oCara', oCaraTxt);
