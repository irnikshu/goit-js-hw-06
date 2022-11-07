const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

inputEl.addEventListener('input', onInputRange);
function onInputRange(event) {
    spanEl.style.fontSize = event.currentTarget.value + "px";
}