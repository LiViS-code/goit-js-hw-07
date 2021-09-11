// находим поле ввода
const inputValue = document.querySelector("#name-input");

// находим место вывода текста
const outputValue = document.querySelector("#name-output");

// сохраняем значение вывода по умолчанию
const defaultValue = outputValue.textContent;

// функция изменениия значения вывода
const changeValue = () => {
  if (inputValue.value !== "") {
    return (outputValue.textContent = inputValue.value);
  }
  return (outputValue.textContent = defaultValue);
};

// слушаем изменения в поле ввода
inputValue.addEventListener("input", changeValue.bind(inputValue.value));
