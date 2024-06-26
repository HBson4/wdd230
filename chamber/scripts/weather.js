const current_desc = document.querySelector('#current_desc');
const day1 = document.querySelector('#day1');
const day2 = document.querySelector('#day2');
const day3 = document.querySelector('#day3');
const desc1 = document.querySelector('#desc1');
const desc2 = document.querySelector('#desc2');
const desc3 = document.querySelector('#desc3');

const api = 'https://api.openweathermap.org/data/2.5/forecast?lat=33.44699029384253&lon=-112.07018528539054&appid=a91aee95660dbba1541c15246bd7ab75&units=imperial';

async function apiFetch() {
    try {
        const response = await fetch(api);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } 
        else {
            throw Error(await response.text());
        }}
        catch (error) {
            console.log(error);
    }
}

apiFetch();

function displayResults(data) {
    current_desc.innerHTML = `${data.list[0].main.temp.toFixed(0)}&deg; F - ${data.list[0].weather[0].description}`;

    day1.innerHTML = `${getDay(1)}`;
    desc1.innerHTML = `${data.list[8].main.temp.toFixed(0)}&deg; F - ${data.list[8].weather[0].description}`;

    day2.innerHTML = `${getDay(2)}`;
    desc2.innerHTML = `${data.list[16].main.temp.toFixed(0)}&deg; F - ${data.list[16].weather[0].description}`;

    day3.innerHTML = `${getDay(3)}`;
    desc3.innerHTML = `${data.list[24].main.temp.toFixed(0)}&deg; F - ${data.list[24].weather[0].description}`;
}

function getDay(num) {
    const date = new Date();
    const weekday = new Array(7);

    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    if (date.getDay() + num > 6) {
        return weekday[date.getDay() + num - 7];
    }

    return weekday[date.getDay() + num];
}