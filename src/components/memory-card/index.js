const createMemoryCard = ({ src, alt, nameclass }) => `
<article class="memory-card ${nameclass}">
    <img
      src="${src}" 
      alt="${alt}" 
      class="icon"   
      onClick ="handleClick()"
    />
  </article>
`;
const handleClick = () => console.log("ae");

function cardsStyle() {
  cardsStyle = `
  .memory-card {
    width: 145px;
    height: 145px;
    background-color: #f25a70;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    position: relative;
    cursor: pointer;
  }
  .memory-card.-front {
    background-color: #fff;
  }
  .memory-card.-front::before {
    content: "";
    background-color: #d4d4d4;
    width: 95px;
    height: 95px;
    border-radius: 50%;
    position: absolute;
  }
  .memory-card > .icon {
    width: 100px;
    height: 100px;
  }
  .memory-card.-front > .icon {
    position: absolute;
    transform: translateY(-12px);
  }
  `;
  $style.insertAdjacentText("beforeend", cardsStyle);
  $head.insertBefore($style, null);
}
