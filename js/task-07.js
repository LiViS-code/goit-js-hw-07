// ищем элемент ввода
const inputEl = document.querySelector("#font-size-control");

// ищем изменяемый текст
const textEl = document.querySelector("#text");

// функция изменния размера шрифта
const changeTextSize = () => {
  let textSize = 0;

  // размер текста в среднем положении ползунка
  const textSizeDefault = 16;

  // новый размер изменяем от 0 до х2
  textSize = (textSizeDefault * inputEl.value) / 50;

  // выводим результат
  return (textEl.style.fontSize = `${textSize}px`);
};

// слушаем изменения
inputEl.addEventListener("input", changeTextSize.bind(inputEl));
