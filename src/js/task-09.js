const colorBtn = document.querySelector('.change-color');
const spanEl = document.querySelectorAll('.color');
const bodyEl = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


colorBtn.addEventListener('click', onBodyColorChange);

function onBodyColorChange(event) {
  function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
  // const color = getRandomHexColor();
  bodyEl.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = getRandomHexColor();
  
}