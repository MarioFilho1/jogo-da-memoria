const $root = document.querySelector("#root");
const $cardsWrapper = createCardsWrapper();
const createMemoryCard = memoryCard();

const $memoryCardJS = createMemoryCard({
  src: "img/icon-js.png",
  alt: "icone de um livro em linguagem javascript",
});

const $memoryCardWoman = createMemoryCard({
  src: "img/icon-woman.png",
  alt: "icone mulher codando",
});
const $memoryCardC = createMemoryCard({
  src: "img/icon-c.png",
  alt: "icone de um livro em linguagem C++",
});
const $memoryCardCelular = createMemoryCard({
  src: "img/icon-celular.png",
  alt: "icone de um celular",
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
