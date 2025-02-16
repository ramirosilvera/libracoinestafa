// Scroll suave para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Efecto hover en nodos de implicados
document.querySelectorAll('.nodo-implicado').forEach(nodo => {
    nodo.addEventListener('mouseover', () => {
        nodo.style.transform = 'scale(1.05)';
    });
    nodo.addEventListener('mouseout', () => {
        nodo.style.transform = 'scale(1)';
    });
});
