const temp = document.querySelector('#temp');
const icon = document.querySelector('#icon');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=33.41511383579722&lon=-111.82878674211621&appid=a91aee95660dbba1541c15246bd7ab75&units=imperial';

async function apiFetch() {
    try {
        const response = await fetch(url);
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
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const desc = data.weather[0].description;

    icon.setAttribute('src', iconsrc);
    icon.setAttribute('alt', desc);
    temp.innerHTML = `${data.main.temp.toFixed(0)}&deg; F - ${data.weather[0].description}`;
}