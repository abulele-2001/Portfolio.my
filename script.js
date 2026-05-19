const fadeElements = document.querySelectorAll(".fade-up");

window.addEventListener("scroll", reveal);

function reveal(){

  fadeElements.forEach((element)=>{

    const windowHeight = window.innerHeight;

    const elementTop = element.getBoundingClientRect().top;

    const visible = 100;

    if(elementTop < windowHeight - visible){
      element.classList.add("active");
    }

  });

}

reveal();