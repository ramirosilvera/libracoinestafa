document.addEventListener('DOMContentLoaded', function() {
  /* --- Acordeón --- */
  const accordionItems = document.querySelectorAll('.accordion-item');
  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    header.addEventListener('click', () => {
      item.classList.toggle('active');
      const content = item.querySelector('.accordion-content');
      if (item.classList.contains('active')) {
        content.style.maxHeight = content.scrollHeight + "px";
      } else {
        content.style.maxHeight = null;
      }
    });
  });

  /* --- Línea de Tiempo --- */
  const timelineData = [
    {
      date: "Día 1",
      title: "Lanzamiento & Promoción",
      description: "LIBRA Coin se lanza con gran publicidad, respaldada por figuras como Javier Milei."
    },
    {
      date: "Día 2",
      title: "Inflado Artificial",
      description: "El valor se manipula para alcanzar un market cap de $4.5B, sin respaldo real."
    },
    {
      date: "Día 3",
      title: "Venta Masiva",
      description: "Los insiders retiran $87.4M, dejando el sistema vulnerable."
    },
    {
      date: "Día 4",
      title: "Colapso",
      description: "El precio se desploma, revelando la estafa."
    }
  ];
  const timelineContainer = document.querySelector('.timeline');
  if (timelineContainer) {
    timelineData.forEach(event => {
      const eventEl = document.createElement('div');
      eventEl.className = 'timeline-event';
      eventEl.innerHTML = `<h3>${event.date} - ${event.title}</h3><p>${event.description}</p>`;
      eventEl.style.animation = "fadeInUp 0.6s ease";
      timelineContainer.appendChild(eventEl);
    });
  }

  /* --- Carrusel Interactivo --- */
  const btnCarousel = document.getElementById('btnCarousel');
  const modalCarousel = document.getElementById('modalCarousel');
  const closeModal = document.getElementById('closeModal');
  const carouselContent = document.getElementById('carouselContent');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const indicator = document.getElementById('carouselIndicator');

  const carouselSteps = [
    { title: "Paso 1: Promoción", text: "Javier Milei respalda públicamente LIBRA Coin, generando expectación.", icon: "📢" },
    { title: "Paso 2: Inflado", text: "Se manipula el market cap a $4.5B mediante precios inflados.", icon: "📈" },
    { title: "Paso 3: Venta", text: "Insiders retiran $87.4M vendiendo tokens en la cima.", icon: "💰" },
    { title: "Paso 4: Colapso", text: "El precio se desploma y los inversores pierden su dinero.", icon: "💥" },
    { title: "Paso 5: Consecuencias", text: "Se inician investigaciones por fraude y lavado de dinero.", icon: "⚖️" }
  ];
  
  let currentStep = 0;
  
  function updateCarousel() {
    const step = carouselSteps[currentStep];
    carouselContent.innerHTML = `
      <div class="carousel-step">
        <div class="carousel-icon">${step.icon}</div>
        <h4>${step.title}</h4>
        <p>${step.text}</p>
      </div>
    `;
    indicator.textContent = `Paso ${currentStep + 1} de ${carouselSteps.length}`;
    prevBtn.disabled = currentStep === 0;
    nextBtn.disabled = currentStep === carouselSteps.length - 1;
    prevBtn.style.opacity = prevBtn.disabled ? 0.5 : 1;
    nextBtn.style.opacity = nextBtn.disabled ? 0.5 : 1;
  }
  
  btnCarousel.addEventListener('click', () => {
    modalCarousel.style.display = "flex";
    currentStep = 0;
    updateCarousel();
  });
  
  closeModal.addEventListener('click', () => {
    modalCarousel.style.display = "none";
  });
  
  window.addEventListener('click', (e) => {
    if (e.target === modalCarousel) {
      modalCarousel.style.display = "none";
    }
  });
  
  prevBtn.addEventListener('click', () => {
    if (currentStep > 0) {
      currentStep--;
      updateCarousel();
    }
  });
  
  nextBtn.addEventListener('click', () => {
    if (currentStep < carouselSteps.length - 1) {
      currentStep++;
      updateCarousel();
    }
  });
  
  /* --- Quiz --- */
  const quizForm = document.getElementById('quizForm');
  const submitQuiz = document.getElementById('submitQuiz');
  const quizResult = document.getElementById('quizResult');
  
  submitQuiz.addEventListener('click', () => {
    let score = 0;
    const answer1 = quizForm.elements['q1'].value;
    const answer2 = quizForm.elements['q2'].value;
    if (answer1 === 'b') score++;
    if (answer2 === 'b') score++;
    quizResult.innerHTML = `<p>Obtuviste ${score} de 2 respuestas correctas.</p>`;
  });
});