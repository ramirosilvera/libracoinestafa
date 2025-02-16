// Esperamos a que el DOM se cargue completamente
document.addEventListener('DOMContentLoaded', function() {
  // Funcionalidad del Acordeón
  const accButtons = document.querySelectorAll('.accordion-button');
  accButtons.forEach(button => {
    button.addEventListener('click', function() {
      this.classList.toggle('active');
      const content = this.nextElementSibling;
      content.style.display = (content.style.display === "block") ? "none" : "block";
    });
  });

  // Datos para la Línea de Tiempo (Historia)
  const timelineData = [
    {
      date: "Día 1",
      title: "Promoción Masiva",
      description: "LIBRA Coin es lanzada y promocionada intensamente, prometiendo financiar proyectos innovadores en Argentina."
    },
    {
      date: "Día 2",
      title: "Market Cap Inflado",
      description: "Gracias a pocas ventas a precios altísimos, el market cap se infla artificialmente hasta alcanzar $4.5B, sin respaldo real."
    },
    {
      date: "Día 3",
      title: "Venta Masiva de Insiders",
      description: "Los insiders venden tokens por un total de $87.4M, extrayendo grandes sumas y dejando la estructura vulnerable."
    },
    {
      date: "Día 4",
      title: "Colapso del Precio",
      description: "El precio se desploma, revelando la verdadera naturaleza del fraude y dejando a los inversores con pérdidas significativas."
    }
  ];

  // Cargar la línea de tiempo dinámicamente
  const timelineContainer = document.getElementById('timeline');
  timelineData.forEach(event => {
    const eventDiv = document.createElement('div');
    eventDiv.classList.add('timeline-event');
    eventDiv.innerHTML = `
      <h3>${event.date} - ${event.title}</h3>
      <p>${event.description}</p>
    `;
    timelineContainer.appendChild(eventDiv);
  });

  // Funciones para el Modal de la Infografía
  window.mostrarInfografia = function() {
    document.getElementById('infografia').style.display = "block";
  };

  window.cerrarInfografia = function() {
    document.getElementById('infografia').style.display = "none";
  };

  // Función para evaluar el Quiz
  window.evaluarQuiz = function() {
    const form = document.getElementById('quizForm');
    const resultadoDiv = document.getElementById('quizResultado');
    let score = 0;
    // Pregunta 1: Respuesta correcta es "b"
    const q1 = form.elements['q1'].value;
    if (q1 === 'b') { score++; }
    // Pregunta 2: Respuesta correcta es "b"
    const q2 = form.elements['q2'].value;
    if (q2 === 'b') { score++; }
    resultadoDiv.innerHTML = `<p>Obtuviste ${score} de 2 respuestas correctas.</p>`;
  };
});
