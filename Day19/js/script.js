//! Closure
/*
? Closure is a function having access to the parent scope, even after the
? parent function has closed.
*/
/* Example
function outer() {
  let counter = 0
  function inner(){
    counter++
    return counter
  }
  return inner
}
const innerFunc = outer()

console.log(innerFunc())
console.log(innerFunc())
console.log(innerFunc())
*/
// function outerFunction() {
//   let count = 0;
//   function plusOne() {
//     count++;
//     return count;
//   }
//   function minusOne() {
//     count--;
//     return count;
//   }
//   return { maisUm: plusOne(), menosUm: minusOne() };
// }
// const innerFunctions = outerFunction();

// console.log(innerFunctions.maisUm, innerFunctions.menosUm);
// console.log(innerFunctions.maisUm, innerFunctions.menosUm);
// console.log(innerFunctions.maisUm, innerFunctions.menosUm);
// console.log(innerFunctions.maisUm, innerFunctions.menosUm);
// console.log(innerFunctions.maisUm, innerFunctions.menosUm);

//! Exercises
//!Lv1
//1 Create a closure which has one inner function
function outerFunction() {
  let mult = 1;
  function innerFunction() {
    for (let i = 1; i < 10; i++) {
      mult *= i;
    }
    return mult;
  }
  return innerFunction;
}
const innerFunc = outerFunction();
console.log(innerFunc());

/*
Exercises: Level 2
1- Create a closure which has three inner functions
 */
function getUserInfo() {
  let nome = 'RaFaeL';

  function convertToLower() {
    return nome.toLowerCase();
  }

  function convertToUpper() {
    return nome.toUpperCase();
  }

  function capitalizeName() {
    return nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();
  }

  return {
    low: convertToLower(),
    up: convertToUpper(),
    cap: capitalizeName(),
  };
}

const user = getUserInfo();
console.log(user.low, user.up, user.cap);
