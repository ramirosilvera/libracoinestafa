document.addEventListener('DOMContentLoaded', function () {
  // Funcionalidad del Accordion
  const accButtons = document.querySelectorAll('.accordion-button');
  accButtons.forEach(button => {
    button.addEventListener('click', function () {
      this.classList.toggle('active');
      const content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  });

  // Datos para la cronología
  const timelineData = [
    {
      date: "Inicio del Hype",
      title: "Promoción Política",
      description: "LIBRA Coin se promocionó fuertemente, generando expectativas como un token para financiar proyectos del Viva La Libertad Project.",
      image: "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      date: "Inflado del Market Cap",
      title: "Market Cap de $4.5B",
      description: "Con pocas ventas a precios altos, se calculó un market cap inflado artificialmente, sin respaldo de inversión real.",
      image: "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      date: "Venta Masiva",
      title: "Insiders Retiran $87.4M",
      description: "Los insiders vendieron sus tokens en la cima, extrayendo grandes sumas y dejando al token vulnerable.",
      image: "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      date: "Colapso del Valor",
      title: "El Precio se Desploma",
      description: "Tras la venta masiva, el precio se desplomó, dejando a muchos inversores con tokens sin valor.",
      image: "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  // Insertamos dinámicamente los eventos de la cronología en la web
  const timelineContainer = document.querySelector('.timeline');
  timelineData.forEach(event => {
    const eventDiv = document.createElement('div');
    eventDiv.classList.add('timeline-event');
    eventDiv.innerHTML = `
      <h3>${event.date} - ${event.title}</h3>
      <p>${event.description}</p>
      <img src="${event.image}" alt="${event.title}" class="responsive-img">
    `;
    timelineContainer.appendChild(eventDiv);
  });

  // Animación de scroll suave para los enlaces del menú
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
});