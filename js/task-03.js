// исходный массив объектов с изображениями
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// всатвить фрагмент CSS кода для стилизации будущих изображений
document.querySelector("style").insertAdjacentHTML(
  "beforeend",
  `#gallery {
    list-style-type: none;
    padding-left: 0;
  }
  .list-item {
    margin-left: 0;
  }
  .list-item:not(:last-child) {
    margin-bottom: 5vmin;
  }
  .gallery-image {
    display: block;
    margin: 0 auto;
    width: 80%;
    border-radius: 3vmin;
}
`
);

// создать фрагмент для добавления в DOM
const fragment = document.createDocumentFragment();

// перебрать массив изображений и заполнить фрагмент
images.forEach((image) => {
  // создать элемент списка
  const liElem = document.createElement("li");

  // создать класс для элемента списка
  liElem.className = "list-item";

  // создать элемент с изображением
  const imgElem = document.createElement("img");

  // создать класс для изображения
  imgElem.className = "gallery-image";

  // создать атрибуты для изображения
  imgElem.setAttribute("src", `${image.url}`);
  imgElem.setAttribute("alt", `${image.alt}`);

  // добавить элемент изображения в элемент списка
  liElem.appendChild(imgElem);

  // добавить созданный элемент списка к фрагменту
  fragment.appendChild(liElem);
});

// внести изменения в DOM
document.querySelector("#gallery").appendChild(fragment);
