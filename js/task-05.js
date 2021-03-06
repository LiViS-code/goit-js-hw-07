// найти поле ввода
const inputValueEl = document.querySelector("#name-input");

// найти место вывода текста
const outputValueEl = document.querySelector("#name-output");

// сохранить значение вывода по умолчанию
const defaultValue = outputValueEl.textContent;

// определить изменение значения
const changeValue = (currentValue) => {
  if (currentValue !== "") {
    return newValueOutput(currentValue);
  }
  // вернуть исходное состояние, если ни чего не изменилось
  return newValueOutput(defaultValue);
};

// записать новое значение
const newValueOutput = (newValue) => (outputValueEl.textContent = newValue);

// слушать изменения в поле ввода
inputValueEl.addEventListener("input", () =>
  changeValue(event.currentTarget.value)
);
