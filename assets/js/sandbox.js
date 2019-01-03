
//EVENT LISTENERS

$("#directionsLink").mouseover(function(){
    $("#directionsLink").css("color", "white");
});

$("#directionsLink").mouseleave(function(){
    $("#directionsLink").css("color", "black");
});

//END EVENT LISTENERS


//MAP JS

var mymap = L.map('boathouseMap').setView([40.0732055, -75.29338669999999], 15);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYXNjaHdlbmdlciIsImEiOiJjam95d2plOGswMmt3M3Btc296aTlhYWh0In0.WHfcq4PhbmmLU5XNeSyNJQ'
}).addTo(mymap);


var marker = L.marker([51.5, -0.09]).addTo(mymap);

var circle = L.circle([40.0723972, -75.29207980000001], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 50
}).addTo(mymap);
//END MAP JS
