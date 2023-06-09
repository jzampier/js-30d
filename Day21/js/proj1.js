// function generateRandomColor() {
//   const letters = '0123456789ABCDEF';
//   let color = '#';
//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }
// function changeTextColor(text) {
//   const randomColor = generateRandomColor();
//   text.style.color = randomColor;
// }
// const year = document.querySelector('#year');
// setInterval(changeTextColor(year), 1000);

function generateRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeTextColor(textElement) {
  const randomColor = generateRandomColor();
  textElement.style.color = randomColor;
}

function updateDateAndTime(containerElement) {
  const currentTime = new Date();
  containerElement.innerText = currentTime.toLocaleString();
  const randomColor = generateRandomColor();
  containerElement.style.backgroundColor = randomColor;
}

function tasks() {
  updateDateAndTime(dateAndTime);
  changeTextColor(year);
}

// get parent element
const wrapper = document.querySelector('.wrapper');
const year = document.querySelector('#year');
const list1 = wrapper.querySelector('ul');
// get all li spans
const liSpans = document.querySelectorAll('li span');
// create date and time element
const dateAndTime = document.createElement('span');
dateAndTime.className = 'outer-span';
dateAndTime.id = 'date-and-time';

const testListElement = document.querySelector('#le-1');
testListElement.style.backgroundColor = '#EB695B';
testListElement.style.fontSize = '20px';
testListElement.style.borderLeft = '10px solid #EB695B';
testListElement.style.borderTop = '20px solid #EB695B';
testListElement.style.borderBottom = '20px solid #EB695B';
testListElement.style.paddingRight = '350px';
testListElement.style.margin = '5px';
testListElement.style.listStyleType = 'none';
// add date and time element to parent element
wrapper.insertBefore(dateAndTime, list1);

//? styles
//wrapper
wrapper.style.display = 'grid';
wrapper.style.justifyItems = 'center';
//wrapper

year.style.fontSize = '60px';
year.style.fontFamily = 'Sans';
dateAndTime.style.fontSize = '20px';

setInterval(() => {
  tasks();
}, 1000);
