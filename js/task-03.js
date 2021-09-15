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

// перебрать исходный массив изображений и заполнить списки
function getListImg() {
  const listImgsLinks = images.map(
    (image) =>
      `<li class = "list-item"><img class = "gallery-image" src = ${image.url} alt = ${image.alt}></li>`
  );

  return listImgsLinks.join(" ");
}

// внести изменения в DOM
document
  .querySelector("#gallery")
  .insertAdjacentHTML("afterbegin", getListImg());
