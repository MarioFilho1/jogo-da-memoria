const $root = document.querySelector("#root");
const $cardsWrapper = createCardsWrapper();

const $memoryCard = createMemoryCard(
  "img/icon-collabcode.png",
  "Icone Geio mascote da Collab Code"
);
const $memoryCardLingC = createMemoryCard(
  "img/icon-c.png",
  "Icone livro linguagem c++",
  "-front"
);
const $memoryCardPhone = createMemoryCard(
  "img/icon-celular.png",
  "Icone livro celular",
  "-front"
);
const $memoryCardLingJs = createMemoryCard(
  "img/icon-js.png",
  "Icone livro linguagem Javascript",
  "-front"
);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardLingJs);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardLingJs);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardPhone);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardPhone);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardLingC);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardLingC);
$root.insertAdjacentElement("beforeend", $cardsWrapper);
