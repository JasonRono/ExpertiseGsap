//Mijn Javascript code. 

gsap.from('.barResult',
    {
        y: 0, // Positieve waarde om vanaf beneden te beginnen
        duration: 1,
        height: 0,
    });

gsap.from('.stepBar',
    {
        x: 100, // Positieve waarde om vanaf rechts te beginnen
        duration: 1,
        width: 0,
    });

document.addEventListener('DOMContentLoaded', function () {
    // Maak de grafiek met Chart.js
    const ctx = document.getElementById('weightChart').getContext('2d');
    const weightChart = new Chart(ctx, {
        type: 'line', // Kies het type grafiek, bijvoorbeeld 'line', 'bar', etc.
        data: {
            labels: ['Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag', 'Zondag'], // Labels voor de x-as
            datasets: [{
                label: 'Gewicht',
                data: [70, 71, 69, 68, 70, 72, 71], // Voorbeeldgegevens voor de y-as
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Animeer de grafiek met GSAP
    gsap.from(weightChart.data.datasets[0].data, {
        duration: 2,
        ease: "power1.inOut",
        y: 100, // Begin de animatie vanaf een hogere y-waarde
        onUpdate: function () {
            weightChart.update();
        }
    });
});