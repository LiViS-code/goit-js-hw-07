// ЗАДАНИЕ
/*
 * Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement()
 */

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

let listItem;

ingredients.forEach((ingredient) => {
  listItem = document.createElement("li");
  listItem.textContent = ingredient;
  document.querySelector("#ingredients").appendChild(listItem);
});
