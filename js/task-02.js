// исходный массив данных
const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

// переменная для хранения фрагмента списка
const fragment = document.createDocumentFragment();

// добавить каждый элемент массива как отдельный элемент списка
ingredients.forEach(function (ingredient) {
  // создать элемент списка
  let liElem = document.createElement("li");

  // заполнить содержимым из масcива данных
  liElem.textContent = ingredient;

  // добавить элемент списка во фрагмент
  fragment.append(liElem);
});

// найти список для добавления
const listElem = document.querySelector("#ingredients");

// добавить готовый фрагмент в DOM
listElem.append(fragment);
