//! Destructuring and Spread
//? Destructuring = unpack arrays and store their values in variables
const numbers = [1, 2, 3];
let [numOne, numTwo, numThree] = numbers;
console.log(
  `Number one: ${numOne}, Number two: ${numTwo}, Number three: ${numThree}`
);

const names = ['Kiko', 'Zinho', 'Branco', 'Lindo'];
let [firstPerson, secondPerson, thirdPerson, fourthPerson] = names;
console.log(`LOG ~ names:`, names);

const scientificConstants = [2.72, 3.14, 9.81, 37, 100];
let [e, pi, gravity, humanBodyTemp, waterBoilingPoint] = scientificConstants;
console.log(e, gravity, waterBoilingPoint);

const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB'],
];
const [frontEnd, backEnd] = fullStack;
console.log(frontEnd);
console.log(backEnd);

const numbersTwo = [1, 2, 3];
//using comma to skip an specific index and omit the second value
let [numOne_, , numThree_] = numbersTwo;
console.log(numOne_, numThree_);
