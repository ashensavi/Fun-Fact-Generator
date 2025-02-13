const carFacts = [
    "The first gasoline-powered car was invented in 1885 by Karl Benz.",
    "The world's fastest production car is the Bugatti Chiron Super Sport 300+, which can reach speeds of over 300 mph.",
    "Electric cars produce zero tailpipe emissions, making them more environmentally friendly than traditional gasoline cars.",
    "The average car has about 30,000 parts.",
    "The Ford Model T, introduced in 1908, was the first car mass-produced on assembly lines.",
    "The first car radio was introduced in 1929.",
    "In 2020, electric vehicles accounted for about 4% of global car sales.",
    "The longest car in the world is the 1986 Cadillac Eldorado, which measures 100 feet long.",
    "The first self-driving car was developed in the 1980s by Carnegie Mellon University.",
    "Cars are responsible for about 75% of the world's oil consumption."
];

let currentFactIndex = 0;

const factDisplay = document.getElementById('factDisplay');
const nextFactBtn = document.getElementById('nextFactBtn');

function displayFact() {
    factDisplay.style.transform = 'translateX(100%)'; // Slide out to the right
    setTimeout(() => {
        currentFactIndex = (currentFactIndex + 1) % carFacts.length; // Update the index
        factDisplay.textContent = carFacts[currentFactIndex]; // Update the fact text
        factDisplay.style.transform = 'translateX(-100%)'; // Slide in from the left
        setTimeout(() => {
            factDisplay.style.transform = 'translateX(0)'; // Slide to original position
        }, 50); // Small delay to allow the slide-in effect to be visible
    }, 500); // Duration of the slide-out effect
}

nextFactBtn.addEventListener('click', displayFact);

// Display the first fact on page load
displayFact();
