/**
 * Created by nedwaldie on 12/5/16.
 */
(function() {
    "use strict";
    var apiKey = "94da86c402c295c59c7297dbe5007dd5";

    // Function for the API request and build out the 3 day forecast
    function threeDayForecast(lat, lon){
        var weatherData = $.get("http://api.openweathermap.org/data/2.5/forecast/daily", {
            APPID: apiKey,
            lat: lat,
            lon: lon,
            cnt: 3,
            units: 'imperial'
        });
        var weatherInfo = '';
        weatherData.done(function(data){
            console.log(data);		//console logs object
            console.log(typeof weatherData);


            for (var i = 0; i <= 2; i++) {
                var max = data.list[i].temp.max;
                var min = data.list[i].temp.min;
                var description = data.list[i].weather[0].description;
                var humidity = data.list[i].humidity;
                var wind = data.list[i].speed;
                var pressure = data.list[i].pressure;
                var date = moment.unix(data.list[i].dt);
                var cityName = data.city.name;

                $('#city').html('<h1>Three Day Weather Forecast for:</h1>');
                $('#city').append('<h1>' + cityName + '</h1>');


                weatherInfo += '<div class="weather-div" id=i>' + '<h5>' + date.format('dddd, MMM DD YYYY') + '</h5>' +
                    '<span>High: </span>' + Math.round(max) + '°' + '<br>' +
                    '<span>Low: </span>' + Math.round(min)+ '°' + '<br>' +
                    '<span>Conditions: </span>' + description + '<br>' +
                    '<div><img  src="http://openweathermap.org/img/w/' + data.list[i].weather[0].icon + '.png"></div>' +
                    '<span>Humidity: </span>' + humidity + '<br>' +
                    '<span>Wind: </span>' + Math.round(wind) + 'mph' + '<br>' +
                    '<span>Pressure: </span>' + Math.round(pressure) + '</div>';

                $('#content').html(weatherInfo);


            }

            // Change the background img of the divs based on the weather
            if (data.list[0].weather[0].description.includes('clear')) {
                $('.weather-div:nth-child(1)').addClass('sun');
            } else if (data.list[0].weather[0].description.includes('cloud')) {
                $('.weather-div:nth-child(1)').addClass('cloud');
            } else if (data.list[0].weather[0].description.includes('rain')) {
                $('.weather-div:nth-child(1)').addClass('rain');
            } else if (data.list[0].weather[0].description.includes('snow')) {
                $('.weather-div:nth-child(1)').addClass('snow');
            }

            if (data.list[1].weather[0].description.includes('clear')) {
                $('.weather-div:nth-child(2)').addClass('sun');
            } else if (data.list[1].weather[0].description.includes('cloud')) {
                $('.weather-div:nth-child(2)').addClass('cloud');
            } else if (data.list[1].weather[0].description.includes('rain')) {
                $('.weather-div:nth-child(2)').addClass('rain');
            } else if (data.list[1].weather[0].description.includes('snow')) {
                $('.weather-div:nth-child(2)').addClass('snow');
            }

            if (data.list[2].weather[0].description.includes('clear')) {
                $('.weather-div:nth-child(3)').addClass('sun');
            } else if (data.list[2].weather[0].description.includes('cloud')) {
                $('.weather-div:nth-child(3)').addClass('cloud');
            } else if (data.list[2].weather[0].description.includes('rain')) {
                $('.weather-div:nth-child(3)').addClass('rain');
            } else if (data.list[2].weather[0].description.includes('snow')) {
                $('.weather-div:nth-child(3)').addClass('snow');
            }
        })

    }

    // Function to create map
    var newMap = function() {
        // Set our map options
        var mapOptions = {
            // Set the zoom level
            zoom: 5,

            // This sets the center of the map at our location
            center: {
                lat: 29.427325,
                lng: -98.491097
            }
        };

        // Render the map
        var map = new google.maps.Map(document.getElementById("weather-map"), mapOptions);

        // Setting the initial Lat and Lng for the marker
        var myLatLng = {lat: 29.427325, lng: -98.491097};

        // Place the initial Marker on the map
        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            draggable: true,
            animation: google.maps.Animation.DROP
        });

        // Function to gather location when marker is moved
        google.maps.event.addListener(marker, 'dragend', function(location) {
            myLatLng.lat = location.latLng.lat();
            myLatLng.lng = location.latLng.lng();
            // console.log(myLatLng);
            threeDayForecast(myLatLng.lat, myLatLng.lng);
        })

        // Calling the 3 day forecast function with the markers latest lat and lng
        threeDayForecast(myLatLng.lat, myLatLng.lng);

        // Function to click and move the marker
        google.maps.event.addListener(map, 'click', function(event) {
            placeMarker(event.latLng);
        });

        // Function to gather location and place the marker where clicked
        function placeMarker(location) {
            if (marker == undefined) {
                marker = new google.maps.Marker({
                    position: location,
                    map: map,
                    animation: google.maps.Animation.DROP,
                });
            }
            else {
                marker.setPosition(location);
                threeDayForecast(location.lat, location.lng);
            }
            map.setCenter(location);
        }

        // Function to move the marker based where the user has searched
        var userMarker = function() {
            var userAddress = document.getElementById('pac-input').value;
            var geocoder = new google.maps.Geocoder();

            geocoder.geocode( { 'address': userAddress}, function(results, status) {
                if (status == 'OK') {
                    map.setCenter(results[0].geometry.location);
                    marker.setPosition(results[0].geometry.location);
                    threeDayForecast(marker.position.lat, marker.position.lng);
                } else {
                    alert('Google was unable to find that address');
                }
            });
        };

        // Creating button and event listener
        var addMarkerButton = document.getElementById('search-button');
        addMarkerButton.addEventListener('click', userMarker);
    };

    // Calling the map to draw
    newMap();
})();