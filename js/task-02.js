// исходный массив данных
const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const createListMarkup = (elem) => {
  const liMarkup = document.createElement("li");
  liMarkup.textContent = elem;
  return liMarkup;
};

const getIngredientList = (array) =>
  array.map((elem) => createListMarkup(elem));

document
  .querySelector("#ingredients")
  .append(...getIngredientList(ingredients));
