// хранит текущее значение счетчика
let counterValue = 0;

// найти счетчкик
let elem = document.getElementById("value");

// функция изменения значения на страничке
const newValue = (increment) => {
  // получить следующее значение счетчика
  counterValue += increment;

  // поменять значение поля на страничке
  elem.textContent = `${counterValue}`;
};

// найти кнпки управления счетчиком
const btnDecrementRef = document.querySelector("[data-action='decrement']");
const btnIncrementRef = document.querySelector("[data-action='increment']");

// слушать нажатие кнопок
btnDecrementRef.addEventListener("click", () => {
  newValue(-1);
});

btnIncrementRef.addEventListener("click", () => {
  newValue(1);
});
