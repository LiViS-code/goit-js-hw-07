// случайный цвет в rgb
const randomColor = () => Math.floor(Math.random() * 256);

// функция считывания значения от пользователя
const inputValue = () => (amountDivs = Number(inputElem.value));

// функция создания div
const createBoxes = function (amount) {
  // размер певого div
  const sizeDiv = 30;

  // фрагмент для вставки в DOM
  const fragment = document.createDocumentFragment();

  // создать необходимое кол-во div
  for (let i = 1; i <= amount; i += 1) {
    // создать div
    const div = document.createElement("div");

    // добавить стили
    div.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
    div.style.width = `${sizeDiv * i}px`;
    div.style.height = `${sizeDiv * i}px`;

    // добавить новый div к фрагменту
    fragment.appendChild(div);
  }

  // внести изменения в DOM
  divBoxesElem.appendChild(fragment);
};

// функция удаления div
const destroyBoxes = function () {
  // удалять созданные div пока они есть у родителя
  while (divBoxesElem.children.length > 0)
    divBoxesElem.querySelector("div").remove();
};

// сохранить место вставки для работы с div
const divBoxesElem = document.querySelector("#boxes");

// найти поле ввода значений от пользователя
const inputElem = document.querySelector("input[type = 'number']");

// получить ввод от пользователя
let amountDivs = 0; // значение по умолчанию - ни чего не делать
inputElem.addEventListener("blur", inputValue.bind(inputElem));

// найти кнопки для действий пользователя
const btnRenderElem = document.querySelector("button[data-action='render']");
const btnDestroyElem = document.querySelector("button[data-action='destroy']");

// слушать нажатия кнопок
btnRenderElem.addEventListener("click", () => createBoxes(amountDivs));
btnDestroyElem.addEventListener("click", destroyBoxes);
