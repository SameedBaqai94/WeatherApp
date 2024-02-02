const searchBox=document.getElementById("search");
const searchButton=document.getElementById("searchButton");
const cityName=document.getElementById("cityName");
const cityWeather=document.getElementById("cityWeather");
const humidityText=document.getElementById("humidity");
const weatherId=document.getElementById("id");
const descriptionText=document.getElementById("description");

async function buttonClick(){
    console.log(searchBox.value.toLowerCase());
    const data=await weatherData(searchBox.value.toLowerCase());
    console.log(data);
    DOMCreation(data);   
}

function DOMCreation(weatherData){
    const{name:city,main:{temp,humidity},
          weather:[{description,id}]}=weatherData;

    cityName.textContent=city;
    cityWeather.textContent=`${(temp).toFixed(1)}°C`;
    humidityText.textContent=`Humidity: ${humidity}%`;
    descriptionText.textContent=description;
    weatherId.textContent=getWeatherID(id);

}
async function weatherData(city){
    const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}`+
                                `&appid=391c04351bf8857df96603d7482da582&units=metric`)
    const data=await response.json();
    return data;
}

function getWeatherID(id){
    console.log(id);

    switch(true){
        case(id >= 200 && id < 300):
            return "⛈";
        case(id >=300 && id < 500):
            return "☔";
        case(id >=500 &&  id < 600):
            return "🌧";
        case(id >= 600 && id < 700):
            return "❄";
        case(id >= 700 && id < 800):
            return "🌫";
        case(id == 800):
            return "☀";
        case(id >= 800 && id < 900):
            return "☁";
        
    }
}