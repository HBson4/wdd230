// Hamburger Menu
const hamburgerElement = document.querySelector('#navButton');
const navElement = document.querySelector('#navLinks');

hamburgerElement.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('open');
});

// Get last modified date
const lastModifiedElement = document.querySelector('#lastModified');
const lastModifiedDate = document.lastModified;
lastModifiedElement.innerHTML = `Last Modified: ${lastModifiedDate}`;


// Get current year
const currentYearElement = document.querySelector('#year');
const currentYear = new Date().getFullYear();
currentYearElement.innerHTML = `&copy;${currentYear}`;

// Date user last visited
