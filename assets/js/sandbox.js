
//EVENT LISTENERS

$("h1").mouseover(function(){
    $("h1").css("color", "white");
});

$("h1").mouseleave(function(){
    $("h1").css("color", "black");
});

$("header").mouseover(function(){
    $("header").css("color", "white");
});

$("header").mouseleave(function(){
    $("header").css("color", "black");
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

//END MAP JS


// JQUERY FUNCTIONS

$(document).ready(function() {

      $("footer").hide();

      var hideStatus = true;

      $("h1").on("click", function() {


        if(hideStatus == true){

            $("footer").show();

            hideStatus = false;
        }
        else{

            $("footer").hide();
            hideStatus = true;
        }
      });

      });

//END FUNCTIONS
