// Code used to get 3rd party API informaiton (Weather Underground)

var weather = new XMLHttpRequest();
weather.open("GET", "https://api.wunderground.com/api/5b0c540c3c6e4cb7/conditions/q/FL/Windermere.json", false);
weather.send(null);

var r = JSON.parse(weather.response);

// Creates variables to hold desired data elements retrieved.
var weather = r.current_observation.weather + "";
var temp = r.current_observation.temp_f + "";
var wind = r.current_observation.wind_mph + "";
var humidity = r.current_observation.relative_humidity + "";

// Function to get weather data elements

function getWeather(id,res) {
  document.getElementById(id).innerHTML=res;
}

// Used to get data and display in coorsponding sections in index
getWeather("weather",weather);
getWeather("temp",temp);
getWeather("wind",wind);
getWeather("humidity",humidity);
