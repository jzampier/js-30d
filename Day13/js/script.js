//Showing output on browser console
console.log('30 Days of JavaScript');

//Substitution
console.log('%d %s of JavaScript', 30, 'Days');
let day = 30;
let txt = 'Days';
console.log('%d %s of JavaScript', day, txt);

//CSS
//Styling
console.log('%c30 Days of JavaScript', 'color: red; font-size: 30px');
console.log(
  '%c30 Days%c %cOf%c %cJavaScript%c',
  'color:green',
  '',
  'color:red',
  '',
  'color:yellow'
);
