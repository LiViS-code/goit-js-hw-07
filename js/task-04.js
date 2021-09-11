/*
 * Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.
 * Создай переменную counterValue в которой будет хранится текущее значение счетчика.
 * Создай функции increment и decrement для увеличения и уменьшения значения счетчика
 * Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
 */

// хранит текущее значение счетчика
let counterValue = 0;

// функция приращения счетчика
const increment = () => {
  counterValue += 1;
  return newValue(counterValue);
};

// функция уменьшение счетчика
const decrement = () => {
  counterValue -= 1;
  return newValue(counterValue);
};

// функция изменения значения на страничке
const newValue = (counter) => {
  let elem = document.getElementById("value");
  return (elem.textContent = `${counter}`);
};

// хранит элементы кнопок
const buttonsCounter = document.querySelectorAll("button");

// отрабатываем нажатие кнопок
buttonsCounter[0].addEventListener("click", decrement);
buttonsCounter[1].addEventListener("click", increment);
