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

// Date user last visited (for discover page)


// Home page banner
function closeBanner() {
    document.getElementById("banner").style.display = "none";
}

function isBannerDay() {
    const today = new Date();
    const dayOfWeek = today.getDay();
    return dayOfWeek >= 1 && dayOfWeek <= 3;
}

function showBannerOnSpecificDays() {
    if (isBannerDay()) {
        document.getElementById("banner").style.display = "block";
    }
}

window.onload = showBannerOnSpecificDays();