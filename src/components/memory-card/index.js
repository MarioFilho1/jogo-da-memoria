let posicaoCard = [1];
let comparadorCard = [1];
let acertou = 0;
let errou = 0;
let i = 0;
let t = 0;

const memoryCard = () => {
  const $head = document.querySelector("head");
  const $style = document.createElement("style");

  $style.textContent = `
      .memory-card {  
        width: 155px;
        height:155px;    
        position: relative;
                      
      }       
      .memory-card > .card {        
        width: 100%;
        height: 100%;
        background-color: #f25a70;
        border-radius: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 3px 6px 0px rgba(0, 0, 0, 0.16); 
        position: relative;  
        position: absolute;                     
      } 

      .memory-card.-active > .card {
        display: none;
      }
       .memory-card > .card.-front {
        display: flex;
      }

      .memory-card > .card.-front {
        background-color: #fff;
        // backface-visibility: hidden;
        // position: absolute
      }

      // .memory-card.-back{
      //  transform: rotateY(180deg);
      //  backface-visibility: hidden;       
      // }

      .memory-card > .card.-front::before {
        content: "";
        background-color: #d4d4d4;
        width: 95px;
        height: 95px;
        border-radius: 50%;
        position: absolute;
      }
      
      .memory-card > .card > .icon {
        width: 100px;
        height: 100px;
      }
      
      .memory-card > .card.-front > .icon {  
       position: absolute; 
       transform: translateY(-12px);   
      }   


      // .cards-wrapper.-active > .flipper {
      //    transform: rotateY(180deg);
      // }                              
     `;

  $head.insertBefore($style, null);

  return ({ src, alt, comparador }) => `
   <div class="memory-card" onClick = "handleClick(this,comparador=${comparador})">
      <article class="card -front">        
        <img
          src="${src}"
          alt="${alt}"
          class="icon"         
        />
      </article>
      <article class="card">  
        <img 
          src="img/icon-collabcode.png"
          alt="icone do gueio mascote collabcode"
          class='icon'         
        />      
      </article>
    </div> 
`;
};


const handleClick = ($componentes, comparador) => {
  if (qtdActiveMemoryCard <= 8 && t <=1) {
  console.log(qtdActiveMemoryCard)
    $componentes.classList.toggle("-active");
    posicaoCard[i]= $componentes
    comparadorCard[i] = comparador;
    i++;  
    t++;  
  }
  if (qtdActiveMemoryCard % 2 != 0) {
    if (comparadorCard[0] == comparadorCard[1]) {
      acertou = acertou +1;
      console.log("VOCÊ ACERTOU", acertou);
      console.log("testando essa bosta")
      i = 0;
      t = 0;
    } else {
      errou = errou +1;
      console.log("VOCÊ ERROU", errou);      
      setTimeout(() => {
        //const $activeMemoryCards = document.querySelectorAll(
        //  ".memory-card.-active"
        //);

        //$activeMemoryCards.forEach(($memoryCard, key) => {
        //  $memoryCard.classList.remove("-active");
        for (cont = 1; cont >= 0; cont--) {
          posicaoCard[cont].classList.remove("-active");          
          i = 0;
          t = 0;
        };
      }, 1200);
    }
  }
};
