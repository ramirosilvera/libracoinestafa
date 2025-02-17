document.addEventListener("DOMContentLoaded", function() {
  let currentInvestment = 0;
  let priceInterval;
  let currentPrice = 100;
  
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

  // Eventos de navegación
  document.getElementById("start-btn").addEventListener("click", function() {
    showScreen("intro-screen");
  });

  document.getElementById("next-btn").addEventListener("click", function() {
    showScreen("invest-screen");
  });

  document.querySelectorAll(".invest-btn").forEach(btn => {
    btn.addEventListener("click", function() {
      currentInvestment = parseInt(this.getAttribute("data-amount"));
      currentPrice = 100;
      document.getElementById("chart").textContent = "Precio actual: $" + currentPrice;
      showScreen("price-rise-screen");
      startPriceSimulation();
    });
  });

  // Simulación del incremento del precio
  function startPriceSimulation() {
    if (priceInterval) clearInterval(priceInterval);
    priceInterval = setInterval(function() {
      const increase = Math.floor(Math.random() * 10) + 1;
      currentPrice += increase;
      document.getElementById("chart").textContent = "Precio actual: $" + currentPrice;
    }, 1000);
  }

  function stopPriceSimulation() {
    clearInterval(priceInterval);
    document.getElementById("final-chart").textContent = "Precio final: $" + currentPrice;
  }

  document.getElementById("sell-btn").addEventListener("click", function() {
    clearInterval(priceInterval);
    stopPriceSimulation();
    let resultMessage = currentPrice > 100 ?
      "¡Bien hecho! Vendiste a tiempo y obtuviste una ganancia de $" + (currentPrice - 100) + "." :
      "Vendiste, pero no obtuviste ganancia.";
    document.getElementById("result-message").textContent = resultMessage;
    showScreen("collapse-screen");
  });

  document.getElementById("hold-btn").addEventListener("click", function() {
    clearInterval(priceInterval);
    setTimeout(function() {
      currentPrice = Math.floor(currentPrice * 0.3);
      document.getElementById("final-chart").textContent = "Precio final: $" + currentPrice;
      let resultMessage = "El precio colapsó. Invertiste $" + currentInvestment + " y ahora vale $" + currentPrice + ".";
      document.getElementById("result-message").textContent = resultMessage;
      showScreen("collapse-screen");
    }, 2000);
  });

  // Botón para ir a la pantalla final (explicación y conclusiones)
  document.getElementById("final-btn").addEventListener("click", function() {
    showScreen("final-screen");
  });

  // Botón para reiniciar el juego
  document.getElementById("restart-btn").addEventListener("click", restartGame);

  function restartGame() {
    currentInvestment = 0;
    currentPrice = 100;
    clearInterval(priceInterval);
    showScreen("start-screen");
  }
});