const $root = document.querySelector("#root");
const $cardsWrapper = createCardsWrapper();
const createMemoryCard = memoryCard();

const $memoryCardJS = createMemoryCard({
  src: "img/icon-js.png",
  alt: "icone de um livro em linguagem javascript",
  comparador: 1,
});

const $memoryCardWoman = createMemoryCard({
  src: "img/icon-woman.png",
  alt: "icone mulher codando",
  comparador: 2,
});
const $memoryCardC = createMemoryCard({
  src: "img/icon-c.png",
  alt: "icone de um livro em linguagem C++",
  comparador: 3,
});
const $memoryCardCelular = createMemoryCard({
  src: "img/icon-celular.png",
  alt: "icone de um celular",
  comparador: 4,
});

$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJS);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardC);

$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardWoman);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardCelular);

$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardC);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJS);

$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardCelular);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardWoman);

$root.insertAdjacentElement("beforeend", $cardsWrapper);
