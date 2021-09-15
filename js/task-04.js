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

// расставляем прослушку на кнопки
btnsAction.forEach((elem) => {
  if (elem.dataset.action === "decrement") {
    btnsAction[0].addEventListener("click", () => {
      newValueCounter(elem.textContent | 0);
    });
  } else {
    btnsAction[1].addEventListener("click", () => {
      newValueCounter(elem.textContent | 0);
    });
  }
});
