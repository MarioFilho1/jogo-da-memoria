const $root = document.querySelector("#root");
const $cardsWrapper = createCardsWrapper();

const $memoryCard = createMemoryCard({
  src: "img/icon-collabcode.png",
  alt: "Icone Geio mascote da Collab Code"
});
const $memoryCardLingC = createMemoryCard({
  src: "img/icon-c.png",
  alt: "Icone livro linguagem c++",
  nameclass: "-front"
});
const $memoryCardPhone = createMemoryCard({
  src: "img/icon-celular.png",
  alt: "Icone livro celular",
  nameclass: "-front"
});
const $memoryCardLingJs = createMemoryCard({
  src: "img/icon-js.png",
  alt: "Icone livro linguagem Javascript",
  nameclass: "-front"
});
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardLingJs);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardLingJs);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardPhone);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardPhone);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardLingC);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardLingC);
$root.insertAdjacentElement("beforeend", $cardsWrapper);
