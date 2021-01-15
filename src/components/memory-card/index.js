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

  return ({ src, alt }) => `
    <div class="memory-card" onClick = "handleClick(this)">
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

let i = 0;
let posicaoCard = [1];
const handleClick = ($componentes) => {
  if (i <= 1) {
    posicaoCard[i] = $componentes;
    posicaoCard[i].classList.toggle("-active");
    i++;
  }
  if (i > 1) {
    var counter = 0;
    var timer = setInterval(function () {
      if (counter >= 2) {
        clearInterval(timer);
        for (cont = 1; cont >= 0; cont--) {
          posicaoCard[cont].classList.remove("-active");
        }
        i = 0;
        return;
      }
      console.log(counter++);
    }, 800);
  } else {
    return;
  }
};
