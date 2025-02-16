// Mostrar/ocultar contenido adicional
document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', function() {
        const target = document.getElementById(this.dataset.target);
        target.style.display = target.style.display === 'none' ? 'block' : 'none';
    });
});

// Buscador de glosario
document.getElementById('search-bar').addEventListener('input', function() {
    const search = this.value.toLowerCase();
    document.querySelectorAll('#glossary-list li').forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(search) ? 'block' : 'none';
    });
});