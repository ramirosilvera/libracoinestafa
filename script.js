document.addEventListener("DOMContentLoaded", function() {
  let currentInvestment = 0;
  let priceInterval;
  let currentPrice = 100;
  
  // Función para mostrar una pantalla y ocultar las demás
  function showScreen(screenId) {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => {
      screen.classList.add('hidden');
    });
    document.getElementById(screenId).classList.remove('hidden');
  }
  
  // Funciones para abrir y cerrar modales
  window.openModal = function(modalId) {
    document.getElementById(modalId).style.display = "block";
  }
  
  window.closeModal = function(modalId) {
    document.getElementById(modalId).style.display = "none";
  }
  
  // Botón de inicio
  document.getElementById("start-btn").addEventListener("click", function() {
    showScreen("intro-screen");
  });
  
  // Botón siguiente en la introducción
  document.getElementById("next-btn").addEventListener("click", function() {
    showScreen("invest-screen");
  });
  
  // Botones de inversión
  document.querySelectorAll(".invest-btn").forEach(btn => {
    btn.addEventListener("click", function() {
      currentInvestment = parseInt(this.getAttribute("data-amount"));
      currentPrice = 100; // precio inicial
      document.getElementById("chart").textContent = "Precio actual: $" + currentPrice;
      showScreen("price-rise-screen");
      startPriceSimulation();
    });
  });
  
  // Función de simulación de precio
  function startPriceSimulation() {
    if (priceInterval) clearInterval(priceInterval);
    priceInterval = setInterval(function() {
      // Incrementa el precio de forma aleatoria entre 1 y 10
      const increase = Math.floor(Math.random() * 10) + 1;
      currentPrice += increase;
      document.getElementById("chart").textContent = "Precio actual: $" + currentPrice;
    }, 1000);
  }
  
  // Detener la simulación y mostrar precio final
  function stopPriceSimulation() {
    clearInterval(priceInterval);
    document.getElementById("final-chart").textContent = "Precio final: $" + currentPrice;
  }
  
  // Botón de vender
  document.getElementById("sell-btn").addEventListener("click", function() {
    clearInterval(priceInterval);
    stopPriceSimulation();
    let resultMessage = "";
    if (currentPrice > 100) {
      resultMessage = "¡Bien hecho! Vendiste a tiempo y obtuviste una ganancia de $" + (currentPrice - 100) + ".";
    } else {
      resultMessage = "Vendiste, pero no obtuviste ganancia.";
    }
    document.getElementById("result-message").textContent = resultMessage;
    showScreen("collapse-screen");
  });
  
  // Botón de mantener: simula un colapso del precio
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
  
  // Botón siguiente en la explicación para pasar a la conclusión
  document.getElementById("next-btn-2").addEventListener("click", function() {
    showScreen("conclusion-screen");
  });
  
  // Botones de reinicio
  document.getElementById("restart-btn").addEventListener("click", restartGame);
  document.getElementById("restart-btn-2").addEventListener("click", restartGame);
  
  // Función para reiniciar el juego
  function restartGame() {
    currentInvestment = 0;
    currentPrice = 100;
    clearInterval(priceInterval);
    showScreen("start-screen");
  }
});