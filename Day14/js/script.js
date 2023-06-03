//! Error handling
/* try {
  // code that may throw an error
} catch (err) {
  // code to be executed if an error occurs
} finally {
  // code to be executed regardless of an error occurs or not
} */

/* try {
  let lastName = 'Yetayeh'
  let fullName = fistName + ' ' + lastName
} catch (err) {
  console.log(err)
} */

/* try{
  let lastName = 'Zampier'
  let fullName = firstName + ' ' + lastName
} catch(err){
  console.error(err)
} finally {
  console.log('De qualquer forma eu sou executado');
} */

/* try {
  let lastName = 'Zampier';
  let fullName = firstName + ' ' + lastName;
} catch (error) {
  console.error('Name of the error:', error.name);
  console.error('Error message:', error.message);
} finally {
  console.log('De qualquer forma eu sou executado');
}
 */

//? Throw: Creates a custom error
// throw 'Error2' // generates an exception with a string value
// throw 42 // generates an exception with the value 42
// throw true // generates an exception with the value true
// throw new Error('Required') // generates an error object with the message of Required
/* const throwErrorExempleFunc = () => {
  let x = prompt('Enter a number: ');
  try {
    if (x == '') throw 'empty';
    if (isNaN(x)) throw 'not a number';
    x = Number(x);
    if (x < 5) throw 'too low';
    if (x > 10) throw 'too high';
  } catch (err) {
    console.error(err);
  }
};
throwErrorExempleFunc();
 */

//?Error types
//* Reference error : When a variable is not declared
// let firstName = 'Julio';
// let fullName = firstName + ' ' + lastName;
// console.log(fullName);
//* SyntaxError: syntax isn't right
// let square = 2 x 2
// console.log(square);
// console.log('Hello, world");
//* TypeError: a type error has occurred (erro de tipagem)
let num = 10;
console.log(num.toUpperCase());
