var weatherRecords = ["Stevenage", "Manila", "London", "Bordon"];
var queryURL =
  "http://api.openweathermap.org/data/2.5/weather?q=" +
  location +
  "&appid=d3f1d668ff3a88cdb44b7f7575041175";
//create a object with 5 random cities, when inputted the city is added to this object
//when clicked on the button that is created from every new input the forecast api is run

function displayWeatherInfo() {
  var location = $(this).attr("data-name");
  var queryURL =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    location +
    "&appid=d3f1d668ff3a88cdb44b7f7575041175";

  $(".current-forecast").empty();

  fetch(queryURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(queryURL);
      console.log(data);
      var locationTitle = $("<h1>").text(data.name);
      $(".current-forecast").prepend(locationTitle);
      var Celsius = (data.main.temp - 273.15).toFixed(1);
      var locationTemp = $("<p>").text("Temperature: " + Celsius + " C");
      $(".current-forecast").append(locationTemp);
      var locationHum = $("<p>").text("Humidity: " + data.main.humidity + "%");
      $(".current-forecast").append(locationHum);
      var locationWind = $("<p>").text("Wind: " + data.wind.speed + " KPH");
      $(".current-forecast").append(locationWind);
      var iconCode = data.weather[0].icon;
      var iconURL = "http://openweathermap.org/img/w/" + iconCode + ".png";
      var weatherIcon = $("<img>")
        .attr("src", iconURL)
        .attr("alt", "Weather Icon");
      $(".current-forecast").append(weatherIcon);

      var lat = data.coord.lat;
      var long = data.coord.lon;

      var forecastURL =
        "http://api.openweathermap.org/data/2.5/forecast?lat=" +
        lat +
        "&lon=" +
        long +
        "&appid=d3f1d668ff3a88cdb44b7f7575041175";
      fetch(forecastURL)
        .then(function (response) {
          return response.json();
        })
        .then(function (data2) {
          console.log(forecastURL);
          console.log(data2);
          $("#forecast-weather").empty();
          for (var i = 12; i < 52; i = i + 8) {
            var forecastTitle = $("<card>")
              .addClass("container")
              .text(data2.list[i].dt_txt);
            $("#forecast-weather").append(forecastTitle);
            var iconCode = data2.list[i].weather[0].icon;
            var iconURL =
              "http://openweathermap.org/img/w/" + iconCode + ".png";
            var weatherIcon = $("<img>")
              .addClass("card")
              .attr("src", iconURL)
              .attr("alt", "Weather Icon");
            $(forecastTitle).append(weatherIcon);
            var Celsius = (data2.list[i].main.temp - 273.15).toFixed(1);
            var forecastTemp = $("<p>")
              .addClass("card")
              .text("Temperature: " + Celsius + "C");
            $(forecastTitle).append(forecastTemp);
            var forecastHum = $("<p>")
              .addClass("card")
              .text("Humidity: " + data2.list[i].main.humidity + "%");
            $(forecastTitle).append(forecastHum);
            var forecastWind = $("<p>")
              .addClass("card")
              .text("Wind: " + data2.list[i].wind.speed + " KPH");
            $(forecastTitle).append(forecastWind);
          }
        });
    });
}

function renderButton() {
  $("#history").empty();
  for (var i = 0; i < weatherRecords.length; i++) {
    var LocBtn = $("<button>");
    LocBtn.addClass("weather-records");
    LocBtn.attr("data-name", weatherRecords[i]);
    LocBtn.text(weatherRecords[i]);
    $("#history").prepend(LocBtn);
  }
}

$("#search-button").on("click", function (event) {
  event.preventDefault();
  var location = $("#search-input").val();
  console.log(location);
  weatherRecords.push(location);
  renderButton();
});

$(document).on("click", ".weather-records", displayWeatherInfo);
renderButton();
//   Create a weather dashboard with form inputs.
// When a user searches for a city they are presented with current and future conditions for that city and that city is added to the search history

// When a user views the current weather conditions for that city they are presented with:
// The city name
// The date
// An icon representation of weather conditions
// The temperature
// The humidity
// The wind speed

// When a user view future weather conditions for that city they are presented with a 5-day forecast that displays:
// The date
// An icon representation of weather conditions
// The temperature
// The humidity

// When a user click on a city in the search history they are again presented with current and future conditions for that city
