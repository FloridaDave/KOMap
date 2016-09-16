var weather = new XMLHttpRequest();
weather.open("GET", "http://api.wunderground.com/api/fa5715ba5adff2ac/conditions/q/FL/Windermere.json", false);
weather.send(null);

var r = JSON.parse(weather.response);


var weather = r.current_observation.weather + "";
var temp = r.current_observation.temp_f + "";
var wind = r.current_observation.wind_string + "";
var humidity = r.current_observation.relative_humidity + "";

function getWeather(id,res) {
  document.getElementById(id).innerHTML=res;
}

getWeather("weather",weather);
getWeather("temp",temp);
getWeather("wind",wind);
getWeather("humidity",humidity);