let slideIndex = 0;

function mostrarSlides() {
    let slides = document.getElementsByClassName("carrusel-slide");
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
    setTimeout(mostrarSlides, 5000); // Cambia la imagen cada 2 segundos (ajusta según tus necesidades)
}

document.addEventListener("DOMContentLoaded", mostrarSlides);
