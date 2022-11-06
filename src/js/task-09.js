
const body = document.body;
const colorBtn = body.querySelector(".change-color");
const spanEL = body.querySelector(".color");
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
colorBtn.addEventListener("click", onBodyColorChange);
function onBodyColorChange(event) {
  body.style.backgroundColor = getRandomHexColor();
  spanEL.textContent = body.style.backgroundColor;
}