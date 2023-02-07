//!level 1
// //1
// const dog = {};
// //2
// console.log(dog);

// //3
// dog.name = 'Tobby';
// dog.legs = 4;
// dog.color = 'Brown';
// dog.age = 3;
// dog.bark = function () {
//   return 'Woof Woof';
// };

// //4
// console.log(dog.name);
// console.log(dog.legs);
// console.log(dog.color);
// console.log(dog.age);
// console.log(dog.bark());

// //5
// dog.breed = 'Shitsu';
// dog.getInfo = function () {
//   return `The dog's name is ${dog.name} of ${dog.breed} breed, ${dog.color} \
// color.\nIt's ${dog.age} years old and has ${dog.legs} legs.\nIts bark is \
// ${dog.bark()}`;
// };
// console.log(dog.getInfo());
//!level 2
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
//1
//?transform into an iterable
const entries = Object.entries(users);
//console.log(entries);

//?get name and number of skills of each user
const usersSkills = [];
for (const entry of entries) {
  usersSkills.push([entry[0], entry[1].skills.length]);
}
//console.log(usersSkills);
//? create 2 variables and assign to them the first user and its skill amount
let user = usersSkills[0][0],
  max = usersSkills[0][1];
//? compare with other users and assign to max, the user with highest amount of skills
for (let i = 1; i < usersSkills.length; i++) {
  if (usersSkills[i][1] > max) {
    user = usersSkills[i][0];
    max = usersSkills[i][1];
  }
}
console.log(`User with more skills => ${user} / ${max} skills`);

for (const user in users) {
  for (prop in user) {
    console.log(prop);
  }
}
