// Main application

//Init storage
const storage = new Storage();
// Get stored location data
const weatherLocation = storage.getLocationData();
// Init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.state);
// const weather = new Weather('London', 'UK');
// Initialise UI
const ui = new UI();
//Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather)

  // Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {

    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;

    // Change location
    weather.changeLocation(city, state);

    // Set location in local storage
    storage.setLocationData(city, state)

    // Get and display weather
    getWeather();

    // Close model - bootstraps uses jquery so we use methods from its library below
    $('#locModal').modal('hide');


});



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