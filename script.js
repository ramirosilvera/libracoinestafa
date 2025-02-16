document.addEventListener('DOMContentLoaded', function() {
  /* --- Acordeón --- */
  const accordionButtons = document.querySelectorAll('.accordion-button');
  accordionButtons.forEach(button => {
    button.addEventListener('click', function() {
      this.classList.toggle('active');
      const content = this.nextElementSibling;
      // Usamos getComputedStyle para comprobar el display actual
      if (window.getComputedStyle(content).display === 'none') {
        content.style.display = 'block';
      } else {
        content.style.display = 'none';
      }
    });
  });

  /* --- Línea de Tiempo --- */
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

  const timelineContainer = document.getElementById('timeline');
  if (timelineContainer) {
    timelineData.forEach(event => {
      const eventDiv = document.createElement('div');
      eventDiv.classList.add('timeline-event');
      eventDiv.innerHTML = `
        <h3>${event.date} - ${event.title}</h3>
        <p>${event.description}</p>
      `;
      timelineContainer.appendChild(eventDiv);
    });
  }

  /* --- Modal para Infografía --- */
  const btnInfografia = document.getElementById('btnInfografia');
  const modalInfografia = document.getElementById('modalInfografia');
  const closeModal = document.getElementById('closeModal');

  btnInfografia.addEventListener('click', function() {
    modalInfografia.style.display = 'block';
  });

  closeModal.addEventListener('click', function() {
    modalInfografia.style.display = 'none';
  });

  window.addEventListener('click', function(event) {
    if (event.target === modalInfografia) {
      modalInfografia.style.display = 'none';
    }
  });

  /* --- Quiz --- */
  const quizForm = document.getElementById('quizForm');
  const submitQuiz = document.getElementById('submitQuiz');
  const quizResultado = document.getElementById('quizResultado');

  submitQuiz.addEventListener('click', function() {
    let score = 0;
    const q1 = quizForm.elements['q1'].value;
    const q2 = quizForm.elements['q2'].value;
    if (q1 === 'b') score++;
    if (q2 === 'b') score++;
    quizResultado.innerHTML = `<p>Obtuviste ${score} de 2 respuestas correctas.</p>`;
  });
});