const current_temp = document.querySelector('#current_temp');
const day1 = document.querySelector('#day1');
const day2 = document.querySelector('#day2');
const day3 = document.querySelector('#day3');

const api = 'https://api.openweathermap.org/data/2.5/forecast?lat=33.44699029384253&lon=-112.07018528539054&appid=a91aee95660dbba1541c15246bd7ab75&units=imperial';

async function apiFetch() {
    try {
        const response = await fetch(api);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
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
    current_temp.innerHTML = `Current Temp:${data.list[0].main.temp.toFixed(0)}&deg; F - ${data.list[0].weather[0].description}`;
    day1.innerHTML = `Day 1: ${data.list[8].main.temp.toFixed(0)}&deg; F - ${data.list[8].weather[0].description}`;
    day2.innerHTML = `Day 2: ${data.list[16].main.temp.toFixed(0)}&deg; F - ${data.list[16].weather[0].description}`;
    day3.innerHTML = `Day 3: ${data.list[24].main.temp.toFixed(0)}&deg; F - ${data.list[24].weather[0].description}`;
}