//! Window Global Object
// a = 'JavaScript'; // declaring a variable without let or const make it available in window object and this found anywhere
// b = 10; // this is a global scope variable and found in the window object
// function letsLearnScope() {
//   console.log(a, b);
//   if (true) {
//     console.log(a, b);
//   }
// }
// console.log(a, b);
// letsLearnScope();

//! Global Scope
// let a = 'JavaScript' // is a global scope it will be found anywhere in this file
// let b = 10 // is a global scope it will be found anywhere in this file
// function letsLearnScope() {
//   console.log(a, b) // JavaScript 10, accessible
//   if (true) {
//     let a = 'Python'
//     let b = 100
//     console.log(a, b) // Python 100
//   }
//   console.log(a, b)
// }
// letsLearnScope()
// console.log(a, b) // JavaScript 10, accessible

//! Local scope
//scope.js
// let a = 'JavaScript' // is a global scope it will be found anywhere in this file
// let b = 10 // is a global scope it will be found anywhere in this file
// // Function scope
// function letsLearnScope() {
//   console.log(a, b) // JavaScript 10, accessible
//   let value = false
// // block scope
//   if (true) {
//     // we can access from the function and outside the function but
//     // variables declared inside the if will not be accessed outside the if block
//     let a = 'Python'
//     let b = 20
//     let c = 30
//     let d = 40
//     value = !value
//     console.log(a, b, c, value) // Python 20 30 true
//   }
//   // we can not access c because c's scope is only the if block
//   console.log(a, b, value) // JavaScript 10 true
// }
// letsLearnScope()
// console.log(a, b) // JavaScript 10, accessible

//scope.js
// function letsLearnScope() {
//   var gravity = 9.81
//   console.log(gravity)

// }
// // console.log(gravity), Uncaught ReferenceError: gravity is not defined

// if (true){
//   var gravity = 9.81
//   console.log(gravity) // 9.81
// }
// console.log(gravity)  // 9.81

// for(var i = 0; i < 3; i++){
//   console.log(i) // 0, 1, 2
// }

//scope.js
// function letsLearnScope() {
//   // you can use let or const, but gravity is constant I prefer to use const
//   const gravity = 9.81
//   console.log(gravity)

// }
//console.log(gravity), Uncaught ReferenceError: gravity is not defined

//!Creating Object
// const person = {};

//!Creating Object with values
// const rectangle = {
//   length: 20,
//   width: 20,
// };
// console.log(rectangle);

// const person = {
//   firstName: 'Julio',
//   lastName: 'Zampier',
//   age: 41,
//   country: 'Brazil',
//   city: 'Macae',
//   skills: ['HTML', 'CSS', 'JavaScript', 'Python', 'PostgreSQL'],
//   isMarried: false,
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   'Phone Number': '+5511912545867',
// };
// console.log(person);

// console.log(person.getFullName());
// person.lastName = 'Gladson';
// console.log(person.getFullName());

//!Setting new Keys for object
// const person = {
//   firstName: 'Asabeneh',
//   lastName: 'Yetayeh',
//   age: 250,
//   country: 'Finland',
//   city: 'Helsinki',
//   skills: [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Node',
//     'MongoDB',
//     'Python',
//     'D3.js',
//   ],
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };
// console.log(person);
// person.nationality = 'Ethiopian';
// person.country = 'Azerbajan';
// person.title = 'teacher';
// person.skills.push('Meteor');
// person.skills.push('Sass');
// person.isMarried = true;

// person.getPersonInfo = function () {
//   let skillsWithoutLastSkill = this.skills
//     .splice(0, this.skills.length - 1)
//     .join(', ');
//   let lastSkill = this.skills.splice(this.skills.length - 1)[0];
//   let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`;
//   let fullName = this.getFullName();
//   let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`;
//   return statement;
// };
// console.log(person);
// console.log(person.getPersonInfo());

//! Object Methods
//? Object.assign -> copy without modifying the original object
// const person = {
//   firstName: 'Asabeneh',
//   age: 250,
//   country: 'Finland',
//   city: 'Helsinki',
//   skills: ['HTML', 'CSS', 'JS'],
//   title: 'teacher',
//   address: {
//     street: 'Heitamienkatu 16',
//     pobox: 2002,
//     city: 'Helsinki',
//   },
//   getPersonInfo: function () {
//     return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`;
//   },
// };

// const copyPerson = Object.assign({}, person);
// console.log(copyPerson);

// //!Getting object keys -> Object.keys() -> as array
// const keys = Object.keys(copyPerson);
// console.log(keys);
// const address = Object.keys(copyPerson.address); //object inside of an object
// console.log(address);

// //!Getting object values -> Object.values()  -> as array
// const values = Object.values(copyPerson)
// console.log(values);

// //! Keys + Values -> Object.entries()
// const entries = Object.entries(copyPerson)
// console.log(entries);

// //! Check properties hasOwnProperty()
// console.log(copyPerson.hasOwnProperty('firstName')) //true
// console.log(copyPerson.hasOwnProperty('score')) //false
