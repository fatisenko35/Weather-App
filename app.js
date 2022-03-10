const city = document.getElementById("input");
const btn = document.getElementById("button");
const btnClose = document.getElementById("close");
btn.addEventListener("click", () =>{
        weather.fetchWeather(city.value);
        city.value = "";

})

let weather = {
   "apiKey": "425554189c9e5c23b449eed1b72bdb9f",
   fetchWeather: function (city) {
       fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
       + city 
       + "&units=metric&appid=" 
       + this.apiKey)
       .then(response => response.json())
       .then(data => this.displayWeather(data))
   },
   displayWeather : function(data) {
       const { name } = data;
       const { icon, description } = data.weather[0];
       const { temp, humidity } = data.main;
       const { speed } = data.wind;
       console.log(name, icon, temp, humidity, speed);
       document.querySelector("#city-name").innerText = "Weather in " + name;
       document.querySelector("#icon").src = "http://openweathermap.org/img/wn/"+ icon +"@2x.png";
       document.querySelector("#description").innerText = description;
       document.querySelector("#temp").innerText = temp + "° C";
       document.querySelector("#humidity").innerText = "Humidity : " + humidity;
       document.querySelector("#speed").innerText ="Wind Speed: " + speed;


   } 
}
btnClose.addEventListener("click", () =>{
       document.querySelector("#city-name").innerText = "";
       document.querySelector("#icon").src = "https://icon-library.com/images/error-icon-png/error-icon-png-15.jpg";
       document.querySelector("#description").innerText = "Make sure to enter valid City name";
       document.querySelector("#temp").innerText = "The City you've called can not be reached at the moment, please enter valid name later...";
       document.querySelector("#humidity").innerText = "";
       document.querySelector("#speed").innerText = "";
})










