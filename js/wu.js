// Code used to get 3rd party API informaiton (Weather Underground)
// Foundation for code off youtube video (can't find or remember source -
// had to reboot computer and lost video URL). Customized the data pulled though. 

var weather = new XMLHttpRequest();
weather.open('GET', 'https://api.wunderground.com/api/5b0c540c3c6e4cb7/conditions/q/FL/Windermere.json', false);
weather.send(null);

// fetch('https://api.wunderground.com/api/5b0c540c3c6e4cb7/conditions/q/FL/Windermere.json',{
// 	method:'get'
// }).then(function(response){

// }).catch(function(err)) {
// 	//Error :(
// });

var r = JSON.parse(weather.response);

// Creates variables to hold desired data elements retrieved.
var weather = r.current_observation.weather + '';
var temp = r.current_observation.temp_f + '';
var wind = r.current_observation.wind_mph + '';
var humidity = r.current_observation.relative_humidity + '';

// Function to get weather data elements

function getWeather(id,res) {
  // Did not use KO for DOM manipulation because only 
  // inserted once - does not need to be observable
  document.getElementById(id).innerHTML=res;
}

// Used to get data and display in coorsponding sections in index
getWeather('weather',weather);
getWeather('temp',temp);
getWeather('wind',wind);
getWeather('humidity',humidity);
