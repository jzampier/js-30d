// //*Getting elements by tag name
// //syntax
// //* document.getElementsByTagName('tagname')

// const allTitles = document.getElementsByTagName('h1');
// console.log(allTitles);
// console.log(allTitles.length);

// for (let i = 0; i < allTitles.length; i++) {
//   console.log(allTitles[i]);
// }
// console.clear();

// //*Getting elements by class name
// //* document.getElementsByClassName('classname')

// const allTitles2 = document.getElementsByClassName('title');
// console.log(`LOG ~ allTitles2:`, allTitles2);
// console.log(`length:`, allTitles2.length);

// for (let i = 0; i < allTitles2.length; i++) {
//   console.log(allTitles2[i]);
// }
// console.clear();

// /*
//  * Getting an element by ID
//  * document.getElementById('idname')
//  */

// let firstTitle = document.getElementById('first-title');
// console.log(firstTitle);
// console.clear();
// /*
//  * Getting elements by query selector
//  * document.querySelector('h1')
//  */

// let firstTitle3 = document.querySelector('h1');
// let firstTitle4 = document.querySelector('#first-title');
// let firstTitle5 = document.querySelector('.title');
// console.log(firstTitle3);
// console.log(firstTitle4);
// console.log(firstTitle5);

// console.clear();

// /*
// *Getting elements by query selector all, returns a nodelist (accept array methods)
// ? document.querySelectorAll('h1')
//  */

// const allTitles3 = document.querySelectorAll('h1');
// console.log(allTitles3.length);
// // for (const title of allTitles3) {
// //   console.log(title);
// // }
// allTitles3.forEach((title) => console.log(title));

// console.clear();

// //! Adding attribute
// const titles = document.querySelectorAll('h1');
// console.log(titles);
// titles[3].className = 'title';
// titles[3].id = 'fourth-title';
// console.log(titles);

// console.clear();
// //? Adding attribute with setAttribute
// titles[3].setAttribute('class', 'title');
// titles[3].setAttribute('id', 'fourth-title');
// console.log(titles[3]);

// console.clear();

// //* Adding class using classList (doesn't override the original class)
// titles[3].classList.add('title', 'header-title');
// console.log(titles[3]);

// console.clear();

// //! Removing class classList.remove('title','header-title')
// titles[3].classList.remove('title', 'header-title');
// console.log(titles[3]);
// console.clear();
// /*
// ? Adding Text to HTML element
// */

// //! elemento.textContent = 'texto'

// const titles2 = document.querySelectorAll('h1');
// titles2[3].textContent = 'Nosdaj Arievilo';

// //! .innerHTML  can add text or html elements, elements as a child
// const ul = document.querySelector('ul');
// const lists = `
// <li>30DaysOfPython Challenge Done</li>
//         <li>30DaysOfJavaScript Challenge Ongoing</li>
//         <li>30DaysOfReact Challenge Coming</li>
//         <li>30DaysOfFullStack Challenge Coming</li>
//         <li>30DaysOfDataAnalysis Challenge Coming</li>
//         <li>30DaysOfReactNative Challenge Coming</li>
//         <li>30DaysOfMachineLearning Challenge Coming</li>`;
// ul.innerHTML = lists;

// //! removing child element using .innerHTML
// ul.innerHTML = '';

// //? Adding styles to HTML elements

// //? style.color, style.fontSize and style.backgroundColor
// titles.forEach((title, i) => {
//   if (i % 2 === 0) {
//     title.style.color = 'green';
//     title.style.backgroundColor = 'black';
//     title.style.fontSize = '30px';
//   } else {
//     title.style.color = 'red';
//     title.style.backgroundColor = 'yellow';
//     title.style.fontSize = '50px';
//   }
// });

/*
1 Create an index.html file and put four p elements as above: Get the first
paragraph by using document.querySelector(tagname) and tag name
 */
// const firstPar = document.querySelector('p');
// console.log(firstPar.innerText);

/* 2 Get each of the the paragraph using document.querySelector('#id') and by 
their id
 */
let para1 = document.querySelector('#first-paragraph');
let para2 = document.querySelector('#second-paragraph');
let para3 = document.querySelector('#third-paragraph');
console.log(para1.innerText, para2.innerText, para3.innerText);

/* 3 */
