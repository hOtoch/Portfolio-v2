
// Função para revelar elementos quando scrollar até eles
export const setupRevealAnimation = () => {
  const reveal = () => {
    const reveals = document.querySelectorAll(".reveal");
    
    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      }
    }
  };
  
  window.addEventListener("scroll", reveal);
  
  // Para garantir que elementos visíveis sem scroll também sejam revelados
  setTimeout(reveal, 100);
  
  return () => {
    window.removeEventListener("scroll", reveal);
  };
};
