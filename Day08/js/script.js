import { countries_data as countries } from './countries_data.js';
import { users, products } from './users_produtcts.js';
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
// const users = {
//   Alex: {
//     email: 'alex@alex.com',
//     skills: ['HTML', 'CSS', 'JavaScript'],
//     age: 20,
//     isLoggedIn: false,
//     points: 30,
//   },
//   Asab: {
//     email: 'asab@asab.com',
//     skills: [
//       'HTML',
//       'CSS',
//       'JavaScript',
//       'Redux',
//       'MongoDB',
//       'Express',
//       'React',
//       'Node',
//     ],
//     age: 25,
//     isLoggedIn: false,
//     points: 50,
//   },
//   Brook: {
//     email: 'daniel@daniel.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
//     age: 30,
//     isLoggedIn: true,
//     points: 50,
//   },
//   Daniel: {
//     email: 'daniel@alex.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
//     age: 20,
//     isLoggedIn: false,
//     points: 40,
//   },
//   John: {
//     email: 'john@john.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
//     age: 20,
//     isLoggedIn: true,
//     points: 50,
//   },
//   Thomas: {
//     email: 'thomas@thomas.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React'],
//     age: 20,
//     isLoggedIn: false,
//     points: 40,
//   },
//   Paul: {
//     email: 'paul@paul.com',
//     skills: [
//       'HTML',
//       'CSS',
//       'JavaScript',
//       'MongoDB',
//       'Express',
//       'React',
//       'Node',
//     ],
//     age: 20,
//     isLoggedIn: false,
//     points: 40,
//   },
// };
//1
// //?transform into an iterable
// const entries = Object.entries(users);
// //console.log(entries);

// //?get name and number of skills of each user
// const usersSkills = [];
// for (const entry of entries) {
//   usersSkills.push([entry[0], entry[1].skills.length]);
// }
// //console.log(usersSkills);
// //? create 2 variables and assign to them the first user and its skill amount
// let user = usersSkills[0][0],
//   max = usersSkills[0][1];
// //? compare with other users and assign to max, the user with highest amount of skills
// for (let i = 1; i < usersSkills.length; i++) {
//   if (usersSkills[i][1] > max) {
//     user = usersSkills[i][0];
//     max = usersSkills[i][1];
//   }
// }
// console.log(`User with more skills => ${user} / ${max} skills`);

// //* using **for in**
// for (const user in users) {
//   console.log(users[user].skills.length, user);
// }

//2
// function countUsers(usersObj) {
//   let counter = 0;
//   for (const user in usersObj) {
//     if (usersObj[user].isLoggedIn == true && usersObj[user].points >= 50) {
//       counter += 1;
//     }
//   }
//   return `Users logged in, with 50 or more points : ${counter} user(s)`;
// }
// console.log(countUsers(users));

// //3 MERN
// console.clear();
// function findMernPeople(obj) {
//   const mernDevs = [];
//   for (const user in obj) {
//     if (obj[user].skills.includes('MongoDB', 'Express', 'React', 'Node')) {
//       mernDevs.push(user);
//     }
//   }
//   return mernDevs;
// }
// console.log(findMernPeople(users));

// //4
// console.clear();
// const copyUsers = Object.assign({}, users);
// copyUsers.Julio = {};
// copyUsers['Julio'].email = 'jz@gmail.com';
// copyUsers['Julio'].skills = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'Python',
//   'Sass',
//   'PostgreSQL',
// ];
// copyUsers['Julio'].age = 42;
// copyUsers['Julio'].isLoggedIn = true;
// copyUsers['Julio'].points = 43;

// console.log(copyUsers);

// //5
// console.clear();
// const copyUsKeys = Object.keys(copyUsers);
// console.log(copyUsKeys);

// //6
// const values = [];
// for (const user in copyUsers) {
//   values.push(Object.values(copyUsers[user]));
// }
// console.log(values);

//7
console.clear();
console.log(countries[0]);

function printCountryInfo(arr) {
  for (const country of countries) {
    console.log(`Country: ${country.name}, Capital: ${country.capital}, \
  Population: ${country.population}, Languages: ${country.languages}`);
  }
}
printCountryInfo(countries);

console.clear();
//! Level 3
//1
const personAccount = {
  firstName: 'Julio',
  lastName: 'Zampier',
  incomes: {
    salary: 1000,
    rental: 600,
    bonus: 500,
  },
  expenses: {
    taxes: 300,
    pharmacy: 100,
    ifood: 350,
  },

  totalIncome: function () {
    let sum = 0;
    for (const income in this.incomes) {
      sum += this.incomes[income];
    }
    console.log(`Total Incomes ${sum}`);
    return sum;
  },

  totalExpense: function () {
    let sum = 0;
    for (const expense in this.expenses) {
      sum += this.expenses[expense];
    }
    console.log(`Total expenses ${sum}`);
    return sum;
  },

  accountInfo: function () {
    const inc = Object.entries(this.incomes);
    const exp = Object.entries(this.expenses);
    return `-----Account Info-----\n\nFull Name: ${this.firstName} ${this.lastName};\n
    Incomes: ${inc};\n
    Expenses:${exp};\n\n----------------------`;
  },

  addIncome: function (category, value) {
    this.incomes[category] = value;
  },

  addExpense: function (category, value) {
    this.expenses[category] = value;
  },

  accountBalance: function () {
    return this.totalIncome() - this.totalExpense();
  },
};

console.log(personAccount.totalIncome());
console.log(personAccount.totalExpense());
console.log(personAccount.accountInfo());
personAccount.addIncome('lotery', 10000);
personAccount.addExpense('bitcoin', 9000);
console.log(personAccount.accountInfo());
personAccount.totalIncome();
personAccount.totalExpense();
console.log(personAccount.accountBalance());

//2
console.clear();

console.log(users);
console.log(products);

//2a
function signUp() {
  let inputEmail = prompt('Enter your e-mail');
  for (const user in users) {
    if (users[user].email == inputEmail) {
      console.log('User already has an account!');
      return;
    }
  }
  let nusername = prompt('Enter User Name: ');
  let nemail = prompt('Enter email address: ');
  let npassword = prompt('Enter User Password: ');
  let ncreatedAt = new Date();
  let nIsLoggedIn = false;
  let nId = '';
  for (let i = 0; i < 6; i++) {
    nId += Math.floor(Math.random() * 37).toString(36);
  }
  users.push({
    _id: nId,
    username: nusername,
    email: nemail,
    password: npassword,
    createdAt: ncreatedAt,
    isLoggedIn: nIsLoggedIn,
  });
}
//signUp();
// console.log(users);
//2.b
function signIn() {
  let promptUserName = prompt('Enter your Username: ');
  for (const user in users) {
    if (users[user].username == promptUserName) {
      let promptUserPassword = prompt('Enter your Password');
      if (users[user].password == promptUserPassword) {
        users[user].isLoggedIn = true;
        console.log(`${users[user].username} Success on login`);
      }
    }
  }
}
signIn();
