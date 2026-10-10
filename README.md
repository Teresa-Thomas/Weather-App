# Weatherly

A simple, clean, and responsive weather web application that displays live weather information using the OpenWeatherMap API.

## Features

- **Simple Interface**: Clean, modern, minimalist design
- **Live Weather Data**: Retrieves real-time weather information from OpenWeatherMap API
- **User Input**: Enter API key, city, and country code through the web interface
- **Detailed Information**: Displays location, temperature, weather condition, feels like, humidity, wind speed, and pressure
- **Error Handling**: Shows helpful error messages for invalid API keys, location not found, or network issues
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- An API key from [OpenWeatherMap](https://openweathermap.org/api)

### Obtaining an API Key

1. Go to [OpenWeatherMap](https://openweathermap.org/)
2. Create a free account
3. Navigate to your API keys section
4. Generate a new API key (it may take a few minutes to activate)

### Running the Application

1. Clone or download this repository
2. Open `index.html` in your web browser
3. Enter your OpenWeatherMap API key in the API Key field
4. Enter the city name (e.g., "London")
5. Optionally enter the country code (e.g., "GB" or "UK")
6. Click "Get Weather" or press Enter

## Project Structure

```
Weather App/
├── index.html      # Main HTML file with the user interface
├── style.css       # Styling and responsive design
├── app.js          # JavaScript for API calls and DOM manipulation
└── README.md       # Project documentation
```

## How It Works

1. User enters API key, city, and optional country code
2. JavaScript constructs the API request to OpenWeatherMap
3. Fetches live weather data in JSON format
4. Parses and displays the information in a clean, readable format
5. Error handling ensures users get clear feedback on any issues

## API Information

This application uses the [OpenWeatherMap Current Weather Data API](https://openweathermap.org/current). Temperature is displayed in Celsius (metric units).

## Notes

- Country code should be the ISO 3166 alpha-2 code (e.g., US, GB, CA, AU)
- If no country is specified, the API will search globally for the city name
- Free tier API keys have rate limits; please check OpenWeatherMap's terms for details

## License

This project is open source and available for personal and educational use.