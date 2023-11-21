var weatherRecords = ["Berlin", "Manila", "London", "Paris"];
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
      var locationTemp = $("<p>").text("Temperature: " + data.main.temp);
      $(".current-forecast").append(locationTemp);
      var iconCode = data.weather[0].icon;
      var iconURL = "http://openweathermap.org/img/w/" + iconCode + ".png";
      var weatherIcon = $("<img>")
        .attr("src", iconURL)
        .attr("alt", "Weather Icon");
      $(".current-forecast").append(weatherIcon);
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
