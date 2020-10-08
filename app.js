// Main application

// Init weather object
const weather = new Weather('London', 'uk');
// Initialise UI
const ui = new UI();
//Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather)

// weather.changeLocation('New York');

// We wrap weather.getWeather in its own function so it can be called when the DOM loads, so we put an eventListener on it. 
function getWeather() {
    weather.getWeather()
        .then(results => {
            // instead of just logging the results, we are going to call a method inside the ui class called paint.
            console.log(results)
            ui.paint(results);// The idea is its 'painting' the ui with the results we pass in. We create this method in the ui.js. 
        })
        .catch(err => console.log(err));
    
}