function getSunriseSunset() {
    // Get the location from the input field
    var location = document.getElementById("location").value;
    // Split the location string into latitude and longitude
    var latlng = location.split(",");
    var latitude = latlng[0];
    var longitude = latlng[1];
    
    // Get today's date
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    
    // Construct API URL with today's date
    var apiURL = 'https://api.sunrisesunset.io/json?lat=' + latitude + '&lng=' + longitude + '&date=' + date;

    // Fetch sunrise and sunset data from API
    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            // Retrieve sunrise and sunset times from the API response
            var sunrise = data.results.sunrise;
            var sunset = data.results.sunset;
            
            // Display sunrise and sunset times on the webpage
            document.getElementById("sunriseText").textContent = sunrise;
            document.getElementById("sunsetText").textContent = sunset;
        })
        .catch(error => {
            // Handle errors if API call fails
            console.error('Error fetching sunrise and sunset times:', error);
        });
}
