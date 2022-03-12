// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
//let map = L.map('mapid').setView([40.7, -94.5], 4);
//let map = L.map('mapid').setView([36.1733, -120.1794], 7);

// // Create the map object with center at the San Francisco airport.
// let map = L.map('mapid').setView([37.6213, -122.3790], 5);

// // Create the map object with center at the San Francisco airport.
// let map = L.map('mapid').setView([37.6213, -122.3790], 10);

// // Create the map object to the geographical center of the Earth with center and zoom level.
// let map = L.map('mapid').setView([30, 30], 2);


// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/RGK73/Mapping_Earthquakes/main/majorAirports.json";

// // Add GeoJSON data.
// let sanFranAirport =
// {"type":"FeatureCollection","features":[{
//     "type":"Feature",
//     "properties":{
//         "id":"3469",
//         "name":"San Francisco International Airport",
//         "city":"San Francisco",
//         "country":"United States",
//         "faa":"SFO",
//         "icao":"KSFO",
//         "alt":"13",
//         "tz-offset":"-8",
//         "dst":"A",
//         "tz":"America/Los_Angeles"},
//         "geometry":{
//             "type":"Point",
//             "coordinates":[-122.375,37.61899948120117]}}
// ]};

// // Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport).addTo(map);

//SKILL DRILL 13.5.3
//Edit your L.geoJson() layer to add a popup marker that displays all airports' codes and names.
// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
  console.log(data);

// 1. Send the data.features object to the createFeatures function 
createFeatures(data.features);
});

//  2. Create the createFeatures function to hold the data.features object
function createFeatures(airportsData) {

  // 3. Define a function we want to run once for each feature in the features array
  // 4. Give each feature a popup describing the place and time of the earthquake
  function onEachFeature(feature, layer) {
    layer.bindPopup("<h3> Airport Code:" + feature.properties.faa +
      "</h3><hr><p> Airport Name:" + feature.properties.name + "</p>");
  }

  // 5. Create a GeoJSON layer containing the features array on the earthquakeData object
  // 6. Run the onEachFeature function once for each piece of data in the array
  var earthquakes = L.geoJSON(airportsData, {
    onEachFeature: onEachFeature
  }).addTo(map);

};

// // Grabbing our GeoJSON data.
// d3.json(airportData).then(function(data) {
//   console.log(data);
// // Creating a GeoJSON layer with the retrieved data.
// L.geoJSON(data).bindPopup("<h2> Airport Code: " + feature.properties.faa + "</h2> <hr> <h2> Airport Name: " + feature.properties.name + "</h2> " );
// addTo(map);
// });

// // Grabbing our GeoJSON data.
// L.geoJSON(airportData, {
//   // We turn each feature into a marker on the map.
//   pointToLayer: function(feature, latlng) {
//     console.log(feature);
//     return L.marker(latlng)
//     .bindPopup("<h2> Airport Code: " + feature.properties.faa + "</h2> <hr> <h2> Airport Name: " + feature.properties.name + "</h2> " );
//   }

// }).addTo(map);

// Coordinates for each point to be used in the line.
// let line = [
//     [33.9416, -118.4085],
//     [37.6213, -122.3790]
//   ];

// Coordinates for each point to be used in the polyline.
// let line = [
//     [33.9416, -118.4085],
//     [37.6213, -122.3790],
//     [40.7899, -111.9791],
//     [47.4502, -122.3088]
//   ];

// //skill drill
// // Coordinates for each point to be used in the polyline.(airport co-ordinates)
// let line = [
//     [37.6213, -122.3790],
//     [30.1975, -97.6664],
//     [41.974163, -87.907321],
//     [43.6777, -79.6248],
//     [40.6413, -73.7781]
//   ];

  // Create a polyline using the line coordinates and make the line red.
// L.polyline(line, {
//     //color: "red"
//     color: "yellow"
//   }).addTo(map);


  // L.polyline(line, {
  //   color: "blue",
  //   dashArray: "10,5",
  //   opacity: 0.5,
  //   lineWeight: 4
  // }).addTo(map);

// An alternative to using the setView() method
// // Create the map object with a center and zoom level.
// let map = L.map("mapid", {
//     center: [
//       40.7, -94.5
//     ],
//     zoom: 4
//   });

// // We create the tile layer that will be the background of our map.
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox/streets-v11',
//     tileSize: 512,
//     zoomOffset: -1,
//     accessToken: API_KEY
// });
// // Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);

//  Add a marker circle to the map for Los Angeles, California.
// L.circle([34.0522, -118.2437], {
//     radius: 100
//  }).addTo(map);

//  L.circle([34.0687, -118.3228], {
//     radius: 300,
//     fillOpacity: 0.50,
//     color: "black",
//     fillColor: "yellow"
//  }).addTo(map);

//  L.circleMarker([34.0687, -118.3228], {
//     radius: 300,
//     fillOpacity: 0.50,
//     color: "black",
//     fillColor: "#ffffa1"
//  }).addTo(map);

//Add Multiple Markers
// Get data from cities.js
// let cityData = cities;

// Loop through the cities array and create one marker for each city.
// cities.forEach(function(city) {
//     console.log(city)
//    });

// // Loop through the cities array and create one marker for each city.
// cities.forEach(function(city) {
//     console.log(city)
//     L.marker(city.location).addTo(map);
// });s

// Loop through the cities array and create one marker for each city.
// cityData.forEach(function(city) {
//     console.log(city)
//     L.marker(city.location).addTo(map);
// });

// // Loop through the cities array and create one marker for each city.
// cityData.forEach(function(city) {
//     console.log(city)
//     L.marker(city.location)
//     .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//   .addTo(map);
// });

// // Loop through the cities array and create one marker for each city.
// cityData.forEach(function(city) {
//     console.log(city)
//     L.circleMarker(city.location,{
//         lineWeight: 4,
//         color: "orange",
//         fillOpacity: 0.50,
//         fillColor: "orange",
//         radius: city.population/200000

//     })
//     .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//   .addTo(map);
// });

// // // Get data from cities.js
// let airportData = airports;
// console.log(airportData);

// // Loop through the airpoty array and create one marker for each airport.
// airportData.forEach(function(airport) {
//   console.log(airport)
//   L.circleMarker(airport.location,{
//       lineWeight: 4,
//       color: "blue",
//       fillOpacity: 0.50,
//       fillColor: "blue",
//       radius: airport.population/200000

//   })
//   .bindPopup("<h2>" + airport.airport + ", " + airport.state + "</h2> <hr> <h3>Population " + airport.population.toLocaleString() + "</h3>")
// .addTo(map);
// });

// //We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 14,
    accessToken: API_KEY
});

// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 14,
//     accessToken: API_KEY
// });

let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 14,
    accessToken: API_KEY
});

// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 14,
//     accessToken: API_KEY
// });

// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 14,
//     accessToken: API_KEY
// });

// Create a base layer that holds both maps.
let baseMaps = {
  Street: streets,
  Dark: dark
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [30, 30],
  zoom: 2,
  layers: [streets]
});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

//Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// mapbox/streets-v11
// mapbox/outdoors-v11
// mapbox/light-v10
// mapbox/dark-v10
// mapbox/satellite-v9
// mapbox/satellite-streets-v11