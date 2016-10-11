var apiKey = "9b3ec90fdf286bb3373b22f0a9b2ba65
";

// $(document).ready(function() {
//   $('#weatherLocation').click(function() {
//     var city = $('#location').val();
//     $('#location').val("");
//     $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response) {
//       $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
//       console.log(JSON.stringify(response));
//     });
//     console.log("Notice: The GET request has been made.");
//   });
// });

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response){
      $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
    }).fail(function(error) {
      $('.showWeather').text(error.responseJSON.message);
    });
  });
});
