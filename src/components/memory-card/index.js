const createMemoryCard = condição => {
  if (condição == 1) {
    return `<article class="memory-card">
            <img class="icon" src="/img/icon-collabcode.png"
            alt="Icone do mascote da Collab Code"
            onClick ="handleClick()"/></article>`;
  } else {
    return `<article class="memory-card -front">
            <img class="icon" src="/img/icon-c.png"
            alt="icone de um livro linguagem c++"
             onClick ="handleClick()"/></article>`;
  }
};
function handleClick() {
  return console.log("ae");
}
