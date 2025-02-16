document.addEventListener('DOMContentLoaded', function() {
  /* --- Acordeón --- */
  const accordionButtons = document.querySelectorAll('.accordion-button');
  accordionButtons.forEach(button => {
    button.addEventListener('click', function() {
      this.classList.toggle('active');
      const content = this.nextElementSibling;
      content.style.display = (window.getComputedStyle(content).display === 'none') ? 'block' : 'none';
    });
  });

  /* --- Línea de Tiempo --- */
  const timelineData = [
    {
      date: "Día 1",
      title: "Lanzamiento y Promoción",
      description: "Se lanza LIBRA Coin con fuerte promoción, respaldada por figuras como Javier Milei."
    },
    {
      date: "Día 2",
      title: "Inflado Artificial",
      description: "Se manipula el market cap a $4.5B usando precios inflados sin respaldo real."
    },
    {
      date: "Día 3",
      title: "Venta Masiva",
      description: "Los insiders venden tokens por $87.4M, retirando grandes sumas y dejando el sistema vulnerable."
    },
    {
      date: "Día 4",
      title: "Colapso del Precio",
      description: "El valor se desploma, revelando el fraude y dejando a los inversores con pérdidas."
    }
  ];
  const timelineContainer = document.getElementById('timeline');
  if (timelineContainer) {
    timelineData.forEach(event => {
      const eventDiv = document.createElement('div');
      eventDiv.classList.add('timeline-event');
      eventDiv.innerHTML = `<h3>${event.date} - ${event.title}</h3><p>${event.description}</p>`;
      timelineContainer.appendChild(eventDiv);
    });
  }

  /* --- Carrusel Interactivo (Recurso Pedagógico) --- */
  const btnInfografia = document.getElementById('btnInfografia');
  const modalInfografia = document.getElementById('modalInfografia');
  const closeModal = document.getElementById('closeModal');
  const infographicContent = document.getElementById('infographic-content');
  const prevStepBtn = document.getElementById('prevStep');
  const nextStepBtn = document.getElementById('nextStep');

  // Contenido del carrusel
  const infographicSteps = [
    {
      title: "Paso 1: Promoción",
      text: "Javier Milei respalda públicamente LIBRA Coin, generando gran expectación.",
      icon: "📢"
    },
    {
      title: "Paso 2: Inflado Artificial",
      text: "Se manipula el market cap a $4.5B mediante precios inflados y especulación.",
      icon: "📈"
    },
    {
      title: "Paso 3: Venta de Insiders",
      text: "Los insiders retiran $87.4M vendiendo tokens en la cima.",
      icon: "💰"
    },
    {
      title: "Paso 4: Colapso",
      text: "El precio se desploma, dejando a los inversores con tokens sin valor.",
      icon: "💥"
    },
    {
      title: "Paso 5: Consecuencias Legales",
      text: "Se inician investigaciones por fraude, manipulación y lavado de dinero.",
      icon: "⚖️"
    }
  ];
  
  let currentStep = 0;
  function updateInfographic() {
    const step = infographicSteps[currentStep];
    infographicContent.innerHTML = `
      <div class="infographic-icon">${step.icon}</div>
      <h4>${step.title}</h4>
      <p>${step.text}</p>
      <p id="carousel-indicator">Paso ${currentStep + 1} de ${infographicSteps.length}</p>
    `;
    // Desactivar botones en los límites
    prevStepBtn.disabled = (currentStep === 0);
    nextStepBtn.disabled = (currentStep === infographicSteps.length - 1);
    prevStepBtn.style.opacity = prevStepBtn.disabled ? 0.5 : 1;
    nextStepBtn.style.opacity = nextStepBtn.disabled ? 0.5 : 1;
  }
  
  btnInfografia.addEventListener('click', function() {
    modalInfografia.style.display = 'block';
    currentStep = 0;
    updateInfographic();
  });
  
  closeModal.addEventListener('click', function() {
    modalInfografia.style.display = 'none';
  });
  
  window.addEventListener('click', function(event) {
    if (event.target === modalInfografia) {
      modalInfografia.style.display = 'none';
    }
  });
  
  prevStepBtn.addEventListener('click', function() {
    if (currentStep > 0) {
      currentStep--;
      updateInfographic();
    }
  });
  
  nextStepBtn.addEventListener('click', function() {
    if (currentStep < infographicSteps.length - 1) {
      currentStep++;
      updateInfographic();
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