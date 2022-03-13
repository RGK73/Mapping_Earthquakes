# Mapping_Earthquakes
# Creating interactive maps of Earthquakes

Creating interactive maps that are easy to use is a necessary skill for someone in the data visualisation field. From pandemic dashboards to project from strategic international studies, maps allow us to explore, understand and make decisions about our world.

### Our Basic Project Plan is as below:

### Purpose
The purpose of this project is to visually show the differences between the magnitudes of earthquakes all over the world for the last seven days.

### Tasks
To complete this project, use a URL for GeoJSON earthquake data from the USGS website and retrieve geographical coordinates and the magnitudes of earthquakes for the last seven days. Then add the data to a map.

### Approach
Our approach will be to use the JavaScript and the D3.js library to retrieve the coordinates and magnitudes of the earthquakes from the GeoJSON data. We'll use the Leaflet library to plot the data on a Mapbox map through an API request and create interactivity for the earthquake data.

### What I have learned: 

How to:
Create a branch from the main branch on GitHub.
Add, commit, and push data to a GitHub branch.
Merge a branch with the main branch on GitHub.
Retrieve data from a GeoJSON file.
Make API requests to a server to host geographical maps.
Populate geographical maps with GeoJSON data using JavaScript and the Data-Driven Documents (D3) library.
Add multiple map layers to geographical maps using Leaflet control plugins to add user interface controls.
Use JavaScript ES6 functions to add GeoJSON data, features, and interactivity to maps.
Render maps on a local server.

In this project, we have build on our javascript skills and d3 library to craete an interactive world map. We used GeoJSON to explore geographical features such as spatial and non spatial features to to populate geographical maps as below:

![alt text](https://github.com/RGK73/Mapping_Earthquakes/blob/main/Earthquake_Challenge/Images/Major_Earthquakes.png)

### Summary
To create the maps we used the JavaScript and the D3.js library to retrieve the coordinates and magnitudes of the earthquakes from the GeoJSON data.

Calling the API's alllowed us to traverse and retrieve GeoJSON earthquake data and tectonic plate data in order to populate a map. We then used the Leaflet library to plot the data on a Mapbox map through an API request and create interactivity for the earthquake data. The viewer can toggle between different layers to view either all earthquakes, only major earthquakes (over 4.5 magnitude), and the earth's tectonic plates.

By viewing this visualization, it's clear that the majority of the major earthquakes in the last week have all occurred near or on the tectonic plates. Smaller earthquakes can occur farther away, but the major earthquakes all fall on or right next to the fault lines.
