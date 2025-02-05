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
map.createPane('pane_ESRISatelliteArcGISWorld_Imagery_0');
map.getPane('pane_ESRISatelliteArcGISWorld_Imagery_0').style.zIndex = 400;
var layer_ESRISatelliteArcGISWorld_Imagery_0 = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    pane: 'pane_ESRISatelliteArcGISWorld_Imagery_0',
    opacity: 0.86,
    attribution: '',
    minZoom: 1,
    maxZoom: 28,
    minNativeZoom: 0,
    maxNativeZoom: 19
});
layer_ESRISatelliteArcGISWorld_Imagery_0;
map.addLayer(layer_ESRISatelliteArcGISWorld_Imagery_0);
function pop_Smith_river_streams_1(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['Name'] !== null ? autolinker.link(feature.properties['Name'].toLocaleString()) : '') + '</td>\
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
                <td colspan="2">' + (feature.properties['Name'] !== null ? autolinker.link(feature.properties['Name'].toLocaleString()) : '') + '</td>\
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
                <td colspan="2">' + (feature.properties['Name'] !== null ? autolinker.link(feature.properties['Name'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    var content = removeEmptyRowsFromPopupContent(popupContent, feature);
    layer.on('popupopen', function(e) {
        addClassToPopupIfMedia(content, e.popup);
    });
    layer.bindPopup(content, { maxHeight: 400 });
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
                <td colspan="2">' + (feature.properties['Name'] !== null ? autolinker.link(feature.properties['Name'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Lat'] !== null ? autolinker.link(feature.properties['Lat'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Long'] !== null ? autolinker.link(feature.properties['Long'].toLocaleString()) : '') + '</td>\
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
        fillColor: 'rgba(243,227,55,1.0)',
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

map.fitBounds(layer_Catchment_polygons_3.getBounds());