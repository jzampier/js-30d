//! Promises
//* Promises are used to handle asynchronous operations in JavaScript.
//? Syntax
/* const myPromise = new Promise((resolve, reject)=>{
    if(condition){
        resolve('Deu certo! Funcionou!')
    }else{
        reject('Nao deu certo! Nao funcionou')
    }
})
* qdo o myPromise for resolvido, ele vai chamar o resolve
myPromise.then((data)=>{
  console.log(data)
})
* qdo o myPromise for rejeitado, ele vai chamar o reject com catch
myPromise.then((data)=>{}).catch((err)=>{})
*/
//? Callbacks
/* 
const doSomething = (callback) => {
  setTimeout(() => {
    const skills = ['JavaScript', 'HTML', 'CSS'];
    //callback('It did not go well', skills); //? err is true
    callback(false, skills);
  }, 2000);
};
const callback = (err, result) => {
  if (err) {
    return console.error(err);
  }
  return console.log(result);
};
doSomething(callback);
*/

//? Promise constructor

// const myPromise = new Promise((resolve, reject) => {
//   resolve('Deu certo!');
//   reject('Fudeu!');
// });

//? Example
/* 
const doPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    //const skills = ['JavaScript', 'HTML', 'CSS'];
    const skills = [];
    if (skills.length > 0) {
      resolve(skills);
    } else {
      reject('Algo errado nao deu certo');
    }
  }, 2000);
});
doPromise
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
 */
// const doPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const skills = ['JavaScript', 'HTML', 'CSS'];
//     if (skills.includes('Node')) {
//       resolve('fullstack developer');
//     } else {
//       reject('Something wrong has happened');
//     }
//   }, 2000);
// });
// doPromise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//! Fetch API
//* Fetch API is used to make HTTP requests.

// const url = 'https://restcountries.com/v2/all';
// fetch(url)
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//! Async/Await
//* Async/Await is a syntax sugar for promises. (an elegant way to handle promises)

// const square = async function (n) {
//   return n * n;
// };
// const calcSq = async function (num) {
//   const value = await square(num);
//   console.log(value);
// };
// calcSq(5);

//?exampies

const url = 'https://restcountries.com/v2/all';

const fetchData = async () => {
  try {
    const response = await fetch(url);
    //verificador de status da requisição
    if (!response.ok) {
      //lanca erro caso nao tenha sucesso na requisição
      throw new Error('Failed to fetch data');
    }
    const countries = await response.json();
    return countries;
  } catch (error) {
    console.error(error);
  }
};

//! Day 18 Exercises
//! Lv1
//1 - Read the countries API using fetch and print the name of country, capital,
// languages, population and area.
(async () => {
  try {
    const countriesData = await fetchData();
    countriesData.forEach((country) => {
      const { name, capital, languages, population, area } = country;
      const languagesList = languages.map((language) => language.name);
      console.log(`País: ${name}`);
      console.log(`Capital: ${capital}`);
      console.log(`Linguagens: ${languagesList.join(', ')}`);
      console.log(`População: ${population}`);
      console.log(`Área: ${area}`);
      console.log('---');
    });
  } catch (error) {
    console.error(error);
  }
})();
