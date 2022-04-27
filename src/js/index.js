'use strict';

const WeatherApp = () => {
    const API_KEY = 'a665874f32d3fac7e4257030076e571e';
    const API = 'http://api.openweathermap.org/';

    const getCityLatLong = (city) => {
        fetch(`${API}/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`, {
            mode: 'cors',
        })
            .then((response) => response.json())
            .then((data) => console.log(data))
    }

    return { getCityLatLong }
}

const weather = WeatherApp();
weather.getCityLatLong('Toronto');