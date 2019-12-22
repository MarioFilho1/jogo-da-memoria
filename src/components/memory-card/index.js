function createMemoryCard() {
  const $memoryCard = document.createElement("article");
  const $icon = `
  <img 
    class="icon"   
    src="/img/icon-collabcode.png"
    alt="Icone do mascote da Collab Code"
  />
`;
  $wrapCards.insertBefore($memoryCard, null);
  $memoryCard.classList.add("memory-card");
  $memoryCard.insertAdjacentHTML("afterbegin", $icon);
}
function createMemoryCardFront() {
  const $memoryCardFront = document.createElement("article");
  const $iconC = `
  <img 
  class="icon" 
  src="/img/icon-c.png"
  alt="icone de um livro linguagem c++"
  />
  `;
  $wrapCards.insertBefore($memoryCardFront, null);
  $memoryCardFront.classList.add("memory-card");
  $memoryCardFront.classList.add("-front");
  $memoryCardFront.insertAdjacentHTML("afterbegin", $iconC);
}

const $click = document.querySelectorAll("article");
function click() {
  this.addEventListener("click", function captura() {
    console.log("Clicou");
  });
}
