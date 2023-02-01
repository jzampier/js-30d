//!Arrays
// const numbers = [0, 3.14, 9.81, 37, 98.6, 100];
// const fruits = ['banana', 'laranja', 'mamao'];
// const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'];
// const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'];
// const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongoDB'];
// const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'];

// console.log(`Numbers: >> ${numbers}`);
// console.log(`Numbers of numbers: >> ${numbers.length}`);

// console.log(`Fruits: >> ${fruits}`);
// console.log(`Number of fruits: >> ${fruits.length}`);

// console.log(`vegetables: >> ${vegetables}`);
// console.log(`Number of vegetables: >> ${vegetables.length}`);

// console.log(`animalProducts: >> ${animalProducts}`);
// console.log(`number of animalProducts: >> ${animalProducts.length}`);

// console.log(`webTechs: >> ${webTechs}`);
// console.log(`Number of webTechs: >> ${webTechs.length}`);

// console.log(`countries: >> ${countries}`);
// console.log(`Numbers of countries: >> ${countries.length}`);

//!Arrays can have different datatypes
// const arr = [
//   'Asabeneh',
//   250,
//   true,
//   { country: 'Finland', city: 'Helsinki' },
//   { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }
// ] // arr containing different data types
// console.log(arr)

//!Creating an array with split()

// let js = 'JavaScript';
// const charsInJavaScript = js.split('');
// console.log(`charsInJavaScript`, charsInJavaScript);

// let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
// const companies = companiesString.split(', ');
// console.log(`companies`, companies);

// let txt =
//   'I love teaching and empowering people. I teach HTML, CSS, JS, \
// React, Python.';
// const words = txt.split(' ')
// console.log(`words`, words)

// !Acessing array items using index

//const fruits = ['banana', 'orange', 'mango', 'lemon'];
// let firstFruit = fruits[0]
// console.log(`TL ~ firstFruit`, firstFruit)
// let secondFruit = fruits[1]
// console.log(`TL ~ secondFruit`, secondFruit)
// let lastFruit = fruits[fruits.length-1]
// console.log(`TL ~ lastFruit`, lastFruit)

//! Modifying array element
// const numbers =[1, 2, 3, 4, 5]
// numbers[0]=10
// numbers[1] = 10+10
// console.log(`TL ~ numbers`, numbers)

// const countries = [
//   'Albania',
//   'Bolivia',
//   'Canada',
//   'Denmark',
//   'Ethiopia',
//   'Finland',
//   'Germany',
//   'Hungary',
//   'Ireland',
//   'Japan',
//   'Kenya'
// ]
// countries[0] = 'Brazilistan'
// countries[countries.length-1] = 'YadsonWitor'
// console.log(`TL ~ countries`, countries)

//!Methods to manipulate array
//? Array()
// const arr = Array();
// console.log(`TL ~ arr`, arr);
// const eightValues = Array(8);
// console.log(`TL ~ eightValues`, eightValues);

// //? fill()  fill all elements with static value
// eightValues.fill();
// console.log(`TL ~ eightValues`, eightValues);

// //? concat() concats arrays 1stArray.concat(2nd)
// const firstList = [1, 2, 3];
// const secondList = [4, 5, 6];
// const thirdList = firstList.concat(secondList);
// console.log(`TL ~ thirdList`, thirdList);
// const fourthList = thirdList.concat(firstList, secondList, secondList);
// console.log(`TL ~ fourthList`, fourthList);

// //? .length
// console.log('fourthList :>> ', fourthList.length);

// //? .indexOf(n) get the index
// const residences = ['apartment', 'house', 'loft', 'hotel'];
// console.log(`TL ~ residences`, residences.indexOf('loft'));
// console.log(`TL ~ residences`, residences.indexOf('casa')); //-1 means doesn't exist
//? using .indexOf() to check if element is in array
// const fruits = ['banana', 'orange', 'mango', 'lemon'];
// let fruit = 'orange';
// let index = fruits.indexOf(fruit);

// index === -1
//   ? console.log(`${fruit} does not exist in the array "fruits"`)
//   : console.log(`${fruit} does exist in the array "fruits"`);

// //? .lastIndexOf(n) returns the last index of an element occurrence -1 means does not exist
// const numbers = [1, 2, 3, 4, 5, 3, 1, 2];
// console.log('numbers.lastIndexOf(3) :>> ', numbers.lastIndexOf(3));
// console.log('numbers.lastIndexOf(1) :>> ', numbers.lastIndexOf(1));
// console.log('numbers.lastIndexOf(0) :>> ', numbers.lastIndexOf(0));

// //? .includes() verifies if element exists in the array (returns true or false)
// const webTechs = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'React',
//   'Redux',
//   'Node',
//   'MongoDB',
// ];
// console.log(webTechs.includes('Node')); //true
// console.log(webTechs.includes('node')); //false
// console.log(webTechs.includes('NodeJS')); //false
// console.log(webTechs.includes('React')); //true

// //? Array.isArray(array) verifies if the object is an array or not
// const text = 'Hello World!'
// console.log(Array.isArray(webTechs));//true
// console.log(Array.isArray(text));//false

//? .toString() Convert to string
// const numbers = [0, 1, 2, 3, 4, 5];
// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

// const numbersToString = numbers.toString()
// console.log(`TL ~ numbersToString`, numbersToString)
// const namesToString = names.toString()
// console.log(`TL ~ namesToString`, namesToString)

// //? .join()
// console.log(numbers.join(' e '));
// let joined = numbers.join(' e ') // returns a string
// console.log('typeof joined :>> ', typeof joined);
// console.log(`TL ~ joined`, joined)

//? .slice(startPosition, endingPosition) extract this range from array
// const slicedNumbers1 = numbers.slice(); // all items
// const slicedNumbers2 = numbers.slice(0); // all items
// const slicedNumbers3 = numbers.slice(2, numbers.length); //from numbers[2] up the end
// const slicedNumbers4 = numbers.slice(1, 3); // from numbers[1] up to numbers[3] not included
// console.log(`TL ~ slicedNumbers1`, slicedNumbers1);
// console.log(`TL ~ slicedNumbers2`, slicedNumbers2);
// console.log(`TL ~ slicedNumbers3`, slicedNumbers3);
// console.log(`TL ~ slicedNumbers4`, slicedNumbers4);
//? .splice(1p, 2p, 3rdparam) removes elements from the array and can insert elements on their places
// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// // const splicedNumbers = numbers.splice(0) // remove all
// // console.log(`TL ~ splicedNumbers`, splicedNumbers)
// const splicedNumbers1 = numbers.splice(0,5,20,21,22,23,24)
// console.log(`TL ~ numbers`, numbers)
// console.log(`TL ~ splicedNumbers1`, splicedNumbers1)
//? .push() add elements to an array
// const arr  = ['item1', 'item2','item3']
// const newItems = ['cebola', 'tomate', 'azeitona']
// console.log(`TL ~ arr`, arr)
// arr.push('item new')
// console.log(`TL ~ arr`, arr)
// arr.push('item new','new item 2')
// console.log(`TL ~ arr`, arr)
// arr.push(newItems) // pushes the array not the items
// console.log(`TL ~ arr`, arr)
//? .pop() remove the last element from an array
// const numbers = [1, 2, 3, 4, 5];
// console.log(`TL ~ numbers`, numbers);
// numbers.pop();
// console.log(`TL ~ numbers`, numbers);
//? .shift() remove from the beginning
// const numbers = [1, 2, 3, 4, 5];
// console.log(`TL ~ numbers`, numbers);
// numbers.shift();
// console.log(`TL ~ numbers`, numbers);
// numbers.shift();
// console.log(`TL ~ numbers`, numbers);
//? .unshift() add element to beginning
// numbers.unshift(0, 1, 2);
// numbers.unshift(-3, -2, -1);
// console.log(`TL ~ numbers`, numbers);
//? .reverse() reverts the array order
// numbers.reverse()
// console.log(`TL ~ numbers`, numbers)
//? .sort()
// const webTechs = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'React',
//   'Redux',
//   'Node',
//   'MongoDB'
// ]
// console.log(`TL ~ webTechs`, webTechs)
// webTechs.sort()
// console.log(`TL ~ webTechs`, webTechs)
// webTechs.sort().reverse() //can be combined with reverse
// console.log(`TL ~ webTechs`, webTechs)

//? Array of arrays
// const firstNums = [1,2,3]
// console.log(`TL ~ firstNums`, firstNums)
// const secondNums = [1, 4, 9]
// console.log(`TL ~ secondNums`, secondNums)
// const arrayOfArray = []
// console.log(`TL ~ arrayOfArray`, arrayOfArray)
// arrayOfArray.push(firstNums)
// arrayOfArray.push(secondNums)
// console.log(`TL ~ arrayOfArray`, arrayOfArray)

// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// frontEnd.sort()
// const backEnd = ['Node','Express', 'MongoDB']
// backEnd.sort()
// const fullstack = [frontEnd, backEnd]
// console.log(`TL ~ fullstack`, fullstack)

//!Exercises
// 1
// const arr = new Array();
// console.log(`TL ~ arr`, arr);
// const arr2 = [0,1,2,3,4,5,6]
// console.log(`TL ~ arr2`, arr2)
// console.log(arr2.length)
// //4 Get first itemm middle and last
// let firstItem = arr2[0]
// console.log(`TL ~ firstItem`, firstItem)
// let lastItem = arr2[arr2.length-1]
// console.log(`TL ~ lastItem`, lastItem)
// let middleIndex = (arr2.length-1)/2
// console.log(arr2[middleIndex])

//5
// const mixedDataTypes = [1, false, [0, 1, 2, 3], 'Ola mondo!'];
// console.log('mixedDataTypes :>> ', mixedDataTypes.length);

// let itCompanies = [
//   'Facebook',
//   'Google',
//   'Microsoft',
//   'Apple',
//   'IBM',
//   'Oracle',
//   'Amazon',
// ];
// console.log(`TL ~ itCompanies`, itCompanies);
// console.log(itCompanies.length);
// let firstItem = itCompanies[0];
// let middleitem = itCompanies[Math.floor((itCompanies.length - 1) / 2)];
// let lastItem = itCompanies[itCompanies.length - 1];
// console.log(
//   `First item : ${firstItem}, Middle item: ${middleitem}, Last Item: ${lastItem}`
// );
// //10
// console.log(itCompanies[0]);
// console.log(itCompanies[1]);
// console.log(itCompanies[2]);
// console.log(itCompanies[3]);
// console.log(itCompanies[4]);
// console.log(itCompanies[5]);
// console.log(itCompanies[6]);

//11
// itCompanies[0] = itCompanies[0].toUpperCase()
// console.log(`TL ~ itCompanies[0]`, itCompanies[0])
// itCompanies[1] = itCompanies[1].toUpperCase()
// console.log(`TL ~ itCompanies[1]`, itCompanies[1])
// itCompanies[2] = itCompanies[2].toUpperCase()
// console.log(`TL ~ itCompanies[2]`, itCompanies[2])
// itCompanies[3] = itCompanies[3].toUpperCase()
// console.log(`TL ~ itCompanies[3]`, itCompanies[3])
// itCompanies[4] = itCompanies[4].toUpperCase()
// console.log(`TL ~ itCompanies[4]`, itCompanies[4])
// itCompanies[5] = itCompanies[5].toUpperCase()
// console.log(`TL ~ itCompanies[5]`, itCompanies[5])
// itCompanies[6] = itCompanies[6].toUpperCase()
// console.log(`TL ~ itCompanies[6]`, itCompanies[6])
// let companiesString = itCompanies.toString();
// console.log(`TL ~ companiesString`, companiesString);
// companiesString = companiesString.replace(/,/g,', ');
// companiesString = companiesString.replace(', Am',' and Am');
// console.log(`${companiesString} are big IT companies`);
// let searchCompany = 'Applef'
// if (itCompanies.indexOf(searchCompany) === -1){
//   console.log(`${searchCompany} is not in the array itCompanies`);
// }else{
//   console.log(`${searchCompany} is in the array itCompanies`);
// }

// 15
// itCompanies.sort();
// console.log('itCompanies :>> ', itCompanies);
// // 16
// itCompanies.reverse();
// console.log(`itCompanies :>> `, itCompanies);
// //17
// // let sliced = itCompanies.slice(0,3)
// // console.log(`TL ~ sliced`, sliced)
// console.log(
//   itCompanies[itCompanies.length - 3],
//   itCompanies[itCompanies.length - 1]
// );
// let sliced = itCompanies.slice(itCompanies.length - 3, itCompanies.length);
// console.log(`TL ~ sliced`, sliced);

// let evenOrOdd;
// itCompanies.length % 2 == 0 ? (evenOrOdd = 'even') : (evenOrOdd = 'odd');
// let middleIndex;

// if (evenOrOdd == 'odd') {
//   middleIndex = Math.floor((itCompanies.length - 1) / 2);
// } else {
//   middleIndex = [
//     Math.floor((itCompanies.length - 1) / 2),
//     itCompanies.length / 2,
//   ];
// }
// console.log(`TL ~ middleIndex`, middleIndex);
// console.log(`TL ~ itCompanies`, itCompanies);
// if (evenOrOdd == 'odd') {
//   itCompanies.splice(middleIndex, 1);
//   console.log(`TL ~ itCompanies`, itCompanies);
// } else {
//   itCompanies.splice(middleIndex[0], 2);
//   console.log(`TL ~ itCompanies`, itCompanies);
// }
// itCompanies.pop();
// console.log(`TL ~ itCompanies`, itCompanies);
// itCompanies.splice(0);
// console.log(`TL ~ itCompanies`, itCompanies);

//!Level 2
//2
// let text =
//   'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
// console.log(`TL`, text);
// let newText = text.replace(/[^A-Za-z0-9\s]/gi, '').split(' ');
// console.log(`TL`, newText);
// console.log(`TL`, newText.length);

//3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
if (shoppingCart.includes('Meat') == false) {
  shoppingCart.unshift('Meat');
}
if (shoppingCart.includes('Sugar') == false) {
  shoppingCart.push('Sugar');
}
let allergic = true;
if (allergic) {
  shoppingCart.splice(shoppingCart.indexOf('Honey'), 1);
}
console.log(shoppingCart);

indexToChange = shoppingCart.indexOf('Tea');
shoppingCart[indexToChange] = 'Green Tea';
console.log(`TL ~ shoppingCart`, shoppingCart);
