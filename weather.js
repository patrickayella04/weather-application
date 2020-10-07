// Request to API made with Weather.js
class Weather {
    constructor(city, state) {
        this.apiKey = '09dd78065d824e66b9d03235200710';
        this.city = city;
        this.state = state;
    }

    // Fetch weather from API
    async getWeather() {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${this.city}`);

        //http://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${this.city}

        const responseData = await response.json();

        return responseData

    }

    // Change weather location
    changeLocation(city, state) {
        this.city = city;
        this.state = state;
    }
}