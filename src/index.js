const $root = document.querySelector("#root");
const $containerPlay = document.createElement("div");
const $memoryCardFront = document.createElement("article");
var $memoryCard = [0, 1, 2, 3, 4, 5, 6, 7, 8];
var $icon = [0, 1, 2, 3, 4, 5, 6, 7, 8];

$memoryCard.forEach(function(index) {
  $memoryCard[index] = document.createElement("article");
});

// -----------
const $iconC = `
  <img
  class='icon -circle'
  src='/img/icon-c.png'
  alt='icon livro linguagem C'
  />
  `;
$icon.forEach(function(index) {
  $icon[index] = `
  <img
   class='icon'
   src='/img/icon-collabcode.png'
   alt='gueio mascote da Collab Code'
   />
   `;
});

// ------------
$root.insertBefore($containerPlay, null);
$containerPlay.classList.add("container-play");

// ------------
$memoryCard.forEach(function(index, key) {
  $containerPlay.insertBefore($memoryCard[key], null);
  $memoryCard[key].classList.add("memory-card");
  $memoryCard[key].insertAdjacentHTML("afterBegin", $icon[key]);
  console.log(index, key);
});

//-------------
$containerPlay.insertBefore($memoryCardFront, $memoryCard[0]);
$memoryCardFront.classList.add("memory-card");
$memoryCardFront.classList.add("-front");
$memoryCardFront.insertAdjacentHTML("afterBegin", $iconC);
