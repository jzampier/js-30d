//generates random colors
function generateRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const changingText = document.getElementById('changingText');

setInterval(() => {
  const randomColor = generateRandomColor();
  changingText.style.color = randomColor;
}, 1000);
