// найти список категорий
const listCategoriesEl = document.querySelector("#categories");

// найти все катекории в списке и вывести в консоль
const liItemEl = listCategoriesEl.querySelectorAll(".item");
console.log(`В списке ${liItemEl.length} категории`);

// вывести в консоль все названия подкатегорий и кол-во элементов в них
liItemEl.forEach((elem) => {
  console.log(`Категория: ${elem.querySelector("h2").textContent}`);
  console.log(`Количество элементов: ${elem.querySelectorAll("li").length}`);
});
