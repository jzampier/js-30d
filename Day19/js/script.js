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
/* function getUserInfo() {
  let nome = 'RaFaeL';

  function convertToLower() {
    return nome.toLowerCase();
  }

  function convertToUpper() {
    return nome.toUpperCase();
  }

  function capitalizeName() {
    return nome.substring(0, 1).toUpperCase() + nome.substring(1).toLowerCase();
  }

  return {
    low: convertToLower(),
    up: convertToUpper(),
    cap: capitalizeName(),
  };
}

const user = getUserInfo();
console.log(user.low, user.up, user.cap);
 */
// let name = 'juliozampier';
// let sub = name.substring(0, 1).toUpperCase() + name.substring(1).toLowerCase();
// let sub2 = name.substring(0, 5).toUpperCase();
// let sub3 = name.substring(5, name.length - 3).toLowerCase();

// console.log(sub2, sub3);

/*
Exercises: Level 3
Create a personAccount out function. It has firstname, lastname, incomes,
expenses inner variables. It has totalIncome, totalExpense, accountInfo,
addIncome, addExpense and accountBalance inner functions.
Incomes is a set of incomes and its description and expenses is also a set of 
expenses and its description.
 */
function personAccount() {
  let firstname = 'Nosdaj';
  let lastname = 'Arievilo';
  const incomes = [];
  const expenses = [];

  function addIncome(description, value) {
    incomes.push({ description, value });
    return incomes;
  }

  function addExpense(description, value) {
    expenses.push({ description, value });
    return expenses;
  }

  function totalIncome() {
    let total = 0;
    for (let i = 0; i < incomes.length; i++) {
      total += incomes[i].value;
    }
    return total;
  }

  function totalExpense() {
    let total = 0;
    for (let i = 0; i < expenses.length; i++) {
      total += expenses[i].value;
    }
    return total;
  }

  function accountBalance() {
    return totalIncome() - totalExpense();
  }

  function accountInfo() {
    console.log(firstname, lastname);
    console.log('Incomes:', incomes);
    console.log('Expenses:', expenses);
    console.log('Total Income:', totalIncome());
    console.log('Total Expense:', totalExpense());
    console.log('Account Balance:', accountBalance());
  }
  return { addIncome, addExpense, accountInfo };
}
const contaNosdaj = personAccount();
contaNosdaj.addIncome('Salary', 2000);
contaNosdaj.addIncome('Bonus', 2000);
contaNosdaj.addExpense('Pastel', 2005);
contaNosdaj.accountInfo();

// function createPersonAccount() {
//   let firstName = 'Nosdaj';
//   let lastName = 'Arievilo';
//   const incomes = [];
//   const expenses = [];

//   function addIncome(description, value) {
//     incomes.push({ description, value });
//     return incomes;
//   }

//   function addExpense(description, value) {
//     expenses.push({ description, value });
//     return expenses;
//   }

//   function calculateTotalIncome() {
//     let total = 0;
//     for (let i = 0; i < incomes.length; i++) {
//       total += incomes[i].value;
//     }
//     return total;
//   }

//   function calculateTotalExpense() {
//     let total = 0;
//     for (let i = 0; i < expenses.length; i++) {
//       total += expenses[i].value;
//     }
//     return total;
//   }

//   function calculateAccountBalance() {
//     return calculateTotalIncome() - calculateTotalExpense();
//   }

//   function displayAccountInfo() {
//     console.log('First Name:', firstName);
//     console.log('Last Name:', lastName);
//     console.log('Incomes:', incomes);
//     console.log('Expenses:', expenses);
//     console.log('Total Income:', calculateTotalIncome());
//     console.log('Total Expense:', calculateTotalExpense());
//     console.log('Account Balance:', calculateAccountBalance());
//   }

//   return {
//     addIncome,
//     addExpense,
//     displayAccountInfo,
//   };
// }

// const personAccount = createPersonAccount();
// personAccount.addIncome('Salary', 3000);
// personAccount.addIncome('Bonus', 3000);
// personAccount.addIncome('Terreno', 33000);
// personAccount.addExpense('Rent', 1000);
// personAccount.addExpense('Groceries', 500);
// personAccount.addExpense('energy', 1500);
// personAccount.displayAccountInfo();
