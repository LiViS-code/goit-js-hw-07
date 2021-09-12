// исходный массив данных
const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

// найти список для добавления
const listElem = document.querySelector("#ingredients");

// переменная для хранения значения элемента списка
let listItem;

// добавить каждый элемент массива как отдельный элемент списка
ingredients.forEach((ingredient) => {
  // создать элемент списка
  listItem = document.createElement("li");

  // заполнить содержимым из масиива данных
  listItem.textContent = ingredient;

  // добавить готовый элемент в список
  listElem.appendChild(listItem);
});
