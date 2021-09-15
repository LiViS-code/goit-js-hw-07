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

// найти кнопки управления счетчиком
const btnsAction = document.querySelectorAll("#counter button");

// слушать нажатие кнопок
btnsAction[0].addEventListener("click", () => {
  newValue(-1);
});

btnsAction[1].addEventListener("click", () => {
  newValue(1);
});
