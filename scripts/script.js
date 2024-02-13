// Hamburger Menu
const hamburgerElement = document.querySelector('#navButton');
const navElement = document.querySelector('#navLinks');

hamburgerElement.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('open');
});

// Dark Mode
const darkButton = document.querySelector('#darkBtn');
const main = document.querySelector('main')

darkButton.addEventListener('click', () => {
    main.classList.toggle('dark');
});

// Page Visits
const visitsDisplay = document.querySelector(".visits");
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
	visitsDisplay.textContent = "Page Visits: " + numVisits;
}
else {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

numVisits++;
localStorage.setItem("numVisits-ls", numVisits);