// Script para el index

window.addEventListener("scroll", () =>{
    let headerContainer = document.querySelector(".container__header");
    let buttonUp = document.querySelector(".button");
    let buttonWhatsapp = document.querySelector(".button__capa2");

    headerContainer.classList.toggle("sticky", window.scrollY > 200);

    const scroll = window.scrollY;
    let boxShadow = document.querySelector(".navbar");
    if(scroll > 800){
        boxShadow.style.boxShadow = "-6px 8px 29px -7px rgba(0,0,0,0.85)";
    }else{
        boxShadow.style.boxShadow = "none"
    }

    
    scroll > 1016 ? buttonUp.style.display = "block" : buttonUp.style.display = "none";
    scroll > 1016 ? buttonWhatsapp.style.display = "block" : buttonWhatsapp.style.display = "none";
    
});

// Script para las demas paginas

window.addEventListener("scroll", () =>{
    let headerContainer = document.querySelector(".container__header--pages");
    headerContainer.classList.toggle("sticky", window.scrollY > 100);

    const scroll = window.scrollY;
    let boxShadow = document.querySelector(".navbar");
    if(scroll > 90){
        boxShadow.style.boxShadow = "-6px 8px 29px -7px rgba(0,0,0,0.85)";
    }else{
        boxShadow.style.boxShadow = "none"
    }
    
});