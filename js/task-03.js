// исходный массив ссылок на изображения
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

// добавить изображения на страничку с добвавлением созданных классов
images.forEach((image) => {
  document
    .querySelector("#gallery")
    .insertAdjacentHTML(
      "beforeend",
      `<li class=list-item><img class="gallery-image" src="${image.url}" alt="${image.alt}"></img></li>`
    );
});
