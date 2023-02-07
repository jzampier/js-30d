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
// function fullName() {
//   let fName = 'Julio';
//   let lName = 'Zampier';
//   let space = ' ';
//   return fName + space + lName;
// }
// console.log(fullName())

//2
// function fullName(fName, lName){
//   return `${fName} ${lName}`
// }
// console.log(fullName('Julio','Zampier'))

//3
// function addNumbers(a,b){
//   return a+b
// }
// console.log(addNumbers(10,25));

//4
// function areaOfRectangle(l, w) {
//   return l * w + ' m2';
// }
// console.log(areaOfRectangle(5, 3));

//5
// function perimeterOfRectangle(l, w) {
//   return 2 * (l + w) + ' m';
// }
// console.log(perimeterOfRectangle(5, 3));

// //6
// function volumeOfRectPrism(length, width, height) {
//   return length * width * height + ' m3';
// }
// console.log(`TL ~ volumeOfRectPrism`, volumeOfRectPrism(5, 3, 6));

// //7
// function areaOfCircle(radius) {
//   return Math.PI.toFixed(2) * radius ** 2 + ' m2';
// }
// console.log(areaOfCircle(10));

// //8
// function circumOfCircle(radius) {
//   return (Math.PI * 2 * radius).toFixed(2) + ' m';
// }
// console.log(circumOfCircle(10));

// //9
// function density(mass, volume) {
//   return (mass / volume).toFixed(1) + ' g/cm3';
// }
// console.log(density(100, 16));

// //10
// function speed(distance, time) {
//   let speed = (distance / time).toFixed(2) + ' m/s';
//   return speed;
// }
// console.log(speed(100, 12));

// //11
// function weight(mass, gravity = 9.81) {
//   let weight = mass * gravity + ' N';
//   return weight;
// }
// console.log(weight(1000));

// //12
// function convertCelsiusToFahrenheit(tempInCelsius) {
//   let cToF = tempInCelsius * (9 / 5) + 32 + ' F';
//   return cToF;
// }
// console.log(convertCelsiusToFahrenheit(43));

// //13
// function bodyMassIndex(weight, height) {
//   let bmi = (weight / height ** 2).toFixed(1);
//   switch (true) {
//     case bmi >= 30:
//       return `BMI = ${bmi} kg/m2 , Obese`;
//     case bmi >= 25:
//       return `BMI = ${bmi} kg/m2 , Overweight`;
//     case bmi >= 18.5:
//       return `BMI = ${bmi} kg/m2 , Normal Weight`;
//     default:
//       return `BMI = ${bmi} kg/m2 , Underweight`;
//   }
// }
// console.log(bodyMassIndex(88, 1.72));

// //14
// function checkSeason(month) {
//   console.log(month.toLowerCase());
//   switch (true) {
//     case ['december', 'january', 'february'].includes(month.toLowerCase()):
//       return 'Winter';
//     case ['march', 'april', 'may'].includes(month.toLowerCase()):
//       return 'Spring';
//     case ['june', 'july', 'august'].includes(month.toLowerCase()):
//       return 'Summer';
//     case ['september', 'october', 'november'].includes(month.toLowerCase()):
//       return 'Autumn';
//     default:
//       return 'Type a correctly month name';
//   }
// }
// console.log(checkSeason('August'));

// //15
// function findMax(a, b, c) {
//   let max = a;
//   if (max < b) {
//     max = b;
//   }
//   if (max < c) {
//     max = c;
//   }
//   return max;
// }
// console.log(findMax(1000, 20000, -100000000));

//todo Exercises Level2
// //1
// function solveLinEquation(a, b, c) {
//   let y = `${-a / b}x + ${-c / b}`;
//   return y;
// }
// console.log(solveLinEquation(3, -4, 5));

// //2 ax2 + bx + c = 0
// function solveQuadEquation(a = 0, b = 0, c = 0) {
//   console.log(`(${a})x2 + (${b})x + (${c}) = 0`);
//   if (a == 0 && b == 0 && c == 0) {
//     return `{0}`;
//   }
//   let delta = b ** 2 - 4 * (a * c);
//   let x1 = (-b + Math.sqrt(delta)) / (2 * a);
//   let x2 = (-b - Math.sqrt(delta)) / (2 * a);
//   if (delta != 0) {
//     return `{${x1}, ${x2}}`;
//   } else {
//     return `{${x1}}`;
//   }
// }
// console.log(solveQuadEquation(1, 7, 12));

// //3
// function printArray(arr) {
//   for (const element of arr) {
//     console.log(element);
//   }
// }
// const arrayTest = [100, 20, 30, 42, 21, 59];
// printArray(arrayTest);

// //4
// function showDateTime() {
//   let now = new Date();
//   let month = String(now.getMonth() + 1);
//   let date = String(now.getDate());
//   let year = String(now.getFullYear());
//   let hour = String(now.getHours());
//   let minutes = String(now.getMinutes());
//   month.length == 1 ? (month = `0${month}`) : (month = month);
//   date.length == 1 ? (date = `0${date}`) : (date = date);
//   hour.length == 1 ? (hour = `0${hour}`) : (hour = hour);
//   minutes.length == 1 ? (minutes = `0${minutes}`) : (minutes = minutes);
//   console.log(`${month}/${date}/${year} ${hour}:${minutes}`);
// }
// showDateTime();

// //5
// function swapValues(a, b) {
//   let swap = a;
//   a = b;
//   b = swap;
//   return `a => ${a}, b => ${b}`;
// }
// console.log(swapValues(3,4))

//6
// function reverseArray(arr) {
//   const reversed = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     reversed.push(arr[i]);
//   }
//   return reversed;
// }
// const arrTest = ['A', 'B', 'C'];
// console.log(reverseArray(arrTest));

// //7
// function capitalizeArray(arr) {
//   const capitalizedarray = [];
//   for (const element of arr) {
//     capitalizedarray.push(element.toUpperCase());
//   }
//   return capitalizedarray;
// }
// console.log(capitalizeArray(['Rodolpho', 'Marcelo', 'Jao']));

// //8
// function addItem(item) {
//   const arrayOfItems = [];
//   arrayOfItems.push(item);
//   return arrayOfItems;
// }
// console.log(addItem('feijao'));

// //9
// const arrayOfItems = ['item1', 'item2', 'item3', 'item4', 'item5'];
// function removeItem(index, array) {
//   array.splice(index, 1);
//   return array;
// }
// console.log(removeItem(2, arrayOfItems));

// //10
// function sumOfNumbers(number) {
//   let sum = 0;
//   if (number > 0) {
//     for (let i = 0; i <= number; i++) {
//       sum += i;
//     }
//     return `sum of numbers between 0 and ${number} = ${sum}`;
//   } else {
//     for (let i = number; i <= 0; i++) {
//       sum += i;
//     }
//     return `sum of numbers between ${number} and 0 = ${sum}`;
//   }
// }
// console.log(sumOfNumbers(-10))

//11
// function sumOfOdds(number) {
//   let sum = 0;
//   if (number > 0) {
//     for (let i = 0; i <= number; i++) {
//       if (i % 2 != 0) {
//         sum += i;
//       }
//     }
//   } else {
//     for (let i = number; i <= 0; i++) {
//       if (i % 2 != 0) {
//         sum += i;
//       }
//     }
//   }
//   return `Sum of all odd numbers between 0 and ${number} = ${sum}`;
// }
// console.log(sumOfOdds(100));

// //12
// const sumOfEven = (number) => {
//   let sum = 0;
//   if (number > 0) {
//     for (let i = 0; i <= number; i++) {
//       if (i % 2 == 0) {
//         sum += i;
//       }
//     }
//   } else {
//     for (let i = number; i <= 0; i++) {
//       if (i % 2 == 0) {
//         sum += i;
//       }
//     }
//   }
//   return `Sum of all even numbers between 0 and ${number} = ${sum}`;
// };
// console.log(sumOfEven(-15));

// //13
// const evensAndOdds = (posNumber) => {
//   let odds = 0;
//   let evens = 0;
//   for (let i = 0; i <= posNumber; i++) {
//     if (i % 2 != 0) {
//       odds++;
//     } else {
//       evens++;
//     }
//   }
//   console.log(`The number of odds are ${odds}`);
//   console.log(`The number of evens are ${evens}`);
// };
// evensAndOdds(100);

//14
// const sumOfArgs = (...args) =>{
//   let sum = 0
//   for (const number of args) {
//     sum += number
//   }
//   return sum
// }
// function sumOfArgs() {
//   let sum = 0;
//   for (const number of arguments) {
//     sum += number;
//   }
//   return sum;
// }
// console.log(sumOfArgs(1, 2, 3, 4, 5));

//15
// function randomUserIp() {
//   let r1 = Math.floor(Math.random() * 224);
//   let r2 = Math.floor(Math.random() * 256);
//   let r3 = Math.floor(Math.random() * 256);
//   let r4 = Math.floor(Math.random() * 256);
//   return `IP: ${r1}.${r2}.${r3}.${r4}`;
// }
// console.log(randomUserIp());

//16
// function randomMacAddress() {
//   let hexa = '0123456789ABCDEF';
//   let randomHexa = '';
//   for (let i = 0; i < 6; i++) {
//     randomHexa += hexa[Math.floor(Math.random() * 16)];
//     randomHexa += hexa[Math.floor(Math.random() * 16)];
//     randomHexa += '-';
//   }
//   console.log(randomHexa.length);
//   return randomHexa.slice(0, 17);
// }
// console.log(randomMacAddress());
// Math.floor(Math.random() * (max - min + 1)) + min;

//17
// function randomHexaDecimalNumberGenerator() {
//   let hexDict = '0123456789abcdef';
//   let hexString = '#';
//   for (let i = 0; i < 6; i++) {
//     hexString += hexDict[Math.floor(Math.random() * 16)];
//   }
//   return hexString;
// }
// console.log(randomHexaDecimalNumberGenerator());

//18
// function userIdGenerator() {
//   let charsDict =
//     '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
//   let id = '';
//   for (let i = 0; i < 7; i++) {
//     id += charsDict[Math.floor(Math.random() * 62)];
//   }
//   return id;
// }
// console.log(userIdGenerator());

//todo Exercises Lvl 3
//1
// function userIdGeneratedByUser() {
//   let numChars = Number(prompt('Number of characters: '));
//   let numIds = Number(prompt(`Number of ID's: `));
//   let charsDict =
//     '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
//   let result = '';
//   for (let j = 0; j < numIds; j++) {
//     let id = '';
//     for (let i = 0; i < numChars; i++) {
//       id += charsDict[Math.floor(Math.random() * 62)];
//     }
//     result = result.concat(id, '\n');
//   }
//   console.log(result);
// }
// userIdGeneratedByUser();

//2
// const rgbColorGenerator = () => {
//   let r = Math.floor(Math.random() * 256);
//   let g = Math.floor(Math.random() * 256);
//   let b = Math.floor(Math.random() * 256);
//   console.log(`rgb(${r},${g},${b})`);
// };
// rgbColorGenerator();

//3
// const arrayOfHexaColors = (n) => {
//   let hexdict = '0123456789abcdef';
//   const arrayOfColors = [];
//   for (let j = 0; j < n; j++) {
//     let hexColor = '#';
//     for (let i = 0; i < 6; i++) {
//       hexColor += hexdict[Math.floor(Math.random() * 16)];
//     }
//     arrayOfColors.push(hexColor);
//     hexColor = '#';
//   }
//   return arrayOfColors;
// };
// console.log(arrayOfHexaColors(5));

//4
// const arrayOfRgbColors = (n) => {
//   const arrayOfRgbColors = [];
//   let r = Math.floor(Math.random() * 256);
//   let g = Math.floor(Math.random() * 256);
//   let b = Math.floor(Math.random() * 256);
//   for (let i = 0; i < n; i++) {
//     arrayOfRgbColors.push(`rgb(${r},${g},${b})`);
//   }
//   return arrayOfRgbColors;
// };
// console.log(arrayOfRgbColors(5));

//5
// const convertHexaToRgb = (hexaColor) => {
//   const hexaDict = '0123456789abcdef';
//   //eliminate #
//   let rgbcolor = hexaColor.slice(1);
//   const arrgbcolor = [];
//   const newArr = [];
//   //find the correspondent decimal value for each hexa character stored in rgbcolor
//   for (let i = 0; i < rgbcolor.length; i++) {
//     arrgbcolor.push(hexaDict.indexOf(rgbcolor[i]));
//   }
//   //apply the multiply factor (16) for each even index(start on 0) 'a'f 'd'1 '7'3
//   for (let i = 0; i < arrgbcolor.length; i++) {
//     if (i % 2 == 0) {
//       newArr.push(arrgbcolor[i] * 16);
//     } else {
//       newArr.push(arrgbcolor[i]);
//     }
//   }
//   let r = newArr[0] + newArr[1];
//   let g = newArr[2] + newArr[3];
//   let b = newArr[4] + newArr[5];
//   return `rgb(${r},${g},${b})`;
// };
// console.log(convertHexaToRgb('#10cad0'));

// const hex2rgb = (hex) => {
//   const r = parseInt(hex.slice(1, 3), 16);
//   const g = parseInt(hex.slice(3, 5), 16);
//   const b = parseInt(hex.slice(5, 7), 16);

//   // return {r, g, b}
//   return { r, g, b };
// };
// console.log(hex2rgb('#10cad0'));

//06
// const convertRgbToHexa = (rgbColor) => {
//   const rgb2number = [];
//   for (const element of rgbColor.split(',')) {
//     let pusher = Number(element).toString(16);
//     if (pusher.length == 1) {
//       rgb2number.push('0' + pusher);
//     } else {
//       rgb2number.push(pusher);
//     }
//   }
//   let hexColor = `#${rgb2number[0]}${rgb2number[1]}${rgb2number[2]}`;
//   return hexColor;
// };

// console.log(convertRgbToHexa('250,30,90'));

//07
// function generateColors(colorType, colorAmount) {
//   const colorArray = [];
//   if (colorType == 'hexa') {
//     for (let i = 0; i < colorAmount; i++) {
//       let a = Math.floor(Math.random() * 256).toString(16);
//       if (a.length == 1) {
//         a = '0' + a;
//       }
//       let b = Math.floor(Math.random() * 256).toString(16);
//       if (b.length == 1) {
//         b = '0' + b;
//       }
//       let c = Math.floor(Math.random() * 256).toString(16);
//       if (c.length == 1) {
//         c = '0' + c;
//       }
//       colorArray.push(`#${a}${b}${c}`);
//     }
//   } else if (colorType == 'rgb') {
//     for (let i = 0; i < colorAmount; i++) {
//       let r = Math.floor(Math.random() * 256);
//       let g = Math.floor(Math.random() * 256);
//       let b = Math.floor(Math.random() * 256);
//       colorArray.push(`rgb(${r},${g},${b})`);
//     }
//   } else {
//     console.log('Enter the correct color type (hexa or rgb');
//   }
//   return colorArray;
// }
// console.log(generateColors('hexa', 3));

//08
// function shuffleArray(arr) {
//   let currInd = arr.length,
//     randInd;
//   while (currInd != 0) {
//     randInd = Math.floor(Math.random() * currInd);
//     currInd--;

//     [arr[currInd], arr[randInd]] = [arr[randInd], arr[currInd]];
//   }
//   return arr;
// }
// const arr = ['a', 'b', 'c', 'd'];
// console.table(arr)
// console.log(shuffleArray(arr))

//09
// const fatorial = (num) => {
//   let fat = 1;
//   for (let i = num; i > 1; i--) {
//     fat *= i;
//   }
//   return fat;
// };
// console.log(fatorial(6));

//10
// const isEmpty = (par)=>{
//   console.log(typeof par);
//   par == undefined? console.log('Parameter is empty'):console.log('ok');;
// }
// isEmpty()

//11
// function sum(){
//   let sum = 0
//   for (const argument of arguments) {
//     sum += argument
//   }
//   return sum
// }
// console.log(sum(5,6,7))

// const sum = (...args)=>{
//   let sum=0
//   for(const argument of args){
//     sum+=argument
//   }
//   return sum
// }
// console.log(sum(4,5,6));

//12
// const sumOfArrayItems = (arr) => {
//   let sum = 0;
//   const numbers = [];
//   for (const element of arr) {
//     if (typeof element == 'number') {
//       sum += element;
//       numbers.push(element);
//     }
//   }
//   if (arr.length == numbers.length) {
//     return sum;
//   } else {
//     return 'There are non numbers in your array';
//   }
// };
// console.log(sumOfArrayItems([1, 2, 10, 3]));

//13
// function average(arr) {
//   let sum = 0;
//   const onlyNumbers = [];
//   for (const element of arr) {
//     if (typeof element == 'number') {
//       sum += element;
//       onlyNumbers.push(element);
//     }
//   }
//   if (arr.length == onlyNumbers.length) {
//     return sum / arr.length;
//   } else {
//     return 'There are non numbers in your array';
//   }
// }

// console.log(average([5, 5, 5, 1, 3, 4, 5, 6, 1111, 'a']));

//14
// const modifyArray = (arr) => {
//   if (arr.length < 5) {
//     return 'Item not found';
//   } else {
//     arr[4] = arr[4].toUpperCase();
//     return arr;
//   }
// };
// console.log(modifyArray(['Google', 'Facebook', 'Apple', 'Amazon']));

//15
// const isPrime = (num) => {
//   const factorsOfnum = [];
//   for (let i = 1; i <= num; i++) {
//     if (num % i == 0) {
//       factorsOfnum.push(i);
//     }
//   }
//   if (factorsOfnum.length == 2) {
//     return `${num} is a prime number`;
//   } else {
//     return `${num} is not a prime number`;
//   }
// };
// console.log(isPrime(6));
//15.b
// const isPrime = (num) => {
//   if (num === 1) {
//     return `${num} is not a prime number`;
//   } else if (num === 2) {
//     return `${num} is a prime number`;
//   } else {
//     for (let i = 2; i < num; i++) {
//       if (num % i == 0) {
//         return `${num} is not a prime number`;
//       } else {
//         return `${num} is a prime number`;
//       }
//     }
//   }
// };
// console.log(isPrime(101));

//16
// function isUnique(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       console.log('i'+i,'j'+j);
//       if (arr[i] == arr[j]) {
//         return 'Not unique';
//       } else {
//       }
//     }
//   }
//   return 'Unique';
// }
// console.log(isUnique([1,2,3,4,6,6]));
// 17
// function isSameDataType(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (typeof arr[i] != typeof arr[j]) {
//         return 'Array has different datatypes';
//       }
//     }
//   }
//   return 'Array has the same datatype';
// }
// console.log(isSameDataType(['sfsfs', 'b', 'a']));

//18
// function isValidVariable(varName) {
//   let validate = varName.match(/[^A-Za-z0-9$_]/gi);
//   if (validate == null) {
//     return `${varName} is valid`;
//   } else {
//     return `${varName} is not valid`;
//   }
// }
// console.log(isValidVariable('af_dsaf$'));

//19
// const sevenUniques = () => {
//   const arr = [];
//   let n0 = Math.floor(Math.random() * 10);
//   arr.push(n0);
//   for (let i = 1; i < 7; i++) {
//     let numer = Math.floor(Math.random() * 10);
//     while (arr.includes(numer)) {
//       numer = Math.floor(Math.random() * 10);
//     }
//     arr.push(numer);
//   }
//   return arr;
// };
// console.log(sevenUniques());

//20
const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland'];
const reverseCountries = (arr) => {
  const reversedArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
  }
  return reversedArr;
};
console.log(reverseCountries(countries));
