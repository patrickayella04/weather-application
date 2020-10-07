// Main application

// Init weather object
const weather = new Weather('London', 'uk');

weather.getWeather()
    .then(results => {
        console.log(results)
    })
    .catch(err => console.log(err));