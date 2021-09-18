// получить элемент ввода
const inputEl = document.querySelector("#font-size-control");

// получить текст для имземений
const textEl = document.querySelector("#text");

// узнать значение шрифта документа
const textSizeDefault = Number(
  window
    .getComputedStyle(document.body)
    .getPropertyValue("font-size")
    .match(/\d+/)[0]
);

// функция изменния размера шрифта
const changeTextSize = () =>
  (textEl.style.fontSize = `${(textSizeDefault * inputEl.value) / 50}px`);

// слушать изменения на поле ввода
inputEl.addEventListener("input", changeTextSize.bind(inputEl));
