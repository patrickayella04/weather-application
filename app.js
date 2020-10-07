// Main application

// Init weather object
const weather = new Weather('Liverpool', 'uk');

//Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather)

// weather.changeLocation('London')

// We wrap weather.getWeather in its own function so it can be called when the DOM loads, so we put an eventListener on it. 
function getWeather() {
    weather.getWeather()
        .then(results => {
            console.log(results)
        })
        .catch(err => console.log(err));
}