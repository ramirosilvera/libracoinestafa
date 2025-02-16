document.addEventListener("DOMContentLoaded", function () {
    console.log("Investigación cargada.");

    // Carrusel de testimonios
    const testimonios = [
        "Perdí todo mi dinero en esta estafa.",
        "Me prometieron ganancias y me robaron.",
        "Nadie respondió cuando intenté retirar mis fondos."
    ];

    let index = 0;
    const slide = document.querySelector(".slide");
    slide.textContent = testimonios[index];

    document.querySelector(".next").addEventListener("click", function () {
        index = (index + 1) % testimonios.length;
        slide.textContent = testimonios[index];
    });

    document.querySelector(".prev").addEventListener("click", function () {
        index = (index - 1 + testimonios.length) % testimonios.length;
        slide.textContent = testimonios[index];
    });

    // Infografía interactiva
    document.querySelectorAll(".fraude-item").forEach(item => {
        item.addEventListener("mouseover", function () {
            alert(item.getAttribute("data-info"));
        });
    });

    // Preguntas Frecuentes
    document.querySelectorAll(".faq-item h3").forEach(item => {
        item.addEventListener("click", function () {
            this.nextElementSibling.style.display = "block";
        });
    });
});