/**
 * Created by nedwaldie on 12/5/16.
 */
(function() {
    "use strict";
    var apiKey = "94da86c402c295c59c7297dbe5007dd5";
    var lat = "29.427325";
    var lon = "-98.491097";

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

                $('#city').html(cityName);

                weatherInfo += '<div class="weather-div">' + date.format('dddd, MMM DD YYYY') + '<br>' + max + '/' + min + '<br>' + '<br>' +
                    'Conditions: ' + description +
                    '<br>' +
                    '<div><img  src="http://openweathermap.org/img/w/' + data.list[i].weather[0].icon + '.png"></div>' +
                    'Humidity: ' + humidity +
                    '<br>' + '<br>' +
                    'Wind: ' + wind +
                    '<br>' + '<br>' +
                    'Pressure: ' + pressure + '</div>';
                console.log(i);
                $('#content').html(weatherInfo);

            };
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

        var myLatLng = {lat: 29.427325, lng: -98.491097};

        // $('#addMarker').click(function() {
        //
        // })



        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            draggable: true
        });

        google.maps.event.addListener(marker, 'dragend', function(location) {

            myLatLng.lat = location.latLng.lat();
            myLatLng.lng = location.latLng.lng();
            console.log(myLatLng);
            request(myLatLng.lat, myLatLng.lng);
        })

        request(myLatLng.lat, myLatLng.lng);

    };
    newMap();



    // Function to add marker








})();