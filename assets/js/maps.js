var map = L.map('map', {
    zoomControl:false, maxZoom:28, minZoom:1
}).fitBounds([[43.51713825173777,-124.34314042998588],[44.114053612364536,-123.0532517658581]]);
var hash = new L.Hash(map);
map.attributionControl.setPrefix('<a href="https://github.com/tomchadwin/qgis2web" target="_blank">qgis2web</a> &middot; <a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a> &middot; <a href="https://qgis.org">QGIS</a>');
var autolinker = new Autolinker({truncate: {length: 30, location: 'smart'}});
// remove popup's row if "visible-with-data"
function removeEmptyRowsFromPopupContent(content, feature) {
 var tempDiv = document.createElement('div');
 tempDiv.innerHTML = content;
 var rows = tempDiv.querySelectorAll('tr');
 for (var i = 0; i < rows.length; i++) {
     var td = rows[i].querySelector('td.visible-with-data');
     var key = td ? td.id : '';
     if (td && td.classList.contains('visible-with-data') && feature.properties[key] == null) {
         rows[i].parentNode.removeChild(rows[i]);
     }
 }
 return tempDiv.innerHTML;
}
// add class to format popup if it contains media
function addClassToPopupIfMedia(content, popup) {
    var tempDiv = document.createElement('div');
    tempDiv.innerHTML = content;
    if (tempDiv.querySelector('td img')) {
        popup._contentNode.classList.add('media');
            // Delay to force the redraw
            setTimeout(function() {
                popup.update();
            }, 10);
    } else {
        popup._contentNode.classList.remove('media');
    }
}
var zoomControl = L.control.zoom({
    position: 'topleft'
}).addTo(map);
var bounds_group = new L.featureGroup([]);
function setBounds() {
}
// Create a new pane for the ESRI Satellite Imagery layer
map.createPane('pane_ESRISatelliteArcGISWorld_Imagery_0');
map.getPane('pane_ESRISatelliteArcGISWorld_Imagery_0').style.zIndex = 400;

// Create the ESRI Satellite Layer
var layer_ESRISatelliteArcGISWorld_Imagery_0 = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    pane: 'pane_ESRISatelliteArcGISWorld_Imagery_0',
    opacity: 0.86,
    attribution: '',
    minZoom: 1,
    maxZoom: 28,
    minNativeZoom: 0,
    maxNativeZoom: 19
});

// Create a new pane for the Mapbox Imagery layer
map.createPane('pane_MapboxImagery');
map.getPane('pane_MapboxImagery').style.zIndex = 400;

// Set your Mapbox access token
var accessToken = 'pk.eyJ1IjoiYXJhbWk1NCIsImEiOiJjbTZ6ZG53OXQwM24zMm1wcHFpanhxbDdqIn0.iw8ih5GLFA7ZRz8QeqrLaQ';  // Replace with your Mapbox access token

// Create the Mapbox layer
var layer_MapboxImagery = L.tileLayer(
    `https://api.mapbox.com/styles/v1/arami54/cm6zm6d8700hs01re71r597en/draft/tiles/{z}/{x}/{y}?access_token=${accessToken}`, {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
      '<a href="https://www.mapbox.com/about/maps/">Imagery © Mapbox</a>',
    pane: 'pane_MapboxImagery',
    opacity: 0.86,
    minZoom: 1,
    maxZoom: 18, // Updated max zoom based on Mapbox tileset capabilities
    minNativeZoom: 0,
    maxNativeZoom: 19
});

// Initially add the Mapbox layer
map.addLayer(layer_MapboxImagery);

// Create a control button to toggle between the two layers
var baseMaps = {
    "ESRI Satellite": layer_ESRISatelliteArcGISWorld_Imagery_0,
    "Mapbox Imagery": layer_MapboxImagery
};

L.control.layers(baseMaps).addTo(map);

// Function to toggle between the layers
var currentLayer = "Mapbox Imagery";  // Set default layer

function toggleLayers() {
    if (currentLayer === "Mapbox Imagery") {
        map.removeLayer(layer_MapboxImagery);
        map.addLayer(layer_ESRISatelliteArcGISWorld_Imagery_0);
        currentLayer = "ESRI Satellite";
    } else {
        map.removeLayer(layer_ESRISatelliteArcGISWorld_Imagery_0);
        map.addLayer(layer_MapboxImagery);
        currentLayer = "Mapbox Imagery";
    }
}

// Define the popup function for your streams
function pop_Smith_river_streams_1(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <td colspan="2"><i>Stream Name: </i>' + (feature.properties['Name'] !== null ? autolinker.link(feature.properties['Name'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    
    var content = removeEmptyRowsFromPopupContent(popupContent, feature);
    
    layer.on('popupopen', function(e) {
        addClassToPopupIfMedia(content, e.popup);
    });
    
    layer.bindPopup(content, { maxHeight: 400 });
}


function style_Smith_river_streams_1_0() {
    return {
        pane: 'pane_Smith_river_streams_1',
        opacity: 1,
        color: 'rgba(72,123,182,1.0)',
        dashArray: '',
        lineCap: 'round',
        lineJoin: 'round',
        weight: 2.0,
        fillOpacity: 0,
        interactive: true,
    }
}
map.createPane('pane_Smith_river_streams_1');
map.getPane('pane_Smith_river_streams_1').style.zIndex = 401;
map.getPane('pane_Smith_river_streams_1').style['mix-blend-mode'] = 'normal';
var layer_Smith_river_streams_1 = new L.geoJson(json_Smith_river_streams_1, {
    attribution: '',
    interactive: true,
    dataVar: 'json_Smith_river_streams_1',
    layerName: 'layer_Smith_river_streams_1',
    pane: 'pane_Smith_river_streams_1',
    onEachFeature: pop_Smith_river_streams_1,
    style: style_Smith_river_streams_1_0,
});
bounds_group.addLayer(layer_Smith_river_streams_1);
map.addLayer(layer_Smith_river_streams_1);
function pop_smith_river_alone_2(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <td colspan="2"><i>Stream Name: </i>' + (feature.properties['Name'] !== null ? autolinker.link(feature.properties['Name'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    var content = removeEmptyRowsFromPopupContent(popupContent, feature);
    layer.on('popupopen', function(e) {
        addClassToPopupIfMedia(content, e.popup);
    });
    layer.bindPopup(content, { maxHeight: 400 });
}

function style_smith_river_alone_2_0() {
    return {
        pane: 'pane_smith_river_alone_2',
        opacity: 1,
        color: 'rgba(54,141,229,1.0)',
        dashArray: '',
        lineCap: 'square',
        lineJoin: 'bevel',
        weight: 3.0,
        fillOpacity: 0,
        interactive: true,
    }
}
map.createPane('pane_smith_river_alone_2');
map.getPane('pane_smith_river_alone_2').style.zIndex = 402;
map.getPane('pane_smith_river_alone_2').style['mix-blend-mode'] = 'normal';
var layer_smith_river_alone_2 = new L.geoJson(json_smith_river_alone_2, {
    attribution: '',
    interactive: true,
    dataVar: 'json_smith_river_alone_2',
    layerName: 'layer_smith_river_alone_2',
    pane: 'pane_smith_river_alone_2',
    onEachFeature: pop_smith_river_alone_2,
    style: style_smith_river_alone_2_0,
});
bounds_group.addLayer(layer_smith_river_alone_2);
map.addLayer(layer_smith_river_alone_2);
function pop_Catchment_polygons_3(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <td colspan="2"><i>Catchment Area: </i>' + (feature.properties['Name'] !== null ? autolinker.link(feature.properties['Name'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    var content = removeEmptyRowsFromPopupContent(popupContent, feature);
    layer.on('popupopen', function(e) {
        addClassToPopupIfMedia(content, e.popup);
    });
    layer.bindPopup(content, { outerHeight: 200 });
}

function style_Catchment_polygons_3_0() {
    return {
        pane: 'pane_Catchment_polygons_3',
        interactive: true,
    }
}
function style_Catchment_polygons_3_1() {
    return {
        pane: 'pane_Catchment_polygons_3',
        opacity: 1,
        color: 'rgba(38,89,128,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fillOpacity: 0,
        interactive: true,
    }
}
map.createPane('pane_Catchment_polygons_3');
map.getPane('pane_Catchment_polygons_3').style.zIndex = 403;
map.getPane('pane_Catchment_polygons_3').style['mix-blend-mode'] = 'normal';
var layer_Catchment_polygons_3 = new L.geoJson.multiStyle(json_Catchment_polygons_3, {
    attribution: '',
    interactive: true,
    dataVar: 'json_Catchment_polygons_3',
    layerName: 'layer_Catchment_polygons_3',
    pane: 'pane_Catchment_polygons_3',
    onEachFeature: pop_Catchment_polygons_3,
    styles: [style_Catchment_polygons_3_0,style_Catchment_polygons_3_1,]
});
bounds_group.addLayer(layer_Catchment_polygons_3);
map.addLayer(layer_Catchment_polygons_3);
function pop_Study_sites_4(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <td colspan="2"> <i>Sample Site: </i> '+ (feature.properties['Name'] !== null ? autolinker.link(feature.properties['Name'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2"><i>Lattitude: </i>' + (feature.properties['Lat'] !== null ? autolinker.link(feature.properties['Lat'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2"><i>Longitude: </i>' + (feature.properties['Long'] !== null ? autolinker.link(feature.properties['Long'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    var content = removeEmptyRowsFromPopupContent(popupContent, feature);
    layer.on('popupopen', function(e) {
        addClassToPopupIfMedia(content, e.popup);
    });
    layer.bindPopup(content, { maxHeight: 400 });
}

function style_Study_sites_4_0() {
    return {
        pane: 'pane_Study_sites_4',
        shape: 'triangle',
        radius: 10.0,
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1,
        fill: true,
        fillOpacity: 1,
        fillColor: '#EF9F18',
        interactive: true,
    }
}
map.createPane('pane_Study_sites_4');
map.getPane('pane_Study_sites_4').style.zIndex = 404;
map.getPane('pane_Study_sites_4').style['mix-blend-mode'] = 'normal';
var layer_Study_sites_4 = new L.geoJson(json_Study_sites_4, {
    attribution: '',
    interactive: true,
    dataVar: 'json_Study_sites_4',
    layerName: 'layer_Study_sites_4',
    pane: 'pane_Study_sites_4',
    onEachFeature: pop_Study_sites_4,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.shapeMarker(latlng, style_Study_sites_4_0(feature));
    },
});
bounds_group.addLayer(layer_Study_sites_4);
map.addLayer(layer_Study_sites_4);
setBounds();
resetLabels([layer_Study_sites_4]);
map.on("zoomend", function(){
    resetLabels([layer_Study_sites_4]);
});
map.on("layeradd", function(){
    resetLabels([layer_Study_sites_4]);
});
map.on("layerremove", function(){
    resetLabels([layer_Study_sites_4]);
});

map.fitBounds(layer_Smith_river_streams_1.getBounds());

var legend = L.control({ position: 'bottomright' });

// Add content to the legend
legend.onAdd = function(map) {
    var div = L.DomUtil.create('div', 'info legend');
    div.innerHTML = '<strong>Legend</strong><br>';
    
    // Define styles for the colored icons
    div.innerHTML += '<i style="background: rgba(72,123,182,1.0); width: 20px; height: 4px; display: inline-block; margin-right: 5px; vertical-align: middle;"></i> Tributaries<br>';
    div.innerHTML += '<i style="background: rgba(54,141,229,1.0); width: 20px; height: 6px; display: inline-block; margin-right: 5px; vertical-align: middle;"></i> Smith River <br>';
    div.innerHTML += '<i style="background: rgba(38,89,128,1.0); width: 20px; height: 20px; display: inline-block; margin-right: 5px; vertical-align: middle;"></i> Catchment Areas<br>';
    
    // Triangle for Study Site
    div.innerHTML += '<i style="border-left: 10px solid transparent; border-right: 10px solid transparent; border-bottom: 20px solid #EF9F18; display: inline-block; margin-right: 5px; vertical-align: middle;"></i> Study Site<br>';
    
    // Add background style to the legend
    div.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
    div.style.padding = '10px';
    div.style.borderRadius = '5px';
    div.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.3)';
    
    return div;
};

// Add the legend to the map
legend.addTo(map);

map.addControl(L.control.fullscreen({
    position: 'bottomleft',  // Position of the fullscreen button
    title: 'Show Fullscreen',  // Title of the fullscreen button
    titleCancel: 'Exit Fullscreen',  // Title of the button when in fullscreen mode
    content: '↗',  // Icon/content of the fullscreen button
}));

map.fitBounds(layer_Smith_river_streams_1.getBounds());



