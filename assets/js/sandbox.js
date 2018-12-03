var mymap = L.map('boathouseMap').setView([-75.29338669999999, 0.0732055], 13);




L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYXNjaHdlbmdlciIsImEiOiJjam95d2plOGswMmt3M3Btc296aTlhYWh0In0.WHfcq4PhbmmLU5XNeSyNJQ'
}).addTo(mymap);
