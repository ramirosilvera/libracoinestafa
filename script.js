document.addEventListener("DOMContentLoaded", function() {
  let currentInvestment = 0;  // Monto invertido (100, 500 o 1000)
  let purchasePrice = 0;      // Precio de compra (para simular que compras caro)
  let priceInterval;          // Intervalo de simulación del precio
  let currentPrice = 0;       // Precio simulado (se muestra en el gráfico)

  // Función para mostrar una pantalla y ocultar las demás
  function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
      screen.classList.add('hidden');
    });
    document.getElementById(screenId).classList.remove('hidden');
  }

  // Funciones para abrir y cerrar modales
  window.openModal = function(modalId) {
    document.getElementById(modalId).style.display = "block";
  };

  window.closeModal = function(modalId) {
    document.getElementById(modalId).style.display = "none";
  };

  // Navegación entre pantallas
  document.getElementById("start-btn").addEventListener("click", function() {
    showScreen("intro-screen");
  });

  document.getElementById("next-btn").addEventListener("click", function() {
    showScreen("invest-screen");
  });

  // Selección de inversión
  document.querySelectorAll(".invest-btn").forEach(btn => {
    btn.addEventListener("click", function() {
      currentInvestment = parseInt(this.getAttribute("data-amount"));
      // Simulamos que compras caro: pagas un 20% más de lo que invertiste
      purchasePrice = currentInvestment * 1.2;
      // El precio simulado comienza en el precio de compra
      currentPrice = purchasePrice;
      document.getElementById("chart").textContent = "Valor actual: $" + currentPrice;
      showScreen("price-rise-screen");
      startPriceSimulation();
    });
  });

  // Simulación del aumento del precio (el gráfico)
  function startPriceSimulation() {
    if (priceInterval) clearInterval(priceInterval);
    priceInterval = setInterval(function() {
      // Incrementa el precio aleatoriamente para mostrar el "hype"
      const increase = Math.floor(Math.random() * 10) + 1;
      currentPrice += increase;
      document.getElementById("chart").textContent = "Valor actual: $" + currentPrice;
    }, 1000);
  }

  // Función para detener la simulación
  function stopPriceSimulation() {
    clearInterval(priceInterval);
    document.getElementById("final-chart").textContent = "Valor final: $" + currentPrice;
  }

  // Si vendes: siempre pierdes, aunque no tanto (pérdida del 20% sobre la inversión original)
  document.getElementById("sell-btn").addEventListener("click", function() {
    clearInterval(priceInterval);
    // Resultado forzado: 20% de pérdida respecto a la inversión original
    const finalValue = currentInvestment * 0.8;
    document.getElementById("final-chart").textContent = "Valor final: $" + finalValue;
    const loss = currentInvestment - finalValue;
    document.getElementById("result-message").textContent = "Vendiste a tiempo, pero perdiste $" + loss + ".";
    showScreen("collapse-screen");
  });

  // Si mantienes: pierdes todo (100% de pérdida)
  document.getElementById("hold-btn").addEventListener("click", function() {
    clearInterval(priceInterval);
    setTimeout(function() {
      const finalValue = 0;
      document.getElementById("final-chart").textContent = "Valor final: $" + finalValue;
      document.getElementById("result-message").textContent = "Decidiste mantener, y el precio colapsó. Invertiste $" + currentInvestment + " y ahora vale $" + finalValue + ".";
      showScreen("collapse-screen");
    }, 2000);
  });

  // Botón para pasar a la pantalla final de explicación y conclusiones
  document.getElementById("final-btn").addEventListener("click", function() {
    showScreen("final-screen");
  });

  // Botón para reiniciar el juego (disponible en la pantalla final)
  document.getElementById("restart-btn").addEventListener("click", restartGame);

  function restartGame() {
    currentInvestment = 0;
    purchasePrice = 0;
    currentPrice = 0;
    clearInterval(priceInterval);
    showScreen("start-screen");
  }
});