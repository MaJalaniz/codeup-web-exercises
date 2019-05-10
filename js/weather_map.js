
//clear-day, clear-night, rain, snow, sleet, wind, fog, cloudy, partly-cloudy-day, partly-cloudy-night
var foreCast = [
    {
        clear: 'clear-day'
    },
    {
        clear:'clear-night'
    },
    {
        rainy: 'rain'
    },
    {
        snowy:'snow'
    },
    {
        sleet:'sleet'
    },
    {
        breezy:'wind'
    },
    {
        foggy:'fog'
    },
    {
        cloudy:'cloudy'
    },
    {
        partly:'partly-cloudy-day'
    },
    {
        partly:'partly-cloudy-night'
    }
];


"use strict";
//========================================================================================

//DarkSky API

$(document).ready(function() {
    //alert( 'The DOM has finished loading' );

    var corsUrl = 'https://cors-anywhere.herokuapp.com';
    var darkSky = 'https://api.darksky.net/forecast/';
    var darkSkyApiKey = darkSkyApi;


    var lat = 29.4241;
    var long =-98.4936;



    $.getJSON(corsUrl + "/" + darkSky + darkSkyApiKey + "/" + lat + "," + long).done(function(data){
        console.log( data.currently['windSpeed']);//the initial search of data is an object/ now traverse through as an object
        $('div.monitor_data').html(data.currently['apparentTemperature']+ "° F");
        $()('p.summary').html(data.currently['summary']);
        //$().html(data.currently['pressure']);
        //$().html(data.currently['windSpeed']);

        //html += to get the rest of the data
   });
    var dateObject = new Date(1556704800 * 1000);
    console.log(dateObject.toString());

    //Clouds
    //humidity
    //wind
    //pressure




    //var weather = $.get(corsUrl + "/" + darkSky + darkSkyApiKey + "/" + lat + "," + long).done(function(data){
        //console.log(data);
      //  console.log(weather.responseJSON);
    //});

/*
    for (var i = 0; i < 5; i++) {
        var tr;

        tr = $('div');
        tr.append("<h1>" + foreCast[i].clear + "</h1>");
        tr.append("<h2>" + weather.responseJSON + "</h2>");
        tr.append("<h3>" + foreCast[i].snowy + "</h3>");
        tr.append("<h4>" + foreCast[i].sleet + "</h4>");
        //$('body').append(tr);
    }
*/


//============================================================================================

//MapBox Code

    mapboxgl.accessToken = mapboxKey;
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/satellite-v9',
        center:[-113.0263, 37.2982], // Zion National park
        zoom: 8 // 2 to see US
    });

    var zionAddress= ("Zion National Park");

    var marker = new mapboxgl.Marker({
        draggable: true
    })
        .setLngLat([-113.0263, 37.2982])
        .addTo(map);

    function onDragEnd() {
        var lngLat = marker.getLngLat();
        coordinates.style.display = 'block';
        coordinates.innerHTML = 'Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat;
    }

    marker.on('dragend', onDragEnd);
//==========================================================

    geocode(zionAddress, mapboxKey).then(function(park) {
        map.setCenter(park);
    });
    /*
            //var locationSpot = {longitude:latitude };

            reverseGeocode(locationSpot, mapboxKey).then(function(address){
                //geocode(address, mapboxKey).then(function(coor);
            });

            37.2982° N, 113.0263° W




    */
});


