// хранит текущее значение счетчика
let counterValue = 0;
const incrementValue = 1;
const decrementValue = -1;

// найти счетчкик
let elem = document.getElementById("value");

// функция изменения значения на страничке
const newValueCounter = (increment) => {
  counterValue += increment;
  elem.textContent = `${counterValue}`;
};

// найти кнопки управления счетчиком
const btnsAction = document.querySelectorAll("#counter button");

// слушать нажатие кнопок
btnsAction[0].addEventListener("click", () => {
  newValueCounter(decrementValue);
});

btnsAction[1].addEventListener("click", () => {
  newValueCounter(incrementValue);
});
