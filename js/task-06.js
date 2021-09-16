// найти поле ввода
const inputEl = document.querySelector("#validation-input");

// узнать сколько значений надо ввести из атрибута элемента
const dataLength = inputEl.getAttribute("data-length");

// функция валидации
const validationInputClass = () => {
  // сохраняем кол-во введенных символов
  const lengthVal = inputEl.value.length;

  // если ни чего не ввели или потерли ввод - восстановить как было и уйти
  if (lengthVal === 0) {
    if (
      inputEl.classList.contains("invalid") ||
      inputEl.classList.contains("valid")
    ) {
      inputEl.className = "";
    }
    return;
  }

  // валидируем поле ввода
  if (lengthVal == dataLength) {
    if (inputEl.classList.contains("invalid"))
      return inputEl.classList.replace("invalid", "valid");
    return inputEl.classList.add("valid");
  } else {
    if (inputEl.classList.contains("valid"))
      return inputEl.classList.replace("valid", "invalid");
    return inputEl.classList.add("invalid");
  }
};

// слушать поле ввода на потерю фокуса
inputEl.addEventListener("blur", validationInputClass.bind(inputEl));
