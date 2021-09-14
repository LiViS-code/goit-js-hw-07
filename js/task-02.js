// исходный массив данных
const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

// добавить каждый элемент массива как отдельный элемент списка
function getListIngredient() {
  const liArray = [];
  ingredients.forEach(function (ingredient) {
    const liElem = document.createElement("li");
    liElem.textContent = ingredient;
    liArray.push(liElem);
  });
  return liArray;
}

document.querySelector("#ingredients").append(...getListIngredient());
