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
    transform: scale(1);
    transition: transform 250ms ease-in-out;
  }

  .gallery-image:focus,
  .gallery-image:hover {
    transform: scale(1.1);
  }
}
`
);

// создать фрагмент для добавления в DOM
const fragment = document.createDocumentFragment();

// перебрать массив изображений и заполнить фрагмент
images.forEach((image) => {
  // создать элемент списка
  let liEl = document.createElement("li");
  liEl.className = "list-item";
  liEl.insertAdjacentHTML(
    "afterbegin",
    `<img class = "gallery-image" src = ${image.url} alt = ${image.alt}>`
  );

  // добавить созданный элемент списка к фрагменту
  fragment.append(liEl);
});

// внести изменения в DOM
document.querySelector("#gallery").append(fragment);
