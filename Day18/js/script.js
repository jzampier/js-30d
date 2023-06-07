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

// const url = 'https://restcountries.com/v2/all';

// const fetchData = async () => {
//   try {
//     const response = await fetch(url);
//     //verificador de status da requisição
//     if (!response.ok) {
//       //lanca erro caso nao tenha sucesso na requisição
//       throw new Error('Failed to fetch data');
//     }
//     const countries = await response.json();
//     return countries;
//   } catch (error) {
//     console.error(error);
//   }
// };

//! Day 18 Exercises
//! Lv1
//1 - Read the countries API using fetch and print the name of country, capital,
// languages, population and area.
// const url = 'https://restcountries.com/v2/all';

// const fetchCountriesData = async () => {
//   try {
//     //espera o fetch(url) para guardar na const response
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error('Failed to fetch data');
//     }
//     const countries = await response.json();
//     return countries;
//   } catch (error) {
//     console.error(error);
//   }
// };

// const displayCountryDetails = (country) => {
//   const { name, capital, languages, population, area } = country;
//   //transforma o array de linguagens em uma string (senao o resultado fica [objeto, objeto])
//   const languagesList = languages.map((language) => language.name);
//   console.log(`País: ${name}`);
//   console.log(`Capital: ${capital}`);
//   console.log(`Linguagens: ${languagesList.join(', ')}`);
//   console.log(`População: ${population}`);
//   console.log(`Área: ${area}`);
//   console.log('---');
// };

// (async () => {
//   try {
//     //espera o fetchCountriesData recuperar os dados
//     const countriesData = await fetchCountriesData();
//     //percorre cada pais e aplica a funcao displayCountryDetails
//     countriesData.forEach((country) => {
//       displayCountryDetails(country);
//     });
//   } catch (error) {
//     console.error(error);
//   }
// })();

//! Lv2
// const catsAPI = 'https://api.thecatapi.com/v1/breeds';

//1 Print out all the cat names in to catNames variable.
// const fetchCats = async () => {
//   try {
//     const response = await fetch(catsAPI);
//     if (!response.ok) {
//       throw new Error('Failed to fetch data from url');
//     }
//     console.log('Success on fetching data from url');
//     const cats = await response.json();
//     //console.log(cats);
//     return cats;
//   } catch (error) {
//     console.error(error);
//   }
// };
//fetchCats();

// const displayCatNames = (cats) => {
//   console.log('----Cats Names----');
//   cats.forEach((cat) => {
//     console.log(cat.name);
//   });
// };

// const olhaAGataiada = async () => {
//   try {
//     const catsData = await fetchCats();
//     displayCatNames(catsData);
//   } catch (error) {
//     console.error(error);
//   }
// };

// olhaAGataiada();

//! LV3
//1 Read the cats api and find the average weight of cat in metric unit.
// const calculatesCatAverageWeight = (cats) => {
//   cats.forEach((cat) => {
//     const numPatern = /[0-9]/g;
//     /* calculates avgw using the patern above, returning an array of numbers,
//     reducing it to a single number and then dividing it by 2 */
//     const avgWeight =
//       cat.weight.metric
//         .match(numPatern)
//         .map((string) => parseInt(string))
//         .reduce((acc, curr) => acc + curr) / 2;
//     console.log('Name:', cat.name, '/ Avg weight (kg):', avgWeight);
//   });
// };
// const pesoDaGataiada = async () => {
//   try {
//     const catsData = await fetchCats();
//     calculatesCatAverageWeight(catsData);
//   } catch (error) {
//     console.error(error);
//   }
// };
//pesoDaGataiada();
const catsAPI = 'https://api.thecatapi.com/v1/breeds';

//conecta com a api e retorna os dados em json
const fetchCats = async () => {
  try {
    const response = await fetch(catsAPI);
    if (!response.ok) {
      throw new Error('Failed to fetch data from the API');
    }
    const cats = await response.json();
    return cats;
  } catch (error) {
    console.error(error);
  }
};

//calcula o peso medio de cada gato, recebe como parametro a key
// cat.weight.metric
const calculateAverageWeight = (weight) => {
  const numbers = weight.match(/\d+/g).map(Number);
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  const average = sum / numbers.length;
  return average.toFixed(2);
};

//Exibe o nome do gato e seu peso medio, recebe como parametro o objeto cat
//que eh passado automaticamente pela funcao forEach quando aplicada no array
//catsData
const displayCatAverageWeight = (cat) => {
  const avgWeight = calculateAverageWeight(cat.weight.metric);
  console.log(`Name: ${cat.name} / Avg weight (kg): ${avgWeight}`);
};

//Espera o fetchCats() retornar os dados e aplica a funcao displayCatAverageWeight
const getPesoDaGataiada = async () => {
  try {
    const catsData = await fetchCats();
    catsData.forEach(displayCatAverageWeight);
  } catch (error) {
    console.error(error);
  }
};
//getPesoDaGataiada();

//2 Read the countries api and find out the 10 largest countries
// const url = 'https://restcountries.com/v3/all';

// const fetchCountriesData = async () => {
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error('Failed to fetch data');
//     }
//     const resposta = await response.json();
//     console.log(resposta);
//     return resposta;
//   } catch (error) {
//     console.error(error);
//   }
// };

const sortLargestCountries = (countries) => {
  return countries
    .slice()
    .sort((a, b) => parseInt(b.area) - parseInt(a.area))
    .slice(0, 10);
};

const displayLargestCountries = (countries) => {
  countries.forEach((country) => {
    console.log(`Name: ${country.name.official} / Area: ${country.area}`);
  });
};

const getLargestCountries = async () => {
  try {
    const countriesData = await fetchCountriesData();
    const largestCountries = sortLargestCountries(countriesData);
    displayLargestCountries(largestCountries);
  } catch (error) {
    console.error(error);
  }
};
//getLargestCountries();
//3 Read the countries api and count total number of languages in the world used as officials.
// const url = 'https://restcountries.com/v2/all';

// const fetchCountriesData = async () => {
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error('Failed to fetch data');
//     }
//     const resposta = await response.json();
//     return resposta;
//   } catch (error) {
//     console.error(error);
//   }
// };
// const countLanguages = (countries) => {
//   const languageCount = {};
//   const countryLanguages = countries.map((country) => country.languages);
//   countryLanguages.forEach((arrOfLanguages) => {
//     arrOfLanguages.forEach((language) => {
//       languageCount[language.name] = (languageCount[language.name] || 0) + 1;
//     });
//   });
//   const languageArray = Object.keys(languageCount).map((language) => ({
//     language,
//     count: languageCount[language],
//   }));
//   const sortedLanguages = languageArray.sort((a, b) => b.count - a.count);
//   return sortedLanguages.slice(0, 10);
// };

// const getTenMostSpokenLanguages = async () => {
//   try {
//     const countriesData = await fetchCountriesData();
//     const spokenLanguages = countLanguages(countriesData);
//     console.log(spokenLanguages);
//   } catch (error) {
//     console.error(error);
//   }
// };
// getTenMostSpokenLanguages();

const url = 'https://restcountries.com/v2/all';

const fetchCountriesData = async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

const countLanguages = (countries) => {
  const languageCount = {};
  countries.forEach((country) => {
    country.languages.forEach((language) => {
      languageCount[language.name] = (languageCount[language.name] || 0) + 1;
    });
  });
  const languageArray = Object.entries(languageCount).map(
    ([language, count]) => ({
      language,
      count,
    })
  );
  const sortedLanguages = languageArray.sort((a, b) => b.count - a.count);
  return sortedLanguages.slice(0, 10);
};

const displayLanguages = (languages) => {
  languages.forEach((language) => {
    console.log(`Language: ${language.language} / Count: ${language.count}`);
  });
};

const getTenMostSpokenLanguages = async () => {
  try {
    const countriesData = await fetchCountriesData();
    const spokenLanguages = countLanguages(countriesData);
    displayLanguages(spokenLanguages);
  } catch (error) {
    console.error(error);
  }
};

getTenMostSpokenLanguages();
