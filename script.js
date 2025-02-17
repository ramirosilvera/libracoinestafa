// script.js
document.addEventListener("DOMContentLoaded", () => {
    const startScreen = document.getElementById("start-screen");
    const introScreen = document.getElementById("intro-screen");
    const investScreen = document.getElementById("invest-screen");
    const priceRiseScreen = document.getElementById("price-rise-screen");
    const collapseScreen = document.getElementById("collapse-screen");
    const explanationScreen = document.getElementById("explanation-screen");
    const conclusionScreen = document.getElementById("conclusion-screen");

    let userInvestment = 0;
    let currentPrice = 1;

    // Iniciar juego
    document.getElementById("start-btn").addEventListener("click", () => {
        startScreen.classList.add("hidden");
        introScreen.classList.remove("hidden");
    });

    // Siguiente (Introducción)
    document.getElementById("next-btn").addEventListener("click", () => {
        introScreen.classList.add("hidden");
        investScreen.classList.remove("hidden");
    });

    // Decisión de invertir
    document.querySelectorAll(".invest-btn").forEach(button => {
        button.addEventListener("click", (e) => {
            userInvestment = parseInt(e.target.getAttribute("data-amount"));
            investScreen.classList.add("hidden");
            priceRiseScreen.classList.remove("hidden");
            simulatePriceRise();
        });
    });

    // Simular subida del precio
    function simulatePriceRise() {
        let time = 0;
        const interval = setInterval(() => {
            currentPrice += 0.1;
            if (currentPrice >= 5) {
                clearInterval(interval);
            }
            updateChart();
            time++;
        }, 500);
    }

    // Actualizar gráfico
    function updateChart() {
        const chart = document.getElementById("chart");
        chart.innerHTML = `<p>Precio actual: $${currentPrice.toFixed(2)}</p>`;
    }

    // Decisión de vender o mantener
    document.getElementById("sell-btn").addEventListener("click", () => {
        const profit = userInvestment * (currentPrice - 1);
        resultMessage.textContent = `¡Buen movimiento! Vendiste a tiempo y obtuviste una ganancia de $${profit.toFixed(2)}. Pero mira cómo el precio colapsó después.`;
        showCollapse();
    });

    document.getElementById("hold-btn").addEventListener("click", () => {
        resultMessage.textContent = `¡Oh no! El precio colapsó y perdiste tu inversión de $${userInvestment}.`;
        showCollapse();
    });

    // Mostrar colapso del precio
    function showCollapse() {
        priceRiseScreen.classList.add("hidden");
        collapseScreen.classList.remove("hidden");
        simulatePriceCollapse();
    }

    // Simular colapso del precio
    function simulatePriceCollapse() {
        let time = 0;
        const interval = setInterval(() => {
            currentPrice -= 0.5;
            if (currentPrice <= 0.1) {
                clearInterval(interval);
            }
            updateFinalChart();
            time++;
        }, 500);
    }

    // Actualizar gráfico final
    function updateFinalChart() {
        const finalChart = document.getElementById("final-chart");
        finalChart.innerHTML = `<p>Precio final: $${currentPrice.toFixed(2)}</p>`;
    }

    // Reiniciar juego
    document.getElementById("restart-btn").addEventListener("click", () => {
        collapseScreen.classList.add("hidden");
        explanationScreen.classList.remove("hidden");
    });

    // Siguiente (Explicación)
    document.getElementById("next-btn-2").addEventListener("click", () => {
        explanationScreen.classList.add("hidden");
        conclusionScreen.classList.remove("hidden");
    });

    // Reiniciar juego (Conclusión)
    document.getElementById("restart-btn-2").addEventListener("click", () => {
        conclusionScreen.classList.add("hidden");
        startScreen.classList.remove("hidden");
        userInvestment = 0;
        currentPrice = 1;
    });
});

// Funciones para modales
function openModal(modalId) {
    document.getElementById(modalId).classList.remove("hidden");
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.add("hidden");
}