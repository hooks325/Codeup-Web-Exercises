/**
 * Created by nedwaldie on 12/5/16.
 */
(function() {
    "use strict";
    var apiKey = "94da86c402c295c59c7297dbe5007dd5";
    // var lat = "29.427325";
    // var lon = "-98.491097";

    //api request
    function request(lat, lon){
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

                $('#city').html('<h1>' + cityName + ' Three day weather forecast' + '</h1>');

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
            zoom: 10,

            // This sets the center of the map at our location
            center: {
                lat: 29.427325,
                lng: -98.491097
            }
        };

        // Render the map
        var map = new google.maps.Map(document.getElementById("weather-map"), mapOptions);

        var myLatLng = {lat: 29.427325, lng: -98.491097};

        // $('#addMarker').click(function() {
        //
        // })



        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            draggable: true,
            animation: google.maps.Animation.DROP
        });

        google.maps.event.addListener(marker, 'dragend', function(location) {

            myLatLng.lat = location.latLng.lat();
            myLatLng.lng = location.latLng.lng();
            // console.log(myLatLng);
            request(myLatLng.lat, myLatLng.lng);
        })

        request(myLatLng.lat, myLatLng.lng);

        // double click function
        google.maps.event.addListener(map, 'click', function(event) {
            placeMarker(event.latLng);
        });

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
                request(location.lat, location.lng);
            }
            map.setCenter(location);
        }

    };
    newMap();
})();