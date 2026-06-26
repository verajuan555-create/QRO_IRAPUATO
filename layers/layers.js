var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_SONDEOS_V1_1 = new ol.format.GeoJSON();
var features_SONDEOS_V1_1 = format_SONDEOS_V1_1.readFeatures(json_SONDEOS_V1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SONDEOS_V1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SONDEOS_V1_1.addFeatures(features_SONDEOS_V1_1);
var lyr_SONDEOS_V1_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SONDEOS_V1_1, 
                style: style_SONDEOS_V1_1,
                popuplayertitle: 'SONDEOS_V1',
                interactive: true,
    title: 'SONDEOS_V1<br />\
    <img src="styles/legend/SONDEOS_V1_1_0.png" /> SONDEO MIXTO A 25 METROS<br />\
    <img src="styles/legend/SONDEOS_V1_1_1.png" /> PCA PARA TERRACERIA A 3 METROS<br />\
    <img src="styles/legend/SONDEOS_V1_1_2.png" /> PCA PARA ESTRUCTURA A 3 METROS<br />' });
var format_EJE_V1_2 = new ol.format.GeoJSON();
var features_EJE_V1_2 = format_EJE_V1_2.readFeatures(json_EJE_V1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EJE_V1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EJE_V1_2.addFeatures(features_EJE_V1_2);
var lyr_EJE_V1_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EJE_V1_2, 
                style: style_EJE_V1_2,
                popuplayertitle: 'EJE_V1',
                interactive: true,
                title: '<img src="styles/legend/EJE_V1_2.png" /> EJE_V1'
            });
var format_CADENAMIENTOS_3 = new ol.format.GeoJSON();
var features_CADENAMIENTOS_3 = format_CADENAMIENTOS_3.readFeatures(json_CADENAMIENTOS_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CADENAMIENTOS_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CADENAMIENTOS_3.addFeatures(features_CADENAMIENTOS_3);
var lyr_CADENAMIENTOS_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CADENAMIENTOS_3, 
                style: style_CADENAMIENTOS_3,
                popuplayertitle: 'CADENAMIENTOS',
                interactive: true,
                title: '<img src="styles/legend/CADENAMIENTOS_3.png" /> CADENAMIENTOS'
            });
var format_PK_NUM_4 = new ol.format.GeoJSON();
var features_PK_NUM_4 = format_PK_NUM_4.readFeatures(json_PK_NUM_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PK_NUM_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PK_NUM_4.addFeatures(features_PK_NUM_4);
var lyr_PK_NUM_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PK_NUM_4, 
                style: style_PK_NUM_4,
                popuplayertitle: 'PK_NUM',
                interactive: true,
                title: '<img src="styles/legend/PK_NUM_4.png" /> PK_NUM'
            });
var format_ESTACIONES_V1_POL_5 = new ol.format.GeoJSON();
var features_ESTACIONES_V1_POL_5 = format_ESTACIONES_V1_POL_5.readFeatures(json_ESTACIONES_V1_POL_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ESTACIONES_V1_POL_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESTACIONES_V1_POL_5.addFeatures(features_ESTACIONES_V1_POL_5);
var lyr_ESTACIONES_V1_POL_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ESTACIONES_V1_POL_5, 
                style: style_ESTACIONES_V1_POL_5,
                popuplayertitle: 'ESTACIONES_V1_POL',
                interactive: true,
                title: '<img src="styles/legend/ESTACIONES_V1_POL_5.png" /> ESTACIONES_V1_POL'
            });
var group_GENERAL = new ol.layer.Group({
                                layers: [lyr_EJE_V1_2,lyr_CADENAMIENTOS_3,lyr_PK_NUM_4,lyr_ESTACIONES_V1_POL_5,],
                                fold: 'open',
                                title: 'GENERAL'});
var group_GEOTECNIA = new ol.layer.Group({
                                layers: [lyr_SONDEOS_V1_1,],
                                fold: 'open',
                                title: 'GEOTECNIA'});
var group_BASEMAP = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite_0,],
                                fold: 'open',
                                title: 'BASEMAP'});

lyr_GoogleSatellite_0.setVisible(true);lyr_SONDEOS_V1_1.setVisible(true);lyr_EJE_V1_2.setVisible(true);lyr_CADENAMIENTOS_3.setVisible(true);lyr_PK_NUM_4.setVisible(true);lyr_ESTACIONES_V1_POL_5.setVisible(true);
var layersList = [group_BASEMAP,group_GEOTECNIA,group_GENERAL];
lyr_SONDEOS_V1_1.set('fieldAliases', {'TIPO': 'TIPO', 'SONDEO': 'SONDEO', });
lyr_EJE_V1_2.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_CADENAMIENTOS_3.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_PK_NUM_4.set('fieldAliases', {'PK': 'PK', });
lyr_ESTACIONES_V1_POL_5.set('fieldAliases', {'ESTACION': 'ESTACION', });
lyr_SONDEOS_V1_1.set('fieldImages', {'TIPO': 'TextEdit', 'SONDEO': 'TextEdit', });
lyr_EJE_V1_2.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_CADENAMIENTOS_3.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_PK_NUM_4.set('fieldImages', {'PK': 'TextEdit', });
lyr_ESTACIONES_V1_POL_5.set('fieldImages', {'ESTACION': 'TextEdit', });
lyr_SONDEOS_V1_1.set('fieldLabels', {'TIPO': 'no label', 'SONDEO': 'no label', });
lyr_EJE_V1_2.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_CADENAMIENTOS_3.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_PK_NUM_4.set('fieldLabels', {'PK': 'inline label - always visible', });
lyr_ESTACIONES_V1_POL_5.set('fieldLabels', {'ESTACION': 'no label', });
lyr_ESTACIONES_V1_POL_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});