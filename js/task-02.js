const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsEl = document.querySelector("#ingredients");

// for (const obj of ingredients) {
//   const element = document.createElement("li");
//   element.textContent = obj;
//   element.classList.add("item");
// //  ingredientsEl.append(element);
// };

function makeLiEl(ingredient) {
  const liEl = document.createElement("li");
  liEl.textContent = ingredient;
  liEl.classList.add("item");
  return liEl;
}
const elements = ingredients.map(makeLiEl);
ingredientsEl.append(...elements);