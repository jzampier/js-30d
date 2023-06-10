//! Event Listeners
/*
elemento.addEventListener('click', função);
elemento.addEventListener('pointerdown', função); (touch, left-click, right-click, middle-click) in one listener
elemento.addEventListener('click', função);
elemento.addEventListener('submit', função);
pointerDown (::: pointer down event :::)
pointerUp    ::: pointer up event :::
click - when the element clicked
dblclick - when the element double clicked
mouseenter - when the mouse point enter to the element
mouseleave - when the mouse pointer leave the element
mousemove - when the mouse pointer move on the element
mouseover - when the mouse pointer move on the element
mouseout -when the mouse pointer out from the element
input -when value enter to input field
change -when value change on input field
blur -when the element is not focused
keydown - when a key is down
keyup - when a key is up
keypress - when we press any key
onload - when the browser has finished loading a page
*/
// const btn = document.querySelector('#button-1');
// btn.addEventListener('pointerdown', () => {
//   alert('Mi cricaram!!!');
// });
function getInputInfo(inputElement) {
  //?get element value
  const inputValue = inputElement.value;

  console.log(inputValue.toUpperCase());
}

const miCrica = () => {
  alert('Mi anexaram ao HTML e despois mi Cricaram');
};

const btnDoubleClick = document.querySelector('#button-2');
// btnDoubleClick.addEventListener('dblclick', (e) => {
//   console.log('e gives the event listener object:', e);
//   console.log('e.target gives the selected element:', e.target);
//   console.log(
//     'e.target.textContent gives content of selected element:',
//     e.target.textContent
//   );
// });

const btnMouseenter = document.querySelector('#button-3');
btnMouseenter.addEventListener('mouseenter', (e) => {
  console.log('e gives the event listener object:', e);
  console.log('e.target gives the selected element:', e.target);
  console.log(
    'e.target.textContent gives content of selected element:',
    e.target.textContent
  );
});

const inputFieldName = document.querySelector('#input-name');
const paragraph = document.querySelector('#parag');
btnDoubleClick.addEventListener('dblclick', () => {
  getInputInfo(inputFieldName);
});
//need enter to work
inputFieldName.addEventListener('change', () => getInputInfo(inputFieldName));
//realtime update
inputFieldName.addEventListener('input', () => getInputInfo(inputFieldName));
//Blur - when the element is not focused (when the cursor is out of the element)
inputFieldName.addEventListener('blur', () => {
  paragraph.textContent = 'This field is required';
  paragraph.style.color = 'red';
});
document.body.addEventListener('keypress', (e) => {
  alert(e.keyCode);
});
