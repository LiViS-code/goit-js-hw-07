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
const changeTextSize = () => {
  // новый размер изменяем от 0 до х2
  const textSize = (textSizeDefault * inputEl.value) / 50;

  // вернуть результат
  return (textEl.style.fontSize = `${textSize}px`);
};

// слушать изменения на поле ввода
inputEl.addEventListener("input", changeTextSize.bind(inputEl));
