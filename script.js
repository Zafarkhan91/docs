// API configuration
const apiKey = "YOUR_API_KEY_HERE"; // Important: Replace with your OpenWeatherMap API key
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// DOM element selection
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const weatherDisplay = document.querySelector(".weather");
const errorDisplay = document.querySelector(".error");

// Function to fetch and display weather data
async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    // Handle city not found error
    if (response.status == 404) {
        errorDisplay.style.display = "block";
        weatherDisplay.style.display = "none";
        return;
    } else {
        errorDisplay.style.display = "none";
    }

    var data = await response.json();

    // Update DOM with weather data
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    // Update weather icon based on weather condition
    // Using placeholders instead of local images
    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "https://placehold.co/170x170/f1f1f1/555?text=☁️";
    } else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "https://placehold.co/170x170/fff/333?text=☀️";
    } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "https://placehold.co/170x170/a3d5ee/333?text=🌧️";
    } else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "https://placehold.co/170x170/b0e0e6/333?text=🌦️";
    } else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "https://placehold.co/170x170/e0e0e0/555?text=🌫️";
    }

    // Display the weather info
    weatherDisplay.style.display = "block";
}

// Event listener for the search button
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

// Event listener for pressing 'Enter' in the search box
searchBox.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        checkWeather(searchBox.value);
    }
});
