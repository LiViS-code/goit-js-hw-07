// функция считывания значения от пользователя
const inputValue = () => (amountDivs = inputEl.value | 0);

// функция создания div
const createBoxes = (amount) => {
  // размер певого div
  const sizeDiv = 30;

  // массив для создаваемых div
  const divBoxes = [];

  // создать указанное кол-во div
  for (let i = 1; i <= amount; i += 1) {
    // создать div
    const div = document.createElement("div");

    // добавить стили
    div.style.backgroundColor = `#${Math.random().toString(16).slice(3, 9)}`;
    div.style.width = `${sizeDiv * i}px`;
    div.style.height = div.style.width;

    // сохранить созданный div в массив
    divBoxes.push(div);
  }

  // внести изменения в DOM
  divBoxesEl.append(...divBoxes);
};

// функция удаления div
const destroyBoxes = () => {
  divBoxesEl.innerHTML = "";
};

// сохранить место вставки для работы с div
const divBoxesEl = document.querySelector("#boxes");

// найти поле ввода значений от пользователя
const inputEl = document.querySelector("input[type = 'number']");

// получить ввод от пользователя
let amountDivs = 0; // значение по умолчанию - ни чего не делать
inputEl.addEventListener("blur", inputValue.bind(inputEl));

// найти кнопки для действий пользователя
const btnRenderEl = document.querySelector("button[data-action='render']");
const btnDestroyEl = document.querySelector("button[data-action='destroy']");

// слушать нажатия кнопок
btnRenderEl.addEventListener("click", () => createBoxes(amountDivs));
btnDestroyEl.addEventListener("click", destroyBoxes);
