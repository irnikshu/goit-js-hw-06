// кол-во категорий
const itemsEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemsEl.length}`);
// текст заголовка  и количество элементов  
itemsEl.forEach((item) => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.querySelectorAll("li").length}`);
});

    