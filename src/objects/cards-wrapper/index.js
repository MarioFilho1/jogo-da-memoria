let qtdActiveMemoryCard = 0;
function createCardsWrapper() {
  const $cardsWrapper = document.createElement("section");
  const $head = document.querySelector("head");
  const $style = document.createElement("style");

  $style.textContent = `
    .cards-wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-top: 10px;                 
    }
    .cards-wrapper > .memory-card {
      margin-bottom: 10px;
    }`;

  $cardsWrapper.classList.add("cards-wrapper");

  $head.insertAdjacentElement("beforeend", $style);

  $cardsWrapper.querySelectorAll(".memory-card.-active");

  $cardsWrapper.addEventListener(
    "click",
    (funciton = () => {
      qtdActiveMemoryCard = $cardsWrapper.querySelectorAll(
        ".memory-card.-active"
      ).length;
      console.log("pai",qtdActiveMemoryCard)
    })
  );
  return $cardsWrapper;
}
