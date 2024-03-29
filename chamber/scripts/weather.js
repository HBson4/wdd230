const api = 'https://api.openweathermap.org/data/2.5/forecast?lat=33.44699029384253&lon=-112.07018528539054&appid=a91aee95660dbba1541c15246bd7ab75&units=imperial';

async function apiFetch() {
    try {
        const response = await fetch(api);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            // displayResults(data);
        } 
        else {
            throw Error(await response.text());
        }}
        catch (error) {
            console.log(error);
    }
}

apiFetch();