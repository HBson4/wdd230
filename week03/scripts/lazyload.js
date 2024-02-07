// Get last modified date
const lastModifiedElement = document.querySelector('#lastModified');
const lastModifiedDate = document.lastModified;
lastModifiedElement.innerHTML = `Last Modified: ${lastModifiedDate}`;


// Get current year
const currentYearElement = document.querySelector('#year');
const currentYear = new Date().getFullYear();
currentYearElement.innerHTML = `&copy;${currentYear}`;