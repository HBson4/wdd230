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