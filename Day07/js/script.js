// function printFullName() {
//   let firstName = 'Julio';
//   let lastName = 'Zampier';
//   let space = ' ';
//   let fullName = firstName + space + lastName;
//   return fullName;
// }
// console.log(printFullName());

// function areaOfCircle(r) {
//   let area = Math.PI * r ** 2;
//   return area.toFixed(1);
// }
// console.log(areaOfCircle(10));

// function sumTwoNumbers(n1, n2) {
//   let sum = n1 + n2;
//   return sum;
// }
// console.log(sumTwoNumbers(5, 3));

// //! Two parameters
// function printFullName(firstName, lastName) {
//   return `${firstName} ${lastName}`;
// }
// console.log(printFullName('Julio', 'Zampier'));

// //! many parameters
// const myArray = [1, 2, 3, 4, 5];
// function sumArrayValues(arr) {
//   let sum = 0;
//   for (const number of arr) {
//     sum += number;
//   }
//   return sum;
// }
// console.log(sumArrayValues(myArray));
//! unlimited parameters
// function sumAllNums() {
//   let sum = 0;
//   for (const item of arguments) {
//     sum += item;
//   }
//   return sum;
// }
// const arr = [1, 3, 4, 5, 6, 7];
// console.log(sumAllNums(...arr));

// function subtractionAllNums() {
//   let initialValue = arguments[0];
//   for (let i = 1; i < arguments.length; i++) {
//     initialValue -= arguments[i];
//   }
//   return initialValue;
// }
// console.log(subtractionAllNums(100, 50, 6, 5, 4));
//! unlimited parameters in arrow function
// const sumAllNums = (...numbers) => {
//   let sum = 0;
//   for (const num of numbers) {
//     sum += num;
//   }
//   return sum;
// };
// console.log(sumAllNums(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
// let testArr = [0, 10, 20, 30, 42]
// let testArr2 = [0, 10, 20, 30, 42]

// console.log(sumAllNums(...testArr,...testArr2));
//! Anonymous Function
// const anonymousFun = function () {
//   console.log(
//     'I am an anonymous function and my value is stored in anonymousFun'
//   );
// };
// anonymousFun()

//! Expression Functions
// const square = function (n) {
//   return n * n;
// };
// console.log(`TL ~ square(5)`, square(5))

//! Self Invoking Functions
// (function (parameters) {code})(5); // 4, but instead of just printing if we want to return and store the data, we do as shown below

// let squaredNum = (function (n) {
//   return n * n;
// })(100);

// console.log(squaredNum);
//! Arrow Function
// const multip = (n, m) => {
//   return n * m;
// };
// multip(2, 3);
// console.log(`TL ~ multip(2,3)`, multip(2, 3));

// const changeToUpp = (arr) => {
//   const newArr = [];
//   for (const element of arr) {
//     newArr.push(element.toUpperCase());
//   }
//   return newArr;
// };
// const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
// console.log(changeToUpp(countries));

// const changeToUpp = (a,b,...arr) => {
//   const newArr = [a,b];
//   for (const element of arr) {
//     newArr.push(element.toUpperCase());
//   }
//   return newArr;
// };

// console.log(changeToUpp('alemanha'));
//! When Arrow Function only has the RETURN statement
// const printFullName = (fName, lName) => `${fName} ${lName}`;
// console.log(printFullName('Julio', 'Zampier'));

//! Function with default parameters
// function generateFullName(fName = 'John', lName = 'Rambo') {
//   let space = ' ';
//   let fullName = fName + space + lName;
//   return fullName;
// }
// console.log(generateFullName('julio', 'zampier'));
// function calculateAge(birth, currentYear = 2023) {
//   return currentYear - birth;
// }
// console.log(`TL ~ calculateAge(2010)`, calculateAge(2010, 2020));
// console.log(`TL ~ calculateAge(2010)`, calculateAge(2010));

// const calculateAge = (birth, curYear = 2023) => {
//   return curYear - birth;
// };
// console.log(calculateAge(1981));
// console.log(calculateAge(1981, 2016));

// const weightOfObj = (mass, grav = 9.81) => {
//   return mass*grav+' N'
// };
// console.log(weightOfObj(500, 10));
// console.log(weightOfObj(500));
//todo Day07 EXERCISES
//1
