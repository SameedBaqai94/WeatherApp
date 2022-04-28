'use strict';
class UI {
    constructor(data, city) {
        this.weatherID = document.getElementById('weather');
        this.cityID = document.getElementById('city');
        this.h3 = document.getElementById('temp');
        this.p = document.getElementById('feelsLike');

        this.minTemp = document.getElementById('minDesc');
        this.min = document.getElementById('min');
        this.icon1 = document.getElementById('icon-1');

        this.maxTemp = document.getElementById('maxDesc');
        this.max = document.getElementById('max');
        this.icon2 = document.getElementById('icon-2');

        this.main = data.main;
        this.weather = data.weather[0];
        this.city = city;
    }

    createUI() {
        //main temp div
        this.weatherID.textContent = this.weather.description;
        this.cityID.textContent = this.city;
        this.h3.textContent = ` ${this.main.temp} \u2103`;
        this.p.textContent = `Feels like ${this.main.feels_like} \u2103`;

        //side temp div
        //min
        this.icon1.classList.add("fa-solid")
        this.icon1.classList.add("fa-temperature-arrow-down");
        this.icon1.classList.add("fa-5x");
        this.minTemp.textContent = 'Min Temp';
        this.min.textContent = `${this.main.temp_min} \u2103`;

        //max
        this.icon2.classList.add("fa-solid")
        this.icon2.classList.add("fa-temperature-arrow-up");
        this.icon2.classList.add("fa-5x");
        this.maxTemp.textContent = 'Max Temp';
        this.max.textContent = `${this.main.temp_max} \u2103`
    }
}

export default UI;