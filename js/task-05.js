// найти поле ввода
const inputValueElem = document.querySelector("#name-input");

// найти место вывода текста
const outputValueElem = document.querySelector("#name-output");

// сохранить значение вывода по умолчанию
const defaultValue = outputValueElem.textContent;

// функция изменениия значения вывода
const changeValue = () => {
  if (inputValueElem.value !== "") {
    return (outputValueElem.textContent = inputValueElem.value);
  }

  // вернуть исходное состояние, если ни чего не изменилось
  return (outputValueElem.textContent = defaultValue);
};

// слушать изменения в поле ввода
inputValueElem.addEventListener(
  "input",
  changeValue.bind(inputValueElem.value)
);
