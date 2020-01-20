function createCardsWrapper() {
  const $cardsWrapper = document.createElement("section");
  $cardsWrapper.classList.add("cards-wrapper");

  $wrapperStyle = `
    .cards-wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-top: 10px;
    }
    .cards-wrapper > .memory-card {
      margin-bottom: 10px;
    }    
 `;
  $style.insertAdjacentText("beforeend", $wrapperStyle);
  return $cardsWrapper;
}
