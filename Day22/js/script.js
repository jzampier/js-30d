//! Creating an Element (just creates but does not append to the DOM)
// const h1 = document.createElement('h1');
// const title = document.createElement('h1');
// title.className = 'title';
// title.style.fontSize = '50px';
// title.textContent = 'Creating HTML element DOM';

//? Creating multiple elements and appending them to the parent element

// const createTitle = (index) => {
//   const title = document.createElement('h1');
//   title.className = 'title';
//   title.style.fontSize = '25px';
//   title.textContent = `Element number ${index + 1} / array index ${index}`;
//   return title;
// };

// for (let i = 0; i < 3; i++) {
//   const title = createTitle(i);
//   document.body.appendChild(title);
// }

function isPrime(number) {
  if (number < 2) {
    return false;
  }

  const sqrtNumber = Math.sqrt(number);

  for (let i = 2; i <= sqrtNumber; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

const body = document.querySelector('body');
const title = document.createElement('div');
const title2 = document.createElement('div');
const title3 = document.createElement('div');
const container = document.getElementById('container');
title.id = 'title-1';
title.textContent = 'Number Generator';
title2.id = 'title-2';
title2.textContent = '30DaysOfJavaScriptDOM Day 2';
title3.id = 'title-3';
title3.textContent = 'Author: Julio Zampier';
body.insertAdjacentElement('afterbegin', title3);
body.insertAdjacentElement('afterbegin', title2);
body.insertAdjacentElement('afterbegin', title);
for (let i = 0; i <= 101; i++) {
  const number = document.createElement('div');
  number.textContent = i;
  number.classList.add('number');

  if (i % 2 === 0) {
    number.classList.add('even');
  } else {
    number.classList.add('odd');
  }

  if (isPrime(i)) {
    number.classList.add('prime');
  }

  container.appendChild(number);
}
