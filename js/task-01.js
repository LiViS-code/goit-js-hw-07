// Задание
/*
 * Напиши скрипт, который выполнит следующие операции.
 * Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.
 * Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).
 * Например для первой категории получится:
 * Категория: Животные
 * Количество элементов: 4
 */

const listCategories = document.querySelector("#categories").children;
console.log(`В списке ${listCategories.length} категории`);

// console.log(listCategories);

for (let listItem of listCategories) {
  console.log("Категория:", listItem.firstElementChild.textContent);
  console.log(
    "Количество элементов:",
    listItem.querySelector("ul").children.length
  );
}
