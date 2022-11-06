function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const inputEl = document.querySelector('.controls');



createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);
// inputEl.addEventListener('input', onInputNumber);


function onInputNumber() {
  const amount = inputEl.currentTarget.value;
  createBoxes(amount);
}

function createBoxes(amount) {
  const basicSize = 30;
 
  for (let i = 0; i < amount; i+=1) {
    const size = basicSize + i * 10;
    const div = document.createElement("div");
    div.style.cssText = `width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}`;
    
    boxes.appendChild(div);
  }
  
}

function destroyBoxes() {
  boxes.textContent = '';
}

