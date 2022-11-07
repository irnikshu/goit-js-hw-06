function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const createBtn =  document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const inputEl = document.querySelector("#controls>input");
const boxes = document.querySelector("#boxes");

createBtn.addEventListener("click", boxesToAdd);

function boxesToAdd() {
  let boxesToAdd = createBoxes(inputEl.value);
  boxes.append(...boxesToAdd);
}

destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount)  {
  const elementsToAdd = [];
   const basicSize = 30;
  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    const size = basicSize + i * 10;
    div.style.cssText = `width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}`;
    
    elementsToAdd.push(div);
  }
  return elementsToAdd;
};

function destroyBoxes() {
  boxes.innerHTML = "";
}

