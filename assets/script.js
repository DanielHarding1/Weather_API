//git ingnore

var location = $("#search-input").val().trim();

function renderButtons() {}

function displayWeatherInfo(location) {
  var lat = ($(this).attr = "data-coord-lat");
  var long = $(this).attr("data-coord-lon");
  var queryURL =
    "https://api.openweathermap.org/data/2.5/forecast?lat=" +
    lat +
    "&lon=" +
    long +
    "&appid=f3681c042c4653e88cfa8b557438ba39";

  lat + "&" + long + "&appid=f3681c042c4653e88cfa8b557438ba39";

  fetch(queryURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(queryURL);
      console.log(data);
    });
}

$("#search-button").on("click", "#search-form", function (event) {
  var clickedOn = $(event.target);
  var name = clickedOn.attr("data-name");
});

displayWeatherInfo();
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
