// Weatherly - Weather Application
const apiKeyInput = document.getElementById('apiKey');
const cityInput = document.getElementById('city');
const countryInput = document.getElementById('country');
const getWeatherBtn = document.getElementById('getWeatherBtn');
const errorDiv = document.getElementById('error');
const weatherInfoDiv = document.getElementById('weatherInfo');
const locationEl = document.getElementById('location');
const temperatureEl = document.getElementById('temperature');
const conditionEl = document.getElementById('condition');
const detailsEl = document.getElementById('details');

// Event listener for button click
getWeatherBtn.addEventListener('click', getWeather);

// Event listener for Enter key
apiKeyInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        getWeather();
    }
});

cityInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        getWeather();
    }
});

countryInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        getWeather();
    }
});

async function getWeather() {
    // Clear previous results
    hideError();
    hideWeatherInfo();
    
    // Get input values
    const apiKey = apiKeyInput.value.trim();
    const city = cityInput.value.trim();
    const country = countryInput.value.trim();
    
    // Validate inputs
    if (!apiKey) {
        showError('Please enter your OpenWeatherMap API key.');
        return;
    }
    
    if (!city) {
        showError('Please enter a city.');
        return;
    }
    
    // Build the location query
    let locationQuery = city;
    if (country) {
        locationQuery = `${city},${country}`;
    }
    
    // OpenWeatherMap API endpoint
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(locationQuery)}&appid=${apiKey}&units=metric`;
    
    try {
        getWeatherBtn.disabled = true;
        getWeatherBtn.textContent = 'Loading...';
        
        const response = await fetch(url);
        
        if (!response.ok) {
            if (response.status === 401) {
                showError('Invalid API key. Please check your OpenWeatherMap API key.');
                return;
            } else if (response.status === 404) {
                showError('Location not found. Please check the city and country code.');
                return;
            } else {
                const errorData = await response.json().catch(() => ({}));
                showError(errorData.message || `Request failed with status ${response.status}.`);
                return;
            }
        }
        
        const data = await response.json();
        displayWeather(data);
        
    } catch (error) {
        showError('Network error or request failed. Please check your internet connection.');
    } finally {
        getWeatherBtn.disabled = false;
        getWeatherBtn.textContent = 'Get Weather';
    }
}

function displayWeather(data) {
    const location = data.name;
    const country = data.sys && data.sys.country ? data.sys.country : '';
    const temp = Math.round(data.main.temp);
    const condition = data.weather && data.weather[0] ? data.weather[0].description : 'N/A';
    const feelsLike = Math.round(data.main.feels_like);
    const humidity = data.main.humidity;
    const windSpeed = data.wind ? Math.round(data.wind.speed * 10) / 10 : 'N/A';
    const pressure = data.main.pressure;
    
    locationEl.textContent = country ? `${location}, ${country}` : location;
    temperatureEl.textContent = `${temp}°C`;
    conditionEl.textContent = condition;
    
    detailsEl.innerHTML = `
        <div>Feels like: ${feelsLike}°C</div>
        <div>Humidity: ${humidity}%</div>
        <div>Wind Speed: ${windSpeed} m/s</div>
        <div>Pressure: ${pressure} hPa</div>
    `;
    
    weatherInfoDiv.style.display = 'block';
}

function showError(message) {
    errorDiv.textContent = message;
    errorDiv.style.display = 'block';
}

function hideError() {
    errorDiv.style.display = 'none';
}

function hideWeatherInfo() {
    weatherInfoDiv.style.display = 'none';
}