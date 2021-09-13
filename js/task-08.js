// случайный цвет в rgb
const randomColor = () => Math.floor(Math.random() * 256);

// функция считывания значения от пользователя
const inputValue = () => (amountDivs = Number(inputElem.value));

// функция создания div
const createBoxes = function (amount) {
  // размер певого div
  let sizeDiv = 30;

  // создать необходимое кол-во div
  for (let i = 1; i <= amount; i += 1) {
    // вставить div в страничку
    document
      .querySelector("#boxes")
      .insertAdjacentHTML(
        "beforeend",
        `<div style="background-color: rgb(${randomColor()}, ${randomColor()}, ${randomColor()}); width: ${sizeDiv}px; height: ${sizeDiv}px"></div>`
      );

    // увеличить размер следующего div
    sizeDiv += 10;
  }
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
