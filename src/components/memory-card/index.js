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
