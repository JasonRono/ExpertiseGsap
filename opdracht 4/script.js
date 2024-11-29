document.addEventListener('DOMContentLoaded', function () {
    // Registreer de ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // GSAP animatie voor stepBar
    gsap.from('.stepBar', {
        x: 100, // Positieve waarde om vanaf rechts te beginnen
        duration: 1,
        width: 0,
        ease: "power1.inOut",
        onComplete: function () {
            gsap.to('.stepBar', { width: '100px', duration: 1 });
        }
    });

    // Chart.js animatie
    const ctx = document.getElementById('weightChart').getContext('2d');
    const weightChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag', 'Zondag'],
            datasets: [{
                label: 'Gewicht',
                data: [70, 71, 69, 68, 70, 72, 71],
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

    gsap.from(weightChart.data.datasets[0].data, {
        duration: 2,
        ease: "power1.inOut",
        y: 100,
        onUpdate: function () {
            weightChart.update();
        }
    });

    // ScrollTrigger animaties voor secties
    gsap.utils.toArray('section').forEach(section => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse',
            },
            opacity: 0,
            y: 50,
            duration: 1
        });
    });
});

const healthData = [
    {
        name: 'Voeding',
        tips: ['Drink voldoende water', 'Eet gezond', 'Beweeg voldoende']
    },
    {
        name: 'Beweging',
        tips: ['Maak een wandeling', 'Doe aan yoga', 'Ga fietsen']
    },
    {
        name: 'Hydratatie',
        tips: ['Drink 8 glazen water per dag', 'Vermijd suikerhoudende dranken', 'Drink kruidenthee']
    }
];

const tipTextContent = document.querySelector('.tip');
const tipButton = document.getElementById('randomMiseBtn');
let tipTextContentH3 = tipTextContent.querySelector('h3');
let tipTextContentP = tipTextContent.querySelector('p');

function randomTip() {
    let randomCategory = healthData[Math.floor(Math.random() * healthData.length)];
    let randomTipText = randomCategory.tips[Math.floor(Math.random() * randomCategory.tips.length)];

    tipTextContentH3.textContent = randomCategory.name;
    tipTextContentP.textContent = randomTipText;
}

tipButton.addEventListener('click', randomTip);