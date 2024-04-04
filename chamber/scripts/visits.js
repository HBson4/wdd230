const visits = document.querySelector("#visited");
const currentDate = Date.now();
const millisecondsTotal = 1000 * 60 * 60 * 24;
let visitDate = Number(window.localStorage.getItem('lastVisit')) || 0;

if (!visitDate) {
    visits.textContent = 'Welcome! Let us know if you have any questions.';
}
else {
    const daysSince = Math.floor((currentDate - visitDate) / millisecondsTotal);

    if (daysSince < 1) {
        visits.textContent = `Back so soon! Awesome!`;
    }
    else if (daysSince === 1) {
        visits.textContent = `You last visited ${daysSince} day ago!`;
    }
    else {
        visits.textContent = `You last visited ${daysSince} days ago!`;
    }
};

window.localStorage.setItem('lastVisit', currentDate);