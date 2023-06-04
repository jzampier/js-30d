//! Day 15 - Classes
// syntax
class ClassName {
  //  code goes here
}
// example
// class Person {
//   // code goes here
// }
// const jadson = new Person();
// console.log(jadson);

//? Class constructor
// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
// }
// const jadson = new Person('Nosdaj', 'Arievilo');
// const julio = new Person('Julio', 'Zampier');
// const Kemmel = new Person('Kemmel', 'Pinto');

// console.log(jadson);
// console.log(julio);
// console.log(Kemmel);

// class Person {
//   constructor(firstName, lastName, age, country, city) {
//     console.log(this);
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.country = country;
//     this.city = city;
//   }
// }

// const pessoa1 = new Person('Nosdaj', 'Arievilo', 52, 'Lhorien', 'Valfenda');
// console.log(pessoa1);

//? Default values with constructor
// class Person {
//   constructor(
//     firstName = 'Julio', //default value
//     lastName = 'Zampier',
//     age = 3200,
//     country = 'Gondor',
//     city = 'Rolanopolis'
//   ) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.country = country;
//     this.city = city;
//   }
// }

// const pessoa1 = new Person();
// const pessoa2 = new Person('Nosdaj', 'Arievilo', 2340, 'Lhorien', 'Valfenda');
// console.log(pessoa1);
// console.log(pessoa2);

//? Class methods

// class Person {
//   constructor(firstName, lastName, age, country, city) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.country = country;
//     this.city = city;
//   }
//   getFullName() {
//     const fullName = this.firstName + ' ' + this.lastName;
//     return fullName;
//   }
// }
// const pessoa1 = new Person('Nosdaj', 'Arievila', 2032, 'Lhorien', 'Valfenda');
// const pessoa2 = new Person(
//   'Julio',
//   'Zampier',
//   23322,
//   'Zoombiland',
//   'Simas Turbo'
// );
// console.log(pessoa1.getFullName());
// console.log(pessoa2.getFullName());

//? Properties with initial value
// class Persona {
//   constructor(firstName, lastName, age, country, city) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.country = country;
//     this.city = city;
//     this.score = 0;
//     this.skills = [];
//   }
//   getFullName() {
//     const fullName = this.firstName + ' ' + this.lastName;
//     return fullName;
//   }
// }
// const pessoa1 = new Persona('Nosdaj', 'Arievilo', 2032, 'Lhorien', 'Valfenda');
// const pessoa2 = new Persona(
//   'Julio',
//   'Zampier',
//   2123,
//   'Papapitone',
//   'Paulanopolis'
// );
// console.log(pessoa1.score);
// console.log(pessoa2.score);
// console.log(pessoa1.skills);
// console.log(pessoa2.skills);

//? Getter
// class Person {
//   constructor(firstName, lastName, age, country, city) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.country = country;
//     this.city = city;
//     this.score = 0;
//     this.skills = [];
//   }
//   getFullName() {
//     const fullName = this.firstName + ' ' + this.lastName;
//     return fullName;
//   }
//   //Getter
//   get getScore() {
//     return this.score;
//   }
//   //Getter
//   get getSkills() {
//     return this.skills;
//   }
// }
// const pessoa1 = new Person('Nosdaj', 'Arievilo', 2032, 'Lhorien', 'Valfenda');
// const pessoa2 = new Person(
//   'Julio',
//   'Zampier',
//   2123,
//   'Papapitone',
//   'Paulanopolis'
// );
// console.log(pessoa1.getScore); //dont need () to call getter method
// console.log(pessoa1.getSkills);
// console.log(pessoa2.getScore);
// console.log(pessoa2.getSkills);

//? Setter : Allow us to modify the value of certain properties.
//? Syntax: set setPropertyName(value)

// class Person {
//   constructor(firstName, lastName, age, country, city) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.country = country;
//     this.city = city;
//     this.score = 0;
//     this.skills = [];
//   }
//   getFullName() {
//     const fullName = this.firstName + ' ' + this.lastName;
//     return fullName;
//   }
//   //Getter
//   get getScore() {
//     return this.score;
//   }
//   //Getter
//   get getSkills() {
//     return this.skills;
//   }

//   //Setter
//   set setScore(valor) {
//     this.score += valor;
//   }

//   set setSkills(habilidade) {
//     this.skills.push(habilidade);
//   }
// }
// const pessoa1 = new Person('Nosdaj', 'Arievilo', 2032, 'Lhorien', 'Valfenda');
// const pessoa2 = new Person(
//   'Julio',
//   'Zampier',
//   2123,
//   'Papapitone',
//   'Paulanopolis'
// );

// pessoa1.setScore = 10;
// pessoa1.setSkills = 'HTML';
// pessoa1.setSkills = 'CSS';
// pessoa1.setSkills = 'JS';

// pessoa2.setScore = 30;
// pessoa2.setSkills = 'Dialog';
// pessoa2.setSkills = 'Strategy';
// pessoa2.setSkills = 'Gaming';

// console.log(pessoa1.getScore);
// console.log(pessoa2.getScore);

// console.log(pessoa1.getSkills);
// console.log(pessoa2.getSkills);

// pessoa2.setScore = 100;
// console.log(pessoa2.getScore);

// class Person {
//   constructor(firstName, lastName, age, country, city) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.country = country;
//     this.city = city;
//     this.score = 0;
//     this.skills = [];
//   }
//   getFullName() {
//     const fullName = this.firstName + ' ' + this.lastName;
//     return fullName;
//   }
//   get getScore() {
//     return this.score;
//   }
//   get getSkills() {
//     return this.skills;
//   }
//   set setScore(valor) {
//     this.score += valor;
//   }
//   set setSkills(habilidade) {
//     this.skills.push(habilidade);
//   }

//   getPersonInfo() {
//     let fullName = this.getFullName();
//     let skills =
//       this.skills.length > 0 &&
//       this.skills.slice(0, this.skills.length - 1).join(', ') +
//         ` and ${this.skills[this.skills.length - 1]}`;
//     let formattedSkills = skills ? `He knows ${skills}` : '';
//     let info = `${fullName} is ${this.age} years old. He lives in ${this.city}, ${this.country}. ${formattedSkills}`;
//     return info;
//   }
// }

// const pessoa1 = new Person('Nosdaj', 'Arievilo', 2032, 'Lhorien', 'Valfenda');
// const pessoa2 = new Person(
//   'Julio',
//   'Zampier',
//   2123,
//   'Papapitone',
//   'Paulanopolis'
// );
// const pessoa3 = new Person('Power', 'Guido', 112, 'Simas Turbo', 'Rolalandia');

// pessoa1.setScore = 100;
// pessoa1.setSkills = 'HTML';
// pessoa1.setSkills = 'CSS';
// pessoa1.setSkills = 'JavaScript';

// pessoa2.setScore = 24;
// pessoa2.setSkills = 'Sass';
// pessoa2.setSkills = 'TypeScript';
// pessoa2.setSkills = 'SQL';

// console.log(pessoa1.getScore);
// console.log(pessoa2.getScore);

// console.log(pessoa1.getSkills);
// console.log(pessoa2.getSkills);
// console.log(pessoa3.getSkills);

// console.log(pessoa1.getPersonInfo());
// console.log(pessoa2.getPersonInfo());
// console.log(pessoa3.getPersonInfo());

//? Static Methods : Methods that are not tied to any instance of a class.
class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
    this.score = 0;
    this.skills = [];
  }
  getFullName() {
    const fullName = this.firstName + ' ' + this.lastName;
    return fullName;
  }
  get getScore() {
    return this.score;
  }
  get getSkills() {
    return this.skills;
  }
  set setScore(valor) {
    this.score += valor;
  }
  set setSkills(habilidade) {
    this.skills.push(habilidade);
  }

  getPersonInfo() {
    let fullName = this.getFullName();
    let skills =
      this.skills.length > 0 &&
      this.skills.slice(0, this.skills.length - 1).join(', ') +
        ` and ${this.skills[this.skills.length - 1]}`;
    let formattedSkills = skills ? `He knows ${skills}` : '';
    let info = `${fullName} is ${this.age} years old. He lives in ${this.city}, ${this.country}. ${formattedSkills}`;
    return info;
  }

  static favoriteSkill() {
    const skills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Sass', 'SQL'];
    const index = Math.floor(Math.random() * skills.length);
    return skills[index];
  }

  static showDateTime() {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let date = now.getDate();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    if (hours < 10) {
      hours = '0' + hours;
    }
    if (minutes < 10) {
      minutes = '0' + minutes;
    }

    let dateMonthYear = date + '.' + month + '.' + year;
    let time = hours + ':' + minutes;
    let fullTime = dateMonthYear + ' ' + time;
    return fullTime;
  }
}
// chamei o metodo sem precisar de instanciar a classe
console.log(Person.favoriteSkill());
console.log(Person.showDateTime());

//? Inheritance : Allows us to inherit the properties and methods of a class.
/* Syntax:
class ChildClass extends ParentClass{
  saySomething() {
    console.log('I am a child of the person class')
  }
} */
// class Student extends Person{
//   saySomething(){
//     console.log('Im a child of the Person class');
//   }
// }

// const st1 = new Student('Nosdaj', 'Arievilo', 2032, 'Lhorien', 'Valfenda');
// console.log(st1);
// console.log(st1.saySomething());
// console.log(st1.getFullName());
// console.log(st1.getPersonInfo());

//? Overriding methods : Allows us to override and customize methods of a
//? parent class.
class Student extends Person {
  constructor(firstName, lastName, age, country, city, gender) {
    //* super() are parameters from the parent class
    super(firstName, lastName, age, country, city);
    this.gender = gender;
  }

  saySomething() {
    console.log(`I'm a child of the Person Class`);
  }
  getPersonInfo() {
    let fullName = this.getFullName();
    let skills =
      this.skills.length > 0 &&
      this.skills.slice(0, this.skills.length - 1).join(', ') +
        ` and ${this.skills[this.skills.length - 1]}`;
    let formattedSkills = skills ? `He knows ${skills}` : '';
    let pronoun = this.gender == 'Male' ? 'He' : 'She';
    let info = `${fullName} is ${this.age} years old. ${pronoun} lives in ${this.city}, ${this.country}. ${formattedSkills}`;
    return info;
  }
}
const st1 = new Student(
  'Paula',
  'Tejano',
  21,
  'Kemmel Pinto',
  'São Paulo',
  'Female'
);
const st2 = new Student(
  'Kuka',
  'Beludo',
  58,
  'Brazoland',
  'Fazenda Pitanga',
  'Male'
);
st1.setScore = 1;
st1.setSkill = 'HTML';
st1.setSkill = 'CSS';
st1.setSkill = 'JavaScript';

st2.setScore = 1;
st2.setSkill = 'Planning';
st2.setSkill = 'Managing';
st2.setSkill = 'Organizing';

console.log(st1);
console.log(st1.saySomething());
console.log(st1.getFullName());
console.log(st1.getPersonInfo());

console.log(st2.saySomething());
console.log(st2.getFullName());
console.log(st2.getPersonInfo());

//! Day 15 Exercises
