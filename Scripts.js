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
      description: "LIBRA Coin se promocionó fuertemente, generando expectativas como un token para financiar proyectos del Viva La Libertad Project."
    },
    {
      date: "Inflado del Market Cap",
      title: "Market Cap de $4.5B",
      description: "Con pocas ventas a precios altos, se calculó un market cap inflado artificialmente, sin respaldo de inversión real."
    },
    {
      date: "Venta Masiva",
      title: "Insiders Retiran $87.4M",
      description: "Los insiders vendieron sus tokens en la cima, extrayendo grandes sumas y dejando al token vulnerable."
    },
    {
      date: "Colapso del Valor",
      title: "El Precio se Desploma",
      description: "Tras la venta masiva, el precio se desplomó, dejando a muchos inversores con tokens sin valor."
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
    `;
    timelineContainer.appendChild(eventDiv);
  });
});
