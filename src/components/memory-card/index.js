const memoryCard = () => {
  const $head = document.querySelector("head");
  const $style = document.createElement("style");

  $style.textContent = `
       .flipper {  
        width: 155px;
        heigth:155px;    
        transition: transform 0.5s;
        transform-style: preserve-3d;                      
      }       
      .memory-card {        
        width: 155px;
        height: 155px;
        background-color: #f25a70;
        border-radius: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 3px 6px 0px rgba(0, 0, 0, 0.16);                   
      }     
      .memory-card.-front {
        background-color: #fff;
        backface-visibility: hidden;
        position: absolute
      }
      .memory-card.-back{
        transform: rotateY(180deg);
       backface-visibility: hidden;       
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
        transform: translateY(-12px);   
      }   
      .cards-wrapper.-active > .flipper {
         transform: rotateY(180deg);
      }                              
     `;

  $head.insertBefore($style, null);

  return ({ nameClass, src, alt, srcFront, altFront }) => `
    <article class='flipper'>
      <div class='memory-card ${nameClass}'>        
        <img
          src='${src}'
          alt='${alt}'
          class='icon'
          onClick = "handleClick()"
        />
      </div>
      <div class='memory-card -back'>  
        <img 
          src='${srcFront}'
          alt='${altFront}'
          class='icon'
          onClick = "handleClick()"
        />      
      </div>
    </article> 
`;
};

const handleClick = () => $cardsWrapper.classList.toggle("-active");
