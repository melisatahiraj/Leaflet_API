<<<<<<< HEAD
let url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"


// Get the features data from the USGS GeoJSON feed using d3
d3.json(url).then(function (data) {
    createFeatures(data.features);
});


// Define markerSize function to set the size of the marker based on the magnitude of the earthquake
function markerSize(magnitude) {
    return magnitude * 4;
}


// Define markerColor function to set the color of the marker based on the depth of the earthquake
function markerColor(depth) {
    if (depth < 10) return "#82eb00";
    else if (depth < 30) return "#d1eb00";
    else if (depth < 50) return "#ffed00";
    else if (depth < 70) return "#ffaa00";
    else if (depth < 90) return "#ff4500";
    else return "#a427c1"
}


// Define function to create the features
function createFeatures(earthquakeData) {

    // Bind a popup with the place, time, magnitude, and depth of the earthquake to each feature
    function onEachFeature(feature, layer) {
        layer.bindPopup(`<h3>${feature.properties.place}</h3><hr>
        <p>${new Date(feature.properties.time)}</p>
        <p>Magnitude: ${feature.properties.mag}</p>
        <p>Depth: ${feature.geometry.coordinates[2]}</p>`);
    }
    
    // Define circleMarker function to create the circle markers for the map
    function circleMarker(feature, latlng) {
        let marker = L.circleMarker(latlng, {
            radius: markerSize(feature.properties.mag),
            fillColor: markerColor(feature.geometry.coordinates[2]),
            color: "#000",
            weight: 1,
            fillOpacity: 0.75
        });
        return marker;
    }

    // Create a GeoJSON layer that contains the features array on the earthquakeData object
    let earthquakes = L.geoJSON(earthquakeData, {
        onEachFeature: onEachFeature,
        pointToLayer: circleMarker
    });

    // Send our earthquakes layer to the createMap function
    createMap(earthquakes);
}


// Define function to create the map
function createMap(earthquakes) {

    // Define variable for the tile layer
    let grayMap = L.tileLayer(`https://api.mapbox.com/styles/v1/{style}/tiles/{z}/{x}/{y}?access_token=${API_KEY}`, { 
        style: "mapbox/light-v11"
    });
  
    // Create a baseMaps object
    let baseMaps = {
        "Gray Map": grayMap
    };
  
    // Create an overlay object to hold our overlay
    let overlayMaps = {
        Earthquakes: earthquakes
    };
  
    // Create map, pass the streetmap and earthquakes layers to display on load
    let myMap = L.map("map", {
        center: [37.09, -95.71],
        zoom: 5,
        layers: [grayMap, earthquakes]
    });

    // Set up the legend
    let legend = L.control({position: "bottomright"});
    legend.onAdd = function() {
        let div = L.DomUtil.create("div", "info legend");
        let depths = [-10, 10, 30, 50, 70, 90];
    
        div.style.backgroundColor = "white";
        div.style.padding = "10px";
        div.style.border = "1px solid black";

        let legendInfo = "<h3 style='text-align: center;'>Depth</h3>";

        div.innerHTML = legendInfo;

        for (let i = 0; i < depths.length; i++) {
            div.innerHTML +=
                '<i style="background:' + markerColor(depths[i]) + '; width: 20px; height: 10px; display: inline-block;"></i> ' +
                depths[i] + (depths[i + 1] ? '&ndash;' + depths[i + 1] + '<br>' : '+');
        };

        return div;
    };

    // Add legend to the map
    legend.addTo(myMap);

  
    // Create a layer control that passes baseMaps and overlayMaps, add layer control to the map
    L.control.layers(baseMaps, overlayMaps, {
        collapsed: false
    }).addTo(myMap);
=======
let url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"


// Get the features data from the USGS GeoJSON feed using d3
d3.json(url).then(function (data) {
    createFeatures(data.features);
});


// Define markerSize function to set the size of the marker based on the magnitude of the earthquake
function markerSize(magnitude) {
    return magnitude * 4;
}


// Define markerColor function to set the color of the marker based on the depth of the earthquake
function markerColor(depth) {
    if (depth < 10) return "#82eb00";
    else if (depth < 30) return "#d1eb00";
    else if (depth < 50) return "#ffed00";
    else if (depth < 70) return "#ffaa00";
    else if (depth < 90) return "#ff4500";
    else return "#a427c1"
}


// Define function to create the features
function createFeatures(earthquakeData) {

    // Bind a popup with the place, time, magnitude, and depth of the earthquake to each feature
    function onEachFeature(feature, layer) {
        layer.bindPopup(`<h3>${feature.properties.place}</h3><hr>
        <p>${new Date(feature.properties.time)}</p>
        <p>Magnitude: ${feature.properties.mag}</p>
        <p>Depth: ${feature.geometry.coordinates[2]}</p>`);
    }
    
    // Define circleMarker function to create the circle markers for the map
    function circleMarker(feature, latlng) {
        let marker = L.circleMarker(latlng, {
            radius: markerSize(feature.properties.mag),
            fillColor: markerColor(feature.geometry.coordinates[2]),
            color: "#000",
            weight: 1,
            fillOpacity: 0.75
        });
        return marker;
    }

    // Create a GeoJSON layer that contains the features array on the earthquakeData object
    let earthquakes = L.geoJSON(earthquakeData, {
        onEachFeature: onEachFeature,
        pointToLayer: circleMarker
    });

    // Send our earthquakes layer to the createMap function
    createMap(earthquakes);
}


// Define function to create the map
function createMap(earthquakes) {

    // Define variable for the tile layer
    let grayMap = L.tileLayer(`https://api.mapbox.com/styles/v1/{style}/tiles/{z}/{x}/{y}?access_token=${API_KEY}`, { 
        style: "mapbox/light-v11"
    });
  
    // Create a baseMaps object
    let baseMaps = {
        "Gray Map": grayMap
    };
  
    // Create an overlay object to hold our overlay
    let overlayMaps = {
        Earthquakes: earthquakes
    };
  
    // Create map, pass the streetmap and earthquakes layers to display on load
    let myMap = L.map("map", {
        center: [37.09, -95.71],
        zoom: 5,
        layers: [grayMap, earthquakes]
    });

    // Set up the legend
    let legend = L.control({position: "bottomright"});
    legend.onAdd = function() {
        let div = L.DomUtil.create("div", "info legend");
        let depths = [-10, 10, 30, 50, 70, 90];
    
        div.style.backgroundColor = "white";
        div.style.padding = "10px";
        div.style.border = "1px solid black";

        let legendInfo = "<h3 style='text-align: center;'>Depth</h3>";

        div.innerHTML = legendInfo;

        for (let i = 0; i < depths.length; i++) {
            div.innerHTML +=
                '<i style="background:' + markerColor(depths[i]) + '; width: 20px; height: 10px; display: inline-block;"></i> ' +
                depths[i] + (depths[i + 1] ? '&ndash;' + depths[i + 1] + '<br>' : '+');
        };

        return div;
    };

    // Add legend to the map
    legend.addTo(myMap);

  
    // Create a layer control that passes baseMaps and overlayMaps, add layer control to the map
    L.control.layers(baseMaps, overlayMaps, {
        collapsed: false
    }).addTo(myMap);
>>>>>>> ffd7eab03ada2dc6133f0424fd85b23811822e49
}