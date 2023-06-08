var weatherAPIKey="afc152ee123b7909c41df0191e9e521a";   
var city;

http://api.openweathermap.org/geo/1.0/direct?q={city name}&limit={limit}&appid={afc152ee123b7909c41df0191e9e521a}

var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + afc152ee123b7909c41df0191e9e521a;
fetch(queryURL)



