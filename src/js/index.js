'use strict';

const WeatherApp = () => {
    const API_KEY = '1150b4611575b91fbe90116a52b03265';
    const API = 'http://api.openweathermap.org/';

    const getCityLatLong = (city) => {
        return fetch(`${API}/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`, {
            mode: 'cors',
        })
            .then((response) => response.json())
            .then((data) => data)
    }

    const getTemp = (lat, long) => {
        return fetch(`${API}data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`, {
            mode: 'cors'
        })
            .then(res => res.json())
            .then(data => data)
    }

    const runApp = (callback, time) => {
        return new Promise((resolve, reject) => {
            if (true) {
                setTimeout(() => resolve(callback), time)
            }
        })
    }
    return { runApp, getCityLatLong, getTemp }
}


const weather = WeatherApp();
let data = null;
weather.runApp(
    weather.getCityLatLong('Toronto')
        .then((res) => data = res),
    2000)
    .then(() => {
        return weather.runApp(
            weather.getTemp(data[0].lat, data[0].lon)
                .then((res) => data = res),
            2000
        )
    }).then(() => {
        console.log(data)
    })
