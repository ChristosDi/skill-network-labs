function showweatherDetails(event) {
    event.preventDefault(); // Prevents page refresh

    const city = document.getElementById('city').value;
    const lat = document.getElementById('lat') ? document.getElementById('lat').value : '';
    const lon = document.getElementById('lon') ? document.getElementById('lon').value : '';
    const apiKey = '732d604cfb1ca09a71551e1a763ab43d';

    let apiUrl;

    if (city) {
        apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    } else if (lat && lon) {
        apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    } else {
        document.getElementById('weatherInfo').innerHTML = `<p>Please enter a city or latitude/longitude.</p>`;
        return;
    }

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`City not found (${response.status})`);
            }
            return response.json();
        })
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            const temperatureCelsius = (data.main.temp - 273.15).toFixed(2);

            weatherInfo.innerHTML = `
                <h2>Weather in ${data.name}</h2>
                <p>Temperature: ${temperatureCelsius}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Longitude: ${data.coord.lon}, Latitude: ${data.coord.lat}</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching weather:', error);
            document.getElementById('weatherInfo').innerHTML = `<p>❌ ${error.message}. Please try again.</p>`;
        });
}

document.getElementById('weatherForm').addEventListener('submit', showweatherDetails);
