// найти поле ввода
const inputElem = document.querySelector("#validation-input");

// узнать сколько значений надо ввести из атрибута элемента
const dataLength = Number.parseInt(inputElem.getAttribute("data-length"));

// функция валидации
const validation = () => {
  // сохраняем кол-во введенных символов
  const lengthVal = inputElem.value.length;

  // если ни чего не ввели или потерли ввод - восстановить как было и уйти
  if (lengthVal === 0) {
    if (inputElem.classList.contains("invalid")) {
      inputElem.classList.remove("invalid");
    }

    if (inputElem.classList.contains("valid")) {
      inputElem.classList.remove("valid");
    }

    return;
  }

  // валидируем поле ввода
  if (lengthVal === dataLength) {
    if (inputElem.classList.contains("invalid"))
      return inputElem.classList.replace("invalid", "valid");
    return inputElem.classList.add("valid");
  } else {
    if (inputElem.classList.contains("valid"))
      return inputElem.classList.replace("valid", "invalid");
    return inputElem.classList.add("invalid");
  }
};

// слушать поле ввода на потерю фокуса
inputElem.addEventListener("blur", validation.bind(inputElem));
