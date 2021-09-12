// хранит текущее значение счетчика
let counterValue = 0;

// функция изменения счетчика
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

// найти кнопоки управления счетчиком
const btnDecrementRef = document.querySelector("[data-action='decrement']");
const btnIncrementRef = document.querySelector("[data-action='increment']");

// слушать нажатие кнопок
btnDecrementRef.addEventListener("click", decrement);
btnIncrementRef.addEventListener("click", increment);
