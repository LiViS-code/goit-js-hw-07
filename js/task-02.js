// исходный массив данных
const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const createListEl = (elem) => {
  const liEl = document.createElement("li");
  liEl.textContent = elem;
  return liEl;
};

const getIngredientList = (array) => array.map((elem) => createListEl(elem));

document
  .querySelector("#ingredients")
  .append(...getIngredientList(ingredients));
