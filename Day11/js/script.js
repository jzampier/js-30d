//! Destructuring and Spread
//? Destructuring = unpack arrays and store their values in variables
// const numbers = [1, 2, 3];
// let [numOne, numTwo, numThree] = numbers;
// console.log(
//   `Number one: ${numOne}, Number two: ${numTwo}, Number three: ${numThree}`
// );

// const names = ['Kiko', 'Zinho', 'Branco', 'Lindo'];
// let [firstPerson, secondPerson, thirdPerson, fourthPerson] = names;
// console.log(`LOG ~ names:`, names);

// const scientificConstants = [2.72, 3.14, 9.81, 37, 100];
// let [e, pi, gravity, humanBodyTemp, waterBoilingPoint] = scientificConstants;
// console.log(e, gravity, waterBoilingPoint);

// const fullStack = [
//   ['HTML', 'CSS', 'JS', 'React'],
//   ['Node', 'Express', 'MongoDB'],
// ];
// const [frontEnd, backEnd] = fullStack;
// console.log(frontEnd);
// console.log(backEnd);

// const numbersTwo = [1, 2, 3];
//? using comma to skip an specific index and omit the second value
// let [numOne_, , numThree_] = numbersTwo;
// console.log(numOne_, numThree_);

// const namesTwo = ['Asabeneh', 'Brook', 'David', 'John'];
// let [, secondpers, , fourthpers] = namesTwo;
// console.log(secondpers, fourthpers);
//? assigning default values to destructured variables
// const namesThree = [undefined, 'Pasteleiro', 'Vadio'];
// let [firstMf = 'Kiko', secondMf, thirdMf, fourthMf = 'Zinho'] = namesThree;
// console.log(firstMf, secondMf, thirdMf, fourthMf);

//? Destructuring just few elements from an array
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let [num1, num2, num3, ...rest] = numbers;
// console.log(num1, num2, num3);
// console.log(rest);

//? Destructuring during iteration
// const countries = [
//   ['Finland', 'Helsinki'],
//   ['Sweden', 'Stockholm'],
//   ['Norway', 'Oslo'],
// ];
// for (const [country, capital] of countries) {
//   console.log(`Country: ${country}, Capital: ${capital}`);
// }
// const fullStack = [
//   ['HTML', 'CSS', 'JS', 'React'],
//   ['Node', 'Express', 'MongoDB'],
// ];
// for (const [first, second, , fourth] of fullStack) {
//   console.log(first, second, fourth);
// }

//? Destructuring Objects - name of variable must be the same as the key/property
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
};
// let { width, height, area, perimeter } = rectangle;
// console.log(width, height, area, perimeter);
//? but you can change the name of the variable during destructuring
//? also we can assign default values to destructured variables (see perimeter)
// let { width: w, height: h, area: a, perimeter: p = 60 } = rectangle;
// console.log(w, h, a, p);

// const calculatePerimeter = (rectangle) => {
//   return 2 * (rectangle.width + rectangle.height);
// };
// console.log(calculatePerimeter(rectangle));
//? another example,
// const person = {
//   firstName: 'Asabeneh',
//   lastName: 'Yetayeh',
//   age: 250,
//   country: 'Finland',
//   job: 'Instructor and Developer',
//   skills: [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB',
//     'Python',
//     'D3.js',
//   ],
//   languages: ['Amharic', 'English', 'Suomi(Finnish)'],
// };
// const getPersonInfo = (obj) => {
//   const skills = obj.skills;
//   const formattedSkills = skills.slice(0, -1).join(', ');
//   const languages = obj.languages;
//   const formattedLanguages = languages.slice(0, -1).join(', ');
//   let personInfo = `${obj.firstName} ${obj.lastName} lives in ${obj.country}, ${
//     obj.age
//   } years old. He is an ${obj.job}. He teaches ${formattedSkills} and ${
//     skills[skills.length - 1]
//   }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`;
//   return personInfo;
// };

// console.log(getPersonInfo(person));

//?Object parameter with destructuring
// const calculatePerimeter = ({ width, height }) => {
//   return 2 * (width + height);
// };
// console.log(calculatePerimeter(rectangle));
