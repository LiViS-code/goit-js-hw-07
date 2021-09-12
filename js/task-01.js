// найти все категории списка
const listCategoriesRef = document.querySelector("#categories").children;
console.log(`В списке ${listCategoriesRef.length} категории`);

// вывести результат парсинга категорий в консоль
for (let listItem of listCategoriesRef) {
  console.log("Категория:", listItem.firstElementChild.textContent);
  console.log(
    "Количество элементов:",
    listItem.querySelector("ul").children.length
  );
}
