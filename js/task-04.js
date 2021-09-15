// хранит текущее значение счетчика
let counterValue = 0;

// найти счетчкик
let elem = document.getElementById("value");

// функция изменения значения на страничке
const newValueCounter = (increment) => {
  counterValue += increment;
  elem.textContent = `${counterValue}`;
};

// найти кнопки управления счетчиком
const btnsAction = document.querySelectorAll("#counter button");

const decrementValue = btnsAction[0].textContent | 0;
const incrementValue = btnsAction[1].textContent | 0;

// слушать нажатие кнопок
btnsAction[0].addEventListener("click", () => {
  newValueCounter(decrementValue);
});

btnsAction[1].addEventListener("click", () => {
  newValueCounter(incrementValue);
});
