const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsEl = document.querySelector("#ingredients");

for (const obj of ingredients) {
  const element = document.createElement("li");
  element.textContent = obj;
  element.classList.add("item");
  ingredientsEl.append(element);
}



