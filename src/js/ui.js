'use strict';
class UI {
    constructor(data, city) {
        this.h1 = document.getElementById('city');
        this.h3 = document.getElementById('temp');
        this.p = document.getElementById('feelsLike');

        this.data = data;
        this.city = city;
    }

    createUI() {
        this.h1.textContent = this.city;
        this.h3.textContent = `Current Temperature ${this.data.temp} \u2103`;
        this.p.textContent = `Feels like ${this.data.feels_like} \u2103`;
    }
}

export default UI;