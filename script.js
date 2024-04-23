function getSunriseSunset() {
    var location = document.getElementById("location").value;
    var latlng = location.split(",");
    var latitude = latlng[0];
    var longitude = latlng[1];
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var apiURL = 'https://api.sunrisesunset.io/json?lat=' + latitude + '&lng=' + longitude + '&date=' + date;

    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            var sunrise = data.results.sunrise;
            var sunset = data.results.sunset;
            document.getElementById("sunriseText").textContent = sunrise;
            document.getElementById("sunsetText").textContent = sunset;
        })
        .catch(error => {
            console.error('Error fetching sunrise and sunset times:', error);
        });
}
