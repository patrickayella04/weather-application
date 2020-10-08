// Deals with user interface

class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feels-like');
        this.visMiles = document.getElementById('w-vis-miles');
        this.wind = document.getElementById('w-wind');
    }

    paint(weather) { // results are called weather in this case. 
        this.location.textContent = weather.location.name;
        this.desc.textContent = weather.current.condition.text;
        this.string.textContent = weather.current.temp_c;
        this.icon.setAttribute('src', weather.current.condition.icon);
        this.humidity.textContent = `Relative Humidity percentage: ${weather.current.humidity}`;
        this.feelsLike.textContent = `Feels like in celsius: ${weather.current.feelslike_c}`;
        this.visMiles.textContent = `Visibility in Miles: ${weather.current.vis_miles}`;
        this.wind.textContent = `Wind in miles per hour: ${weather.current.wind_mph}`;

    }
}