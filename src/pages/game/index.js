const $root = document.querySelector("#root");
const $cardsWrapper = createCardsWrapper();
const createMemoryCard = memoryCard();

const $memoryCardJS = createMemoryCard({
  nameClass: "-front",
  src: "img/icon-js.png",
  alt: "icone de um livro em linguagem javascript",
  srcFront: "img/icon-collabcode.png",
  altFront: "icone do gueio mascote collabcode",
});

const $memoryCardWoman = createMemoryCard({
  nameClass: "-front",
  src: "img/icon-woman.png",
  alt: "icone mulher codando",
  srcFront: "img/icon-collabcode.png",
  altFront: "icone do gueio mascote collabcode",
});
const $memoryCardC = createMemoryCard({
  nameClass: "-front",
  src: "img/icon-c.png",
  alt: "icone de um livro em linguagem C++",
  srcFront: "img/icon-collabcode.png",
  altFront: "icone do gueio mascote collabcode",
});
const $memoryCardCelular = createMemoryCard({
  nameClass: "-front",
  src: "img/icon-celular.png",
  alt: "icone de um celular",
  srcFront: "img/icon-collabcode.png",
  altFront: "icone do gueio mascote collabcode",
});

$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJS);
// $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);

$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardC);

$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardWoman);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardCelular);

$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardC);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJS);

$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardCelular);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardWoman);

$root.insertAdjacentElement("beforeend", $cardsWrapper);
