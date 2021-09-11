// найти поле ввода
const inputEl = document.querySelector("#validation-input");

// узнать сколько значений надо ввести из атрибута элемента
const dataLength = Number.parseInt(inputEl.getAttribute("data-length"));

// функция валидации
const validation = () => {
  // сохраняем кол-во введенных символов
  const lengthVal = inputEl.value.length;

  // если ни чено не ввели или потерли ввод - уходим
  if (lengthVal === 0) {
    if (inputEl.classList.contains("invalid")) {
      inputEl.classList.toggle("invalid");
    }

    if (inputEl.classList.contains("valid")) {
      inputEl.classList.toggle("valid");
    }

    return;
  }

  // валидируем поле ввода
  if (lengthVal === dataLength) {
    if (inputEl.classList.contains("invalid"))
      return inputEl.classList.replace("invalid", "valid");
    return inputEl.classList.add("valid");
  } else {
    if (inputEl.classList.contains("valid"))
      return inputEl.classList.replace("valid", "invalid");
    return inputEl.classList.add("invalid");
  }
};

// вешаем прослушку на поле ввода
inputEl.addEventListener("blur", validation.bind(inputEl));
