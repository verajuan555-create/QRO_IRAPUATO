var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_SONDEOS_V02_1 = new ol.format.GeoJSON();
var features_SONDEOS_V02_1 = format_SONDEOS_V02_1.readFeatures(json_SONDEOS_V02_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SONDEOS_V02_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SONDEOS_V02_1.addFeatures(features_SONDEOS_V02_1);
var lyr_SONDEOS_V02_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SONDEOS_V02_1, 
                style: style_SONDEOS_V02_1,
                popuplayertitle: 'SONDEOS_V02',
                interactive: true,
    title: 'SONDEOS_V02<br />\
    <img src="styles/legend/SONDEOS_V02_1_0.png" /> TERMINADO<br />\
    <img src="styles/legend/SONDEOS_V02_1_1.png" /> EN PROCESO<br />\
    <img src="styles/legend/SONDEOS_V02_1_2.png" /> PROYECTADO<br />\
    <img src="styles/legend/SONDEOS_V02_1_3.png" /> INCONCLUSO<br />' });
var format_DDV_V001_2 = new ol.format.GeoJSON();
var features_DDV_V001_2 = format_DDV_V001_2.readFeatures(json_DDV_V001_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DDV_V001_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DDV_V001_2.addFeatures(features_DDV_V001_2);
var lyr_DDV_V001_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DDV_V001_2, 
                style: style_DDV_V001_2,
                popuplayertitle: 'DDV_V001',
                interactive: true,
    title: 'DDV_V001<br />\
    <img src="styles/legend/DDV_V001_2_0.png" /> EN PROCESO<br />\
    <img src="styles/legend/DDV_V001_2_1.png" /> LIBERADO<br />\
    <img src="styles/legend/DDV_V001_2_2.png" /> PENDIENTE<br />' });
var format_LIMITES_DDV_V1_3 = new ol.format.GeoJSON();
var features_LIMITES_DDV_V1_3 = format_LIMITES_DDV_V1_3.readFeatures(json_LIMITES_DDV_V1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIMITES_DDV_V1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LIMITES_DDV_V1_3.addFeatures(features_LIMITES_DDV_V1_3);
var lyr_LIMITES_DDV_V1_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LIMITES_DDV_V1_3, 
                style: style_LIMITES_DDV_V1_3,
                popuplayertitle: 'LIMITES_DDV_V1',
                interactive: true,
    title: 'LIMITES_DDV_V1<br />\
    <img src="styles/legend/LIMITES_DDV_V1_3_0.png" /> Area afectacion<br />\
    <img src="styles/legend/LIMITES_DDV_V1_3_1.png" /> DDV ACTUAL<br />\
    <img src="styles/legend/LIMITES_DDV_V1_3_2.png" /> V-TOPO<br />' });
var format_MUNICIPIOS_PROYECTO_4 = new ol.format.GeoJSON();
var features_MUNICIPIOS_PROYECTO_4 = format_MUNICIPIOS_PROYECTO_4.readFeatures(json_MUNICIPIOS_PROYECTO_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MUNICIPIOS_PROYECTO_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MUNICIPIOS_PROYECTO_4.addFeatures(features_MUNICIPIOS_PROYECTO_4);
var lyr_MUNICIPIOS_PROYECTO_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MUNICIPIOS_PROYECTO_4, 
                style: style_MUNICIPIOS_PROYECTO_4,
                popuplayertitle: 'MUNICIPIOS_PROYECTO',
                interactive: true,
                title: '<img src="styles/legend/MUNICIPIOS_PROYECTO_4.png" /> MUNICIPIOS_PROYECTO'
            });
var format_ENTIDADES_QRO_GTO_5 = new ol.format.GeoJSON();
var features_ENTIDADES_QRO_GTO_5 = format_ENTIDADES_QRO_GTO_5.readFeatures(json_ENTIDADES_QRO_GTO_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ENTIDADES_QRO_GTO_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ENTIDADES_QRO_GTO_5.addFeatures(features_ENTIDADES_QRO_GTO_5);
var lyr_ENTIDADES_QRO_GTO_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ENTIDADES_QRO_GTO_5, 
                style: style_ENTIDADES_QRO_GTO_5,
                popuplayertitle: 'ENTIDADES_QRO_GTO',
                interactive: true,
                title: '<img src="styles/legend/ENTIDADES_QRO_GTO_5.png" /> ENTIDADES_QRO_GTO'
            });
var format_EJE_V1_6 = new ol.format.GeoJSON();
var features_EJE_V1_6 = format_EJE_V1_6.readFeatures(json_EJE_V1_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EJE_V1_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EJE_V1_6.addFeatures(features_EJE_V1_6);
var lyr_EJE_V1_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EJE_V1_6, 
                style: style_EJE_V1_6,
                popuplayertitle: 'EJE_V1',
                interactive: true,
                title: '<img src="styles/legend/EJE_V1_6.png" /> EJE_V1'
            });
var format_CADENAMIENTOS_7 = new ol.format.GeoJSON();
var features_CADENAMIENTOS_7 = format_CADENAMIENTOS_7.readFeatures(json_CADENAMIENTOS_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CADENAMIENTOS_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CADENAMIENTOS_7.addFeatures(features_CADENAMIENTOS_7);
var lyr_CADENAMIENTOS_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CADENAMIENTOS_7, 
                style: style_CADENAMIENTOS_7,
                popuplayertitle: 'CADENAMIENTOS',
                interactive: true,
                title: '<img src="styles/legend/CADENAMIENTOS_7.png" /> CADENAMIENTOS'
            });
var format_ESTACIONES_V1_8 = new ol.format.GeoJSON();
var features_ESTACIONES_V1_8 = format_ESTACIONES_V1_8.readFeatures(json_ESTACIONES_V1_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ESTACIONES_V1_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESTACIONES_V1_8.addFeatures(features_ESTACIONES_V1_8);
var lyr_ESTACIONES_V1_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ESTACIONES_V1_8, 
                style: style_ESTACIONES_V1_8,
                popuplayertitle: 'ESTACIONES_V1',
                interactive: true,
                title: '<img src="styles/legend/ESTACIONES_V1_8.png" /> ESTACIONES_V1'
            });
var format_PK_V2_9 = new ol.format.GeoJSON();
var features_PK_V2_9 = format_PK_V2_9.readFeatures(json_PK_V2_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PK_V2_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PK_V2_9.addFeatures(features_PK_V2_9);
var lyr_PK_V2_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PK_V2_9, 
                style: style_PK_V2_9,
                popuplayertitle: 'PK_V2',
                interactive: true,
                title: '<img src="styles/legend/PK_V2_9.png" /> PK_V2'
            });
var format_LIMITES_TRAMOS_10 = new ol.format.GeoJSON();
var features_LIMITES_TRAMOS_10 = format_LIMITES_TRAMOS_10.readFeatures(json_LIMITES_TRAMOS_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIMITES_TRAMOS_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LIMITES_TRAMOS_10.addFeatures(features_LIMITES_TRAMOS_10);
var lyr_LIMITES_TRAMOS_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LIMITES_TRAMOS_10, 
                style: style_LIMITES_TRAMOS_10,
                popuplayertitle: 'LIMITES_TRAMOS',
                interactive: true,
                title: '<img src="styles/legend/LIMITES_TRAMOS_10.png" /> LIMITES_TRAMOS'
            });
var group_GENERAL = new ol.layer.Group({
                                layers: [lyr_MUNICIPIOS_PROYECTO_4,lyr_ENTIDADES_QRO_GTO_5,lyr_EJE_V1_6,lyr_CADENAMIENTOS_7,lyr_ESTACIONES_V1_8,lyr_PK_V2_9,lyr_LIMITES_TRAMOS_10,],
                                fold: 'close',
                                title: 'GENERAL'});
var group_AFECTACIONES = new ol.layer.Group({
                                layers: [lyr_DDV_V001_2,lyr_LIMITES_DDV_V1_3,],
                                fold: 'close',
                                title: 'AFECTACIONES'});
var group_GEOTECNIA = new ol.layer.Group({
                                layers: [lyr_SONDEOS_V02_1,],
                                fold: 'open',
                                title: 'GEOTECNIA'});
var group_BASEMAP = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite_0,],
                                fold: 'open',
                                title: 'BASEMAP'});

lyr_GoogleSatellite_0.setVisible(true);lyr_SONDEOS_V02_1.setVisible(true);lyr_DDV_V001_2.setVisible(true);lyr_LIMITES_DDV_V1_3.setVisible(true);lyr_MUNICIPIOS_PROYECTO_4.setVisible(true);lyr_ENTIDADES_QRO_GTO_5.setVisible(true);lyr_EJE_V1_6.setVisible(true);lyr_CADENAMIENTOS_7.setVisible(true);lyr_ESTACIONES_V1_8.setVisible(true);lyr_PK_V2_9.setVisible(true);lyr_LIMITES_TRAMOS_10.setVisible(true);
var layersList = [group_BASEMAP,group_GEOTECNIA,group_AFECTACIONES,group_GENERAL];
lyr_SONDEOS_V02_1.set('fieldAliases', {'UNIDAD PCA': 'UNIDAD PCA', 'TIPO DE SO': 'TIPO DE SO', 'EMPRESA': 'EMPRESA', 'ESTATUS': 'ESTATUS', 'OBSERVACIO': 'OBSERVACIO', 'CODI_LOCAL': 'CODI_LOCAL', 'COORD_X': 'COORD_X', 'COORD_Y': 'COORD_Y', 'UBICACIÓN': 'UBICACIÓN', 'FECHA_INI': 'FECHA_INI', 'FECHA_FIN': 'FECHA_FIN', 'PROFUND': 'PROFUND', 'PK': 'PK', 'ID_SISGO': 'ID_SISGO', 'UN_SONDEOS': 'UN_SONDEOS', });
lyr_DDV_V001_2.set('fieldAliases', {'PROPIETARI': 'PROPIETARI', 'ESTATUS': 'ESTATUS', 'ID_SISGO': 'ID_SISGO', 'ESTACIÓN': 'ESTACIÓN', 'PLANO_DWG': 'PLANO_DWG', 'PLANO_PDF': 'PLANO_PDF', 'CODIGO': 'CODIGO', 'PK_INICIO': 'PK_INICIO', 'PK_FIN': 'PK_FIN', 'SUP_M2': 'SUP_M2', });
lyr_LIMITES_DDV_V1_3.set('fieldAliases', {'Linetype': 'Linetype', 'TIPO': 'TIPO', });
lyr_MUNICIPIOS_PROYECTO_4.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', });
lyr_ENTIDADES_QRO_GTO_5.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'NOMGEO': 'NOMGEO', });
lyr_EJE_V1_6.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_CADENAMIENTOS_7.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_ESTACIONES_V1_8.set('fieldAliases', {'ESTACION': 'ESTACION', });
lyr_PK_V2_9.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', 'ANGULO_01': 'ANGULO_01', });
lyr_LIMITES_TRAMOS_10.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_SONDEOS_V02_1.set('fieldImages', {'UNIDAD PCA': 'CheckBox', 'TIPO DE SO': 'TextEdit', 'EMPRESA': 'TextEdit', 'ESTATUS': 'TextEdit', 'OBSERVACIO': 'TextEdit', 'CODI_LOCAL': 'TextEdit', 'COORD_X': 'TextEdit', 'COORD_Y': 'TextEdit', 'UBICACIÓN': 'TextEdit', 'FECHA_INI': 'TextEdit', 'FECHA_FIN': 'TextEdit', 'PROFUND': '', 'PK': 'TextEdit', 'ID_SISGO': 'TextEdit', 'UN_SONDEOS': '', });
lyr_DDV_V001_2.set('fieldImages', {'PROPIETARI': 'TextEdit', 'ESTATUS': 'TextEdit', 'ID_SISGO': 'TextEdit', 'ESTACIÓN': 'TextEdit', 'PLANO_DWG': 'TextEdit', 'PLANO_PDF': 'TextEdit', 'CODIGO': 'TextEdit', 'PK_INICIO': 'TextEdit', 'PK_FIN': 'TextEdit', 'SUP_M2': 'TextEdit', });
lyr_LIMITES_DDV_V1_3.set('fieldImages', {'Linetype': 'TextEdit', 'TIPO': 'TextEdit', });
lyr_MUNICIPIOS_PROYECTO_4.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', });
lyr_ENTIDADES_QRO_GTO_5.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'NOMGEO': 'TextEdit', });
lyr_EJE_V1_6.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_CADENAMIENTOS_7.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_ESTACIONES_V1_8.set('fieldImages', {'ESTACION': 'TextEdit', });
lyr_PK_V2_9.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', 'ANGULO_01': 'TextEdit', });
lyr_LIMITES_TRAMOS_10.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_SONDEOS_V02_1.set('fieldLabels', {'UNIDAD PCA': 'no label', 'TIPO DE SO': 'inline label - always visible', 'EMPRESA': 'inline label - always visible', 'ESTATUS': 'inline label - always visible', 'OBSERVACIO': 'inline label - always visible', 'CODI_LOCAL': 'inline label - always visible', 'COORD_X': 'inline label - always visible', 'COORD_Y': 'inline label - always visible', 'UBICACIÓN': 'inline label - always visible', 'FECHA_INI': 'inline label - always visible', 'FECHA_FIN': 'inline label - always visible', 'PROFUND': 'inline label - always visible', 'PK': 'inline label - always visible', 'ID_SISGO': 'inline label - always visible', 'UN_SONDEOS': 'inline label - always visible', });
lyr_DDV_V001_2.set('fieldLabels', {'PROPIETARI': 'inline label - always visible', 'ESTATUS': 'inline label - always visible', 'ID_SISGO': 'inline label - always visible', 'ESTACIÓN': 'inline label - always visible', 'PLANO_DWG': 'no label', 'PLANO_PDF': 'no label', 'CODIGO': 'inline label - always visible', 'PK_INICIO': 'inline label - always visible', 'PK_FIN': 'inline label - always visible', 'SUP_M2': 'inline label - always visible', });
lyr_LIMITES_DDV_V1_3.set('fieldLabels', {'Linetype': 'no label', 'TIPO': 'no label', });
lyr_MUNICIPIOS_PROYECTO_4.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', });
lyr_ENTIDADES_QRO_GTO_5.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'NOMGEO': 'no label', });
lyr_EJE_V1_6.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_CADENAMIENTOS_7.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_ESTACIONES_V1_8.set('fieldLabels', {'ESTACION': 'no label', });
lyr_PK_V2_9.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'inline label - always visible', 'ANGULO_01': 'no label', });
lyr_LIMITES_TRAMOS_10.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_LIMITES_TRAMOS_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});