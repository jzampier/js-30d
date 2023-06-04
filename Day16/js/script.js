//! Day 16 JSON (JavaScript Object Notation)
//? JSON is a syntax for storing and exchanging data.

//JSON.parse(json[, reviver])
//json or text, the data
//reviver is an optional callback function
/* JSON.parse(json, (key,value) =>{}) */
const usersText = `{
  "users":[
    {
      "firstName":"Asabeneh",
      "lastName":"Yetayeh",
      "age":250,
      "email":"asab@asb.com"
    },
    {
      "firstName":"Alex",
      "lastName":"James",
      "age":25,
      "email":"alex@alex.com"
    },
    {
    "firstName":"Lidiya",
    "lastName":"Tekle",
    "age":28,
    "email":"lidiya@lidiya.com"
    }
  ]
  }`;

//? JSON to obj JSON.parse(json[, reviver])
const usersObj = JSON.parse(usersText, undefined, 4);
console.log(usersObj);

const usersObj2 = JSON.parse(usersText, (key, value) => {
  let newValue =
    typeof value == 'string' && key != 'email' ? value.toUpperCase() : value;
  return newValue;
});
console.log(usersObj2);

//? OBJ TO JSON  JSON.stringify(obj[, replacer[, space]])
const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: 'asab@asab.com',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'Redux',
      'MongoDB',
      'Express',
      'React',
      'Node',
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: 'paul@paul.com',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'MongoDB',
      'Express',
      'React',
      'Node',
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};
const objToJson = JSON.stringify(users, undefined, 4);
console.log(objToJson);

//? Using a Filter Array with JSON.stringify
const user = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  country: 'Finland',
  city: 'Helsinki',
  email: 'alex@alex.com',
  skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Python'],
  age: 250,
  isLoggedIn: false,
  points: 30,
};
const objToJson2 = JSON.stringify(
  user,
  ['firstName', 'lastName', 'country', 'city', 'age'],
  4
);
console.log(objToJson2);

console.clear();
//! Exercises lv 1
// 1 - Change skills array to JSON using JSON.stringify()
const skills = ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python'];
const skillsJson = JSON.stringify(skills);
console.log(skillsJson);
// 2 - Stringify the age variable
let age = 250;
const ageJson = JSON.stringify(age);
console.log(ageJson, typeof ageJson);
// 3 - Stringify the isMarried variable
let isMarried = true;
const isMarriedJson = JSON.stringify(isMarried);
console.log(isMarriedJson, typeof isMarriedJson);
// 4 - Stringify the student object
const student = {
  firstName: 'Asabeneh',
  lastName: 'Yetayehe',
  age: 250,
  isMarried: true,
  skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python'],
};
const studentJson = JSON.stringify(student);
console.log(studentJson, typeof studentJson);

//! Lv2
//1 Stringify the students object with only firstName, lastName and skills properties
const studentJson2 = JSON.stringify(student, [
  'firstName',
  'lastName',
  'skills',
]);
console.log(studentJson2);

//! Lv3
//1 Parse the txt JSON to object.
const txt = `{
  "Alex": {
      "email": "alex@alex.com",
      "skills": [
          "HTML",
          "CSS",
          "JavaScript"
      ],
      "age": 20,
      "isLoggedIn": false,
      "points": 30
  },
  "Asab": {
      "email": "asab@asab.com",
      "skills": [
          "HTML",
          "CSS",
          "JavaScript",
          "Redux",
          "MongoDB",
          "Express",
          "React",
          "Node"
      ],
      "age": 25,
      "isLoggedIn": false,
      "points": 50
  },
  "Brook": {
      "email": "daniel@daniel.com",
      "skills": [
          "HTML",
          "CSS",
          "JavaScript",
          "React",
          "Redux"
      ],
      "age": 30,
      "isLoggedIn": true,
      "points": 50
  },
  "Daniel": {
      "email": "daniel@alex.com",
      "skills": [
          "HTML",
          "CSS",
          "JavaScript",
          "Python"
      ],
      "age": 20,
      "isLoggedIn": false,
      "points": 40
  },
  "John": {
      "email": "john@john.com",
      "skills": [
          "HTML",
          "CSS",
          "JavaScript",
          "React",
          "Redux",
          "Node.js"
      ],
      "age": 20,
      "isLoggedIn": true,
      "points": 50
  },
  "Thomas": {
      "email": "thomas@thomas.com",
      "skills": [
          "HTML",
          "CSS",
          "JavaScript",
          "React"
      ],
      "age": 20,
      "isLoggedIn": false,
      "points": 40
  },
  "Paul": {
      "email": "paul@paul.com",
      "skills": [
          "HTML",
          "CSS",
          "JavaScript",
          "MongoDB",
          "Express",
          "React",
          "Node"
      ],
      "age": 20,
      "isLoggedIn": false,
      "points": 40
  }
}
`;
const jsonTxtToObject = JSON.parse(txt);
console.log(jsonTxtToObject);

//2 - Find the user who has many skills from the variable stored in txt.
const findUserWithManySkills = (txt) => {
  // transform JSON to object
  const users = JSON.parse(txt);
  // empty array to store users and their skills count
  const usersSkills = [];
  // for in loop to iterate over the OBJECT
  for (let user in users) {
    // push the user and their skills count to the empty array
    usersSkills.push({ user, skills: users[user].skills.length });
    // console.log(usersSkills);
  }
  // sort the array by skills count in descending order and return the first 3 items
  return usersSkills.sort((a, b) => b.skills - a.skills).slice(0, 3);
};
console.log(findUserWithManySkills(txt));
