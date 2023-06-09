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

function applyLiStyles(li) {
  li.style.fontSize = '16px';
  li.style.paddingRight = '350px';
  li.style.margin = '5px';
  li.style.listStyleType = 'none';
  li.style.fontFamily = 'Roboto';
}

function applyLiStatusStyles(li) {
  if (li.innerText.includes('Done')) {
    li.style.backgroundColor = '#21BF73';
    li.style.borderLeft = '10px solid #21BF73';
    li.style.borderTop = '20px solid #21BF73';
    li.style.borderBottom = '20px solid #21BF73';
  } else if (li.innerText.includes('Ongoing')) {
    li.style.backgroundColor = '#FDDB3A';
    li.style.borderLeft = '10px solid #FDDB3A';
    li.style.borderTop = '20px solid #FDDB3A';
    li.style.borderBottom = '20px solid #FDDB3A';
  } else {
    li.style.backgroundColor = '#EB695B';
    li.style.borderLeft = '10px solid #EB695B';
    li.style.borderTop = '20px solid #EB695B';
    li.style.borderBottom = '20px solid #EB695B';
  }
}

function initializeClock() {
  const wrapper = document.querySelector('.wrapper');
  const year = document.querySelector('#year');
  const list1 = wrapper.querySelector('ul');
  const mainTitle = document.querySelector('#main-title');
  const dateAndTime = document.createElement('span');
  const subtitle = document.querySelector('.h2-title');
  const liElements = document.querySelectorAll('li');

  dateAndTime.className = 'outer-span';
  dateAndTime.id = 'date-and-time';
  dateAndTime.style.fontSize = '20px';
  dateAndTime.style.fontFamily = 'Roboto';

  wrapper.style.display = 'grid';
  wrapper.style.justifyItems = 'center';
  subtitle.style.fontSize = '15px';
  subtitle.style.fontFamily = 'Roboto';
  subtitle.style.fontWeight = 'bold';
  subtitle.style.textDecoration = 'underline';
  subtitle.style.color = 'blue';
  mainTitle.style.fontFamily = 'Roboto';
  mainTitle.style.fontSize = '18px';
  mainTitle.style.fontWeight = 'bold';
  year.style.fontSize = '60px';
  year.style.fontFamily = 'Sans';
  year.style.fontWeight = 'bold';

  wrapper.insertBefore(dateAndTime, list1);

  liElements.forEach((li) => {
    applyLiStyles(li);
    applyLiStatusStyles(li);
  });

  setInterval(() => {
    updateDateAndTime(dateAndTime);
    changeTextColor(year);
  }, 1000);
}

initializeClock();
