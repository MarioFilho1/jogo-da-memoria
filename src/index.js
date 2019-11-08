const $root = document.querySelector("#root");
const $memoryCard = document.createElement("article");
const $icon = `
  <img
  class='icon' 
  src='/img/icon-collabcode.png' 
  alt='gueio mascote da Collab Code'
  />`;

$root.insertBefore($memoryCard, null);
$memoryCard.classList.add("memory-card");
$memoryCard.insertAdjacentHTML("afterBegin", $icon);
// ------------

const $iconLingc = `
  <img
  class='icon -circle'
  src='/img/icon-c.png'
  alt='icon linguagem c++'
  />
  `;
const $memoryCard1 = document.createElement("article");
$root.insertBefore($memoryCard1, null);
$memoryCard1.classList.add("memory-card");
$memoryCard1.classList.add("-squareCircle");
$memoryCard1.classList.add("icon-circle");
$memoryCard1.insertAdjacentHTML("afterBegin", $iconLingc);
