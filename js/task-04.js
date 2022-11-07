const incrementBtn = document.querySelector("[data-action='increment']");
// const incrementBtn = document.querySelector('increment');
const decrementBtn = document.querySelector("[data-action='decrement']");
// const decrementBtn = document.querySelector('decrement');
// const value = document.querySelector('#value');
// const wrapper = document.querySelector('#counter');

let counterValue = 0;
// const increment = () => {
//     counterValue += 1;

//     value.textContent = counterValue;
// };
// const decrement = () => {
//     counterValue -= 1;
//     value.textContent = counterValue;
// };
incrementBtn.addEventListener('click', increment => {
    counterValue += 1;

    value.textContent = counterValue;
});
decrementBtn.addEventListener('click', decrement => {
    counterValue -= 1;
    value.textContent = counterValue;
});