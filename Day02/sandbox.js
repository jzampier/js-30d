// let numberOne = 3;
// let numberTwo = 3;

// console.log(numberOne === numberTwo);

// let js = 'JavaScript';
// let py = 'Python';

// console.log(js == py);

// let lightOn = true;
// let lightOff = false;

// console.log(lightOn == lightOff);

// let nums = [1, 2, 3];
// nums[0] = 10;
// console.log(nums);

// let numbers = [1, 2, 3];
// console.log(nums == numbers);

// let userOne = {
//   name: 'Julio',
//   role: 'Unemployed',
//   country: 'Brazil',
// };
// let userTwo = {
//   name: 'Julio',
//   role: 'Unemployed',
//   country: 'Brazil',
// };

// console.log(userOne == userTwo);

// let numbers = nums;
// console.log(nums == numbers);

// let userTwo = userOne;
// console.log(userOne == userTwo);

// !Declaring Number Data Types
// let age = 35;
// const gravity = 9.81;
// let mass = 72;
// const PI = 3.14;

// const boilingPoint = 100;
// const bodyTemp = 37;

// console.log(age, gravity, mass, PI, boilingPoint, bodyTemp);

// !Math Object
// const PI = Math.PI;
// let numbers = [-5, 3, 20, 4, 5, 10];
// console.log(PI);

// //round above if greater than .5 and round below if less than .5
// console.log(Math.round(PI)); // auto
// console.log(Math.round(9.81)); // auto
// console.log(Math.floor(PI)); // rounds down
// console.log(Math.ceil(PI)); // rounds above

// console.log(Math.min(-5, 3, 20, 4, 5, 10)); //Min
// console.log(Math.max(-5, 3, 20, 4, 5, 10)); //Max

// const randNum = Math.random(); // random number between 0 and 0.999999
// console.log(randNum);

// const num = Math.floor(Math.random() * 101); // random number between 0 and 100
// console.log(num);

// // Absolute value
// console.log(Math.abs(-10));
// // Square root
// console.log(Math.sqrt(100));
// console.log(Math.sqrt(2));
// // Power
// console.log(Math.pow(3, 2));
// console.log(Math.E);
// // Logarithm
// // Natural logarithm with base E of x
// console.log(Math.log(2));
// console.log(Math.log(10));
// // Natural logarithm of 2 and 10
// console.log(Math.LN2);
// console.log(Math.LN10);
// // Trigonometry
// console.log(Math.sin(0))
// console.log(Math.sin(60))
// console.log(Math.cos(0))
// console.log(Math.cos(60))

// !Strings
// let space = ' ';
// let firstName = 'Julio';
// let lastName = 'Zampier';
// let age = 250;
// let country = 'Brazil';
// let city = 'Macae';
// let language = 'Javascript';
// let job = 'unemployed';
// let quote = 'Camarao que dorme "a onda leva" kkk "yadson"';
// let quoteWithBackTick = `Arroy 'tchacarhay'.`;

// // Concatenation
// let fullName = firstName + space + lastName;
// console.log(fullName, '\n');
// console.log(fullName + '. I am ' + age + '. I live in ' + country, '\n');
// console.log(`${fullName}. I'm ${age}. I live in ${country}\n`);

// const paragraph =
//   'My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
// I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
// Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
// In the end of 2019, I was thinking to expand my teaching and to reach \
// to global audience and I started a Python challenge from November 20 - December 19.\
// It was one of the most rewarding and inspiring experience.\
// Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
// I hope you are enjoying too.';

// console.log(paragraph);
// console.log(
//   'I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you?'
// );
// console.log('Days\tTopics\tExercidses');
// console.log('Day 1\t3\t5');
// console.log('Day 2\t3\t5');
// console.log('Day 3\t3\t5');
// console.log('Day 4\t3\t5');
// console.log('This is a backslash symbol (\\)');
// console.log('In every programming language it starts with "Hello, World!"');
// console.log("In every programming language it starts with 'Hello, World!'");
// console.log("The saying 'Seeing is Believing' isn't correct in 2020");

//!Template Literals (template Strings)
// console.log(`The sum of 2 and 3 is 5`);
// let a = 2;
// let b = 3;
// console.log(`The sum of ${a} and ${b} is ${a + b}`);

// let firstName = 'Julio';
// let lastName = 'Zampier';
// let country = 'Brazil';
// let city = 'Macae';
// let language = 'JavaScript';
// let job = 'Unemployed';
// let age = 41;
// let fullName = firstName + ' ' + lastName;
// let personInfoTwo = `I am ${fullName}. I am ${age}. I live in ${country}.`;
// let personInfoThree = `I am ${fullName}. I live in ${city}, ${country} I'm an \
// ${job}. I study ${language}.`;
// console.log(personInfoTwo, '\n');
// console.log(personInfoThree, '\n');

// console.log(`${a} is greater than ${b}: ${a>b}`);

//!String Methods
// let js = 'javaScript';
// console.log(js.length);
// let firstName = 'Julio';
// console.log(firstName.length);

// let string = 'JavaScript';
// let firstLetter = string[0];

// console.log(firstLetter);
// let secondLetter = string[1];
// let thirdLetter = string[2];
// let lastLetter = string[string.length - 1];

// console.log(lastLetter);
// console.log(string.toUpperCase());
// let firstName = 'Julio';
// console.log(firstName.toUpperCase());
// let country = 'Brazil';
// console.log(country.toUpperCase());

// !toLowerCase()
// console.log(string.toLowerCase());
// console.log(firstName.toLowerCase());
// console.log(country.toLowerCase());

//! substr(starting_index, number_of_characters)
// console.log(string.substr(4, 6));
// console.log(firstName.substr(2, 3));

// ! substring(starting_index, stoping_index_"not included")
// console.log(string.substring(0, 4));
// console.log(string.substring(4, 10));
// console.log(string.substring(4));

// console.log(country.substring(0, 3));
// console.log(country.substring(3, country.length));
// console.log(country.substring(3));

//! split(spliting_place)
// let stringTwo = `30 Days Of JavaScript`;
// console.log(stringTwo.split());
// console.log(stringTwo.split(' '));

// console.log(firstName.split());
// console.log(firstName.split(''));

// let countries = 'Finland, Sweden, Norway, Denmark, and Iceland';
// console.log(countries.split(','))
// console.log(countries.split(', '))

//! trim()
// let string = '    30 Days of JavaScript       ';
// console.log(string);
// console.log(string.trim());

// let firstName = ' Julio '
// console.log(firstName);
// console.log(firstName.trim());

//! includes()
/* let string = '30 Days Of JavaScript';
console.log(string.includes('Days'));
console.log(string.includes('days'));
console.log(string.includes('Script'));
console.log(string.includes('script'));
console.log(string.includes('java'));
console.log(string.includes('Java'));

let country = 'Brasilzão';
console.log(country.includes('Bras'));
console.log(country.includes('bras'));
console.log(country.includes('sil'));
console.log(country.includes('zao')); */

//! replace()
//? string.replace(oldsubstring, newsubstring)
/* let string = '30 Days Of JavaScript';
console.log(string.replace('JavaScript', 'PythonScript'));

let country = 'Brasilzão';
console.log(country.replace('Brasilz', 'Azerbaij'));
 */
//! charAt()
//? string.charAt(index)
// let string = '30 Days Of JavaScript';
// console.log(string.charAt(0));
// console.log(string.charAt(string.length-1));

//!12 charCodeAt()
//? string.charCodeAt(index) returns ASCII code
// let string = '30 Days Of JavaScript';
// console.log(string.charCodeAt(3))
// console.log(string.charCodeAt(string.length-1))

// !13 indexOf()
//? string.indexOf(substring) returns the index of the first postion of the substring
//? ift not exits, returns -1
/* let string = '30 Days Of JavaScript';
console.log(string.indexOf('D'));
console.log(string.indexOf('Days'));
console.log(string.indexOf('days'));
console.log(string.indexOf('a'));
console.log(string.indexOf('JavaScript'));
console.log(string.indexOf('Script'));
console.log(string.indexOf('script')); */

//!14 lastIndexOf()
//? string.lastIndexOf(substring) returns the last position of the substring
//? if doesn't exist it returns -1
//? string.lastIndexOf(substring)

/* let string = `I love JavaScript. If you don't love JavaScript what else can \
you love.`;
console.log(string);
console.log(string.lastIndexOf('love'));
console.log(string.lastIndexOf('you'));
console.log(string.lastIndexOf('JavaScript')); */

//!15 concat()  Joins multiple substrings together
//? string.concat(substring1, substring2, substring3)
/* let string='3000'
console.log(string.concat('Days', 'Of', 'JavaScript'));
let country = 'Bra'
console.log(country.concat('sil')) */

// !16 startsWith()
//? string.startsWith(substring)
//? returns true or false

// let string = 'Love is the best to in this world'
// console.log(string.startsWith('Love'))
// console.log(string.startsWith('love'))
// console.log(string.startsWith('world'))

// let country = 'Brazil'
// console.log(country.startsWith('Bras'))
// console.log(country.startsWith('Braz'))
// console.log(country.startsWith('bras'))

//! 17 endsWith()
//? string.endsWith(substring)
//? returns true or false
/* let string = 'Love is the most powerful feeling in the world'
console.log(string.endsWith('world'))
console.log(string.endsWith('love'))
console.log(string.endsWith('In the world'))

let country = 'Finland'
console.log(country.endsWith('land'))
console.log(country.endsWith('fin'))
console.log(country.endsWith('Fin')) */

//!18 search
//? string.search(substring)  returns index of the first occurrence
/* let string = 'I love JavaScript. If you do not love JavaScript what else can \
you love.'
console.log(string.search('love'))
console.log(string.search(/javascript/gi)) */

//!19 match() returns an array
//? string.match(substring)
// let string = 'love';
// let patternOne = /love/; // with out any flag
// let patternTwo = /love/gi; // g-means to search in the whole text, i - case insensitive

// let string =
//   'I love JavaScript. If you do not love JavaScript what else can \
// you love';
// console.log(string.match('love'));
// let pattern = /love/gi;
// console.log(string.match(pattern));

// *Let us extract numbers from text using a regular expression. This is not
// *the regular expression section, do not panic! We will cover regular
// *expressions later on.
// let txt = 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to\
// start this challenge.';
// let regEx = /\d+/
// console.log(txt.match(regEx))
// console.log(txt.match(/\d+/g));

//! 20. repeat() takes a number as argument and returns the repeated version of the string
//? string.repeat(n)
// let string = 'love';
// console.log(string.repeat(10));

// !Checking Data Types and Casting typeOf
/* let firstName = 'Asabeneh'      // string
let lastName = 'Yetayeh'        // string
let country = 'Finland'         // string
let city = 'Helsinki'           // string
let age = 250                   // number, it is not my real age, do not worry about it
let job                         // undefined, because a value was not assigned

console.log(typeof 'Asabeneh')
console.log(typeof firstName)
console.log(typeof 10)
console.log(typeof 3.14)
console.log(typeof true)
console.log(typeof false)
console.log(typeof NaN)
console.log(typeof job)
console.log(typeof undefined)
console.log(typeof null) */

//!Casting
// ? parseInt(), parseFloat(), Number(), + sign, str()
// *String to Int
/* let num = '10';
let numInt = parseInt(num);
console.log(numInt);

let numTwo = '10';
let numTwoInt = Number(numTwo);
console.log(numTwoInt);

let numThree = '10';
let numThreeInt = +numThree;
console.log(numThreeInt); */

//*String to Float
/* let num = '9.81'
let numFloat = parseFloat(num)

console.log(numFloat) // 9.81
let numTwo = '9.81'
let numTwoFloat = Number(numTwo)

console.log(numFloat) // 9.81
let numThree = '9.81'
let numThreeFloat = +num

console.log(numFloat) // 9.81 */

//* Float to Int
//? parseInt()

// let num = 9.81;
// let numInt = parseInt(num);
// console.log(numInt);

//! Exercises
// 1
// let challenge = '30 Days Of JavaScript.';
// //3
// console.log(challenge.length);
// //4
// console.log(challenge.toUpperCase());
// // 5
// console.log(challenge.toLowerCase());
// //6
// console.log(challenge.substring(0, 2));
// //7
// console.log(challenge.substring(3, challenge.length - 1));
// //8
// console.log(challenge.includes('Script'));
// //9
// console.log(challenge.split(''));
// //10
// console.log(challenge.split(' '));
// // 11
// console.log(
//   'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'.split(',')
// );
// //12
// console.log(challenge.replace('JavaScript', 'Python'));
// //13
// console.log(challenge.charAt(15));
// //14
// console.log(challenge.charCodeAt('J'));
// // 15
// console.log(challenge.indexOf('a'));
// //16
// console.log(challenge.lastIndexOf('a'));
// //17
// console.log(
//   'You cannot end a sentence with because because because is a conjunction'.indexOf(
//     'because'
//   )
// );
// // 18
// console.log(
//   'You cannot end a sentence with because because because is a conjunction'.lastIndexOf(
//     'because'
//   )
// );
// // 19
// console.log(
//   'You cannot end a sentence with because because because is a conjunction'.search(
//     'because'
//   )
// );
// //20
// console.log(challenge.trim());
// //21
// console.log(challenge.startsWith('30'));
// //22
// console.log(challenge.endsWith('cript.'));
// //23
// console.log(challenge.match(/a/gi));
// //24
// console.log('30 Days Of'.concat(' ', 'JavaScript'));
// //25
// console.log(challenge.repeat(2));

//! Exercises level 2
//1
/* console.log(
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
);
//2
console.log(
  `"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`
);
// 3
console.log(typeof Number('10') == typeof 10);
// 4
console.log(Math.ceil(parseFloat('9.8')) == 10);
// 5
console.log('python'.includes('on'));
console.log('jargon'.includes('on'));
//6
console.log('I hope this course is not full of jargon'.includes('jargon'));
//7
console.log(Math.floor(Math.random() * 101));
//8
console.log(Math.floor(Math.random() * (101 - 50) + 50));
//9
console.log(Math.floor(Math.random() * 256));
//10
let size = 'JavaScript'.length;
console.log('JavaScript'[Math.floor(Math.random() * size)]);
//11
console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125');
//12
let sentence =
  'You cannot end a sentence with because because because is a conjunction';
let subSize = 'because because because'.length;
let position = sentence.indexOf('because')
console.log(sentence.substr(position, subSize)) */

//!Exercises Level3
//1
let sentenceOne =
  'Love is the best thing in this world. Some found their love and some are \
  still looking for their love.';
console.log(sentenceOne.match(/love/gi).length);
//2
let sentenceTwo =
  'You cannot end a sentence with because because because is \
a conjunction';
console.log(sentenceTwo.match(/because/gi).length);
//3
const sentence =
  '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re \
$is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng \
peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es \
thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so \
$the $resu@lt of &love& of tea&ching';

let newSentence = sentence.replace(/[^A-Za-z0-9\s]/gi, '');
console.log(newSentence);

//4
const phrase =
  'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';

let salaryPerMonth = phrase.substr(phrase.indexOf('5000'), 4) * 12;
let bonusAnnual = phrase.substr(phrase.indexOf('10000'), 5);
let coursesPerMonth = phrase.substr(phrase.indexOf('15000'), 5) * 12;
let total =
  Number(salaryPerMonth) + Number(bonusAnnual) + Number(coursesPerMonth);
console.log(total);
