const $root = document.querySelector("#root");
const $containerPlay = document.createElement("div");
const $memoryCard1 = document.createElement("article");
const $memoryCardFront = document.createElement("article");
const $memoryCard2 = document.createElement("article");
const $memoryCard3 = document.createElement("article");
const $memoryCard4 = document.createElement("article");
const $memoryCard5 = document.createElement("article");
const $memoryCard6 = document.createElement("article");
const $memoryCard7 = document.createElement("article");
const $memoryCard8 = document.createElement("article");
const $memoryCard9 = document.createElement("article");
const $icon = `
  <img
  class='icon' 
  src='/img/icon-collabcode.png' 
  alt='gueio mascote da Collab Code'
  />`;

const $iconc = `
  <img
  class='icon -circle'
  src='/img/icon-c.png'
  alt='icon livro linguagem C'
  />
  `;
const $icon2 = `
  <img
  class='icon' 
  src='/img/icon-collabcode.png' 
  alt='gueio mascote da Collab Code'
  />`;
const $icon3 = `
  <img
  class='icon' 
  src='/img/icon-collabcode.png' 
  alt='gueio mascote da Collab Code'
  />`;
const $icon4 = `
  <img
  class='icon' 
  src='/img/icon-collabcode.png' 
  alt='gueio mascote da Collab Code'
  />`;
const $icon5 = `
  <img
  class='icon' 
  src='/img/icon-collabcode.png' 
  alt='gueio mascote da Collab Code'
  />`;
const $icon6 = `
  <img
  class='icon' 
  src='/img/icon-collabcode.png' 
  alt='gueio mascote da Collab Code'
  />`;
const $icon7 = `
  <img
  class='icon' 
  src='/img/icon-collabcode.png' 
  alt='gueio mascote da Collab Code'
  />`;
const $icon8 = `
  <img
  class='icon' 
  src='/img/icon-collabcode.png' 
  alt='gueio mascote da Collab Code'
  />`;
const $icon9 = `
  <img
  class='icon' 
  src='/img/icon-collabcode.png' 
  alt='gueio mascote da Collab Code'
  />`;
$root.insertBefore($containerPlay, null);
$containerPlay.classList.add("container-play");

//-------------
$containerPlay.insertBefore($memoryCard1, null);
$memoryCard1.classList.add("memory-card");
$memoryCard1.insertAdjacentHTML("afterBegin", $icon);
// ------------
$containerPlay.insertBefore($memoryCardFront, $memoryCard1);
$memoryCardFront.classList.add("memory-card");
$memoryCardFront.classList.add("-front");
$memoryCardFront.insertAdjacentHTML("afterBegin", $iconc);
//-------------
$containerPlay.insertBefore($memoryCard2, null);
$memoryCard2.classList.add("memory-card");
$memoryCard2.insertAdjacentHTML("afterBegin", $icon2);
//-------------
$containerPlay.insertBefore($memoryCard3, null);
$memoryCard3.classList.add("memory-card");
$memoryCard3.insertAdjacentHTML("afterBegin", $icon3);
//-------------
$containerPlay.insertBefore($memoryCard4, null);
$memoryCard4.classList.add("memory-card");
$memoryCard4.insertAdjacentHTML("afterBegin", $icon4);
//-------------
$containerPlay.insertBefore($memoryCard5, null);
$memoryCard5.classList.add("memory-card");
$memoryCard5.insertAdjacentHTML("afterBegin", $icon5);
//-------------
$containerPlay.insertBefore($memoryCard6, null);
$memoryCard6.classList.add("memory-card");
$memoryCard6.insertAdjacentHTML("afterBegin", $icon6);
//-------------
$containerPlay.insertBefore($memoryCard7, null);
$memoryCard7.classList.add("memory-card");
$memoryCard7.insertAdjacentHTML("afterBegin", $icon7);
//-------------
$containerPlay.insertBefore($memoryCard8, null);
$memoryCard8.classList.add("memory-card");
$memoryCard8.insertAdjacentHTML("afterBegin", $icon8);
//-------------
$containerPlay.insertBefore($memoryCard9, null);
$memoryCard9.classList.add("memory-card");
$memoryCard9.insertAdjacentHTML("afterBegin", $icon9);
