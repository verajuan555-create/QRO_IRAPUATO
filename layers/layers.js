var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_MIA_IRAPUATO_2 = new ol.format.GeoJSON();
var features_MIA_IRAPUATO_2 = format_MIA_IRAPUATO_2.readFeatures(json_MIA_IRAPUATO_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MIA_IRAPUATO_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MIA_IRAPUATO_2.addFeatures(features_MIA_IRAPUATO_2);
var lyr_MIA_IRAPUATO_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MIA_IRAPUATO_2, 
                style: style_MIA_IRAPUATO_2,
                popuplayertitle: 'MIA_IRAPUATO',
                interactive: true,
                title: '<img src="styles/legend/MIA_IRAPUATO_2.png" /> MIA_IRAPUATO'
            });
var format_DDV_002_3 = new ol.format.GeoJSON();
var features_DDV_002_3 = format_DDV_002_3.readFeatures(json_DDV_002_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DDV_002_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DDV_002_3.addFeatures(features_DDV_002_3);
var lyr_DDV_002_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DDV_002_3, 
                style: style_DDV_002_3,
                popuplayertitle: 'DDV_002',
                interactive: true,
    title: 'DDV_002<br />\
    <img src="styles/legend/DDV_002_3_0.png" /> EN PROCESO<br />\
    <img src="styles/legend/DDV_002_3_1.png" /> LIBERADO<br />\
    <img src="styles/legend/DDV_002_3_2.png" /> PENDIENTE<br />\
    <img src="styles/legend/DDV_002_3_3.png" /> POR DEFINIR<br />' });
var format_LIMITES_DDV_V1_4 = new ol.format.GeoJSON();
var features_LIMITES_DDV_V1_4 = format_LIMITES_DDV_V1_4.readFeatures(json_LIMITES_DDV_V1_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIMITES_DDV_V1_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LIMITES_DDV_V1_4.addFeatures(features_LIMITES_DDV_V1_4);
var lyr_LIMITES_DDV_V1_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LIMITES_DDV_V1_4, 
                style: style_LIMITES_DDV_V1_4,
                popuplayertitle: 'LIMITES_DDV_V1',
                interactive: true,
    title: 'LIMITES_DDV_V1<br />\
    <img src="styles/legend/LIMITES_DDV_V1_4_0.png" /> Area afectacion<br />\
    <img src="styles/legend/LIMITES_DDV_V1_4_1.png" /> DDV ACTUAL<br />\
    <img src="styles/legend/LIMITES_DDV_V1_4_2.png" /> V-TOPO<br />' });
var format_EXPLORACION_INAH_5 = new ol.format.GeoJSON();
var features_EXPLORACION_INAH_5 = format_EXPLORACION_INAH_5.readFeatures(json_EXPLORACION_INAH_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EXPLORACION_INAH_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EXPLORACION_INAH_5.addFeatures(features_EXPLORACION_INAH_5);
var lyr_EXPLORACION_INAH_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EXPLORACION_INAH_5, 
                style: style_EXPLORACION_INAH_5,
                popuplayertitle: 'EXPLORACION_INAH',
                interactive: true,
                title: '<img src="styles/legend/EXPLORACION_INAH_5.png" /> EXPLORACION_INAH'
            });
var format_E02_EJES_LINE_6 = new ol.format.GeoJSON();
var features_E02_EJES_LINE_6 = format_E02_EJES_LINE_6.readFeatures(json_E02_EJES_LINE_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_E02_EJES_LINE_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_E02_EJES_LINE_6.addFeatures(features_E02_EJES_LINE_6);
var lyr_E02_EJES_LINE_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_E02_EJES_LINE_6, 
                style: style_E02_EJES_LINE_6,
                popuplayertitle: 'E02_EJES_LINE',
                interactive: true,
                title: '<img src="styles/legend/E02_EJES_LINE_6.png" /> E02_EJES_LINE'
            });
var format_E02_EJES_CIMENT_ID_7 = new ol.format.GeoJSON();
var features_E02_EJES_CIMENT_ID_7 = format_E02_EJES_CIMENT_ID_7.readFeatures(json_E02_EJES_CIMENT_ID_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_E02_EJES_CIMENT_ID_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_E02_EJES_CIMENT_ID_7.addFeatures(features_E02_EJES_CIMENT_ID_7);
var lyr_E02_EJES_CIMENT_ID_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_E02_EJES_CIMENT_ID_7, 
                style: style_E02_EJES_CIMENT_ID_7,
                popuplayertitle: 'E02_EJES_CIMENT_ID',
                interactive: true,
                title: '<img src="styles/legend/E02_EJES_CIMENT_ID_7.png" /> E02_EJES_CIMENT_ID'
            });
var format_E02_TRABES_8 = new ol.format.GeoJSON();
var features_E02_TRABES_8 = format_E02_TRABES_8.readFeatures(json_E02_TRABES_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_E02_TRABES_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_E02_TRABES_8.addFeatures(features_E02_TRABES_8);
var lyr_E02_TRABES_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_E02_TRABES_8, 
                style: style_E02_TRABES_8,
                popuplayertitle: 'E02_TRABES',
                interactive: true,
                title: '<img src="styles/legend/E02_TRABES_8.png" /> E02_TRABES'
            });
var format_E02_ZAPATAS_9 = new ol.format.GeoJSON();
var features_E02_ZAPATAS_9 = format_E02_ZAPATAS_9.readFeatures(json_E02_ZAPATAS_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_E02_ZAPATAS_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_E02_ZAPATAS_9.addFeatures(features_E02_ZAPATAS_9);
var lyr_E02_ZAPATAS_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_E02_ZAPATAS_9, 
                style: style_E02_ZAPATAS_9,
                popuplayertitle: 'E02_ZAPATAS',
                interactive: true,
    title: 'E02_ZAPATAS<br />\
    <img src="styles/legend/E02_ZAPATAS_9_0.png" /> ZC-1<br />\
    <img src="styles/legend/E02_ZAPATAS_9_1.png" /> ZC-2<br />\
    <img src="styles/legend/E02_ZAPATAS_9_2.png" /> ZC-3<br />' });
var format_ENVOLVENTES_ESTACIONES_10 = new ol.format.GeoJSON();
var features_ENVOLVENTES_ESTACIONES_10 = format_ENVOLVENTES_ESTACIONES_10.readFeatures(json_ENVOLVENTES_ESTACIONES_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ENVOLVENTES_ESTACIONES_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ENVOLVENTES_ESTACIONES_10.addFeatures(features_ENVOLVENTES_ESTACIONES_10);
var lyr_ENVOLVENTES_ESTACIONES_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ENVOLVENTES_ESTACIONES_10, 
                style: style_ENVOLVENTES_ESTACIONES_10,
                popuplayertitle: 'ENVOLVENTES_ESTACIONES',
                interactive: true,
                title: '<img src="styles/legend/ENVOLVENTES_ESTACIONES_10.png" /> ENVOLVENTES_ESTACIONES'
            });
var format_SONDEOS_V02_11 = new ol.format.GeoJSON();
var features_SONDEOS_V02_11 = format_SONDEOS_V02_11.readFeatures(json_SONDEOS_V02_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SONDEOS_V02_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SONDEOS_V02_11.addFeatures(features_SONDEOS_V02_11);
var lyr_SONDEOS_V02_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SONDEOS_V02_11, 
                style: style_SONDEOS_V02_11,
                popuplayertitle: 'SONDEOS_V02',
                interactive: true,
    title: 'SONDEOS_V02<br />\
    <img src="styles/legend/SONDEOS_V02_11_0.png" /> TERMINADO<br />\
    <img src="styles/legend/SONDEOS_V02_11_1.png" /> EN PROCESO<br />\
    <img src="styles/legend/SONDEOS_V02_11_2.png" /> PROYECTADO<br />\
    <img src="styles/legend/SONDEOS_V02_11_3.png" /> INCONCLUSO<br />' });
var format_FALLA_CELAYA_12 = new ol.format.GeoJSON();
var features_FALLA_CELAYA_12 = format_FALLA_CELAYA_12.readFeatures(json_FALLA_CELAYA_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FALLA_CELAYA_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FALLA_CELAYA_12.addFeatures(features_FALLA_CELAYA_12);
var lyr_FALLA_CELAYA_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FALLA_CELAYA_12, 
                style: style_FALLA_CELAYA_12,
                popuplayertitle: 'FALLA_CELAYA',
                interactive: true,
                title: '<img src="styles/legend/FALLA_CELAYA_12.png" /> FALLA_CELAYA'
            });
var format_MUNICIPIOS_PROYECTO_13 = new ol.format.GeoJSON();
var features_MUNICIPIOS_PROYECTO_13 = format_MUNICIPIOS_PROYECTO_13.readFeatures(json_MUNICIPIOS_PROYECTO_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MUNICIPIOS_PROYECTO_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MUNICIPIOS_PROYECTO_13.addFeatures(features_MUNICIPIOS_PROYECTO_13);
var lyr_MUNICIPIOS_PROYECTO_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MUNICIPIOS_PROYECTO_13, 
                style: style_MUNICIPIOS_PROYECTO_13,
                popuplayertitle: 'MUNICIPIOS_PROYECTO',
                interactive: true,
                title: '<img src="styles/legend/MUNICIPIOS_PROYECTO_13.png" /> MUNICIPIOS_PROYECTO'
            });
var format_ENTIDADES_QRO_GTO_14 = new ol.format.GeoJSON();
var features_ENTIDADES_QRO_GTO_14 = format_ENTIDADES_QRO_GTO_14.readFeatures(json_ENTIDADES_QRO_GTO_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ENTIDADES_QRO_GTO_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ENTIDADES_QRO_GTO_14.addFeatures(features_ENTIDADES_QRO_GTO_14);
var lyr_ENTIDADES_QRO_GTO_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ENTIDADES_QRO_GTO_14, 
                style: style_ENTIDADES_QRO_GTO_14,
                popuplayertitle: 'ENTIDADES_QRO_GTO',
                interactive: true,
                title: '<img src="styles/legend/ENTIDADES_QRO_GTO_14.png" /> ENTIDADES_QRO_GTO'
            });
var format_EJE_V1_15 = new ol.format.GeoJSON();
var features_EJE_V1_15 = format_EJE_V1_15.readFeatures(json_EJE_V1_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EJE_V1_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EJE_V1_15.addFeatures(features_EJE_V1_15);
var lyr_EJE_V1_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EJE_V1_15, 
                style: style_EJE_V1_15,
                popuplayertitle: 'EJE_V1',
                interactive: true,
                title: '<img src="styles/legend/EJE_V1_15.png" /> EJE_V1'
            });
var format_CADENAMIENTOS_16 = new ol.format.GeoJSON();
var features_CADENAMIENTOS_16 = format_CADENAMIENTOS_16.readFeatures(json_CADENAMIENTOS_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CADENAMIENTOS_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CADENAMIENTOS_16.addFeatures(features_CADENAMIENTOS_16);
var lyr_CADENAMIENTOS_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CADENAMIENTOS_16, 
                style: style_CADENAMIENTOS_16,
                popuplayertitle: 'CADENAMIENTOS',
                interactive: true,
                title: '<img src="styles/legend/CADENAMIENTOS_16.png" /> CADENAMIENTOS'
            });
var format_ESTACIONES_V1_17 = new ol.format.GeoJSON();
var features_ESTACIONES_V1_17 = format_ESTACIONES_V1_17.readFeatures(json_ESTACIONES_V1_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ESTACIONES_V1_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESTACIONES_V1_17.addFeatures(features_ESTACIONES_V1_17);
var lyr_ESTACIONES_V1_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ESTACIONES_V1_17, 
                style: style_ESTACIONES_V1_17,
                popuplayertitle: 'ESTACIONES_V1',
                interactive: true,
                title: '<img src="styles/legend/ESTACIONES_V1_17.png" /> ESTACIONES_V1'
            });
var format_PK_V2_18 = new ol.format.GeoJSON();
var features_PK_V2_18 = format_PK_V2_18.readFeatures(json_PK_V2_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PK_V2_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PK_V2_18.addFeatures(features_PK_V2_18);
var lyr_PK_V2_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PK_V2_18, 
                style: style_PK_V2_18,
                popuplayertitle: 'PK_V2',
                interactive: true,
                title: '<img src="styles/legend/PK_V2_18.png" /> PK_V2'
            });
var format_LIMITES_TRAMOS_19 = new ol.format.GeoJSON();
var features_LIMITES_TRAMOS_19 = format_LIMITES_TRAMOS_19.readFeatures(json_LIMITES_TRAMOS_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIMITES_TRAMOS_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LIMITES_TRAMOS_19.addFeatures(features_LIMITES_TRAMOS_19);
var lyr_LIMITES_TRAMOS_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LIMITES_TRAMOS_19, 
                style: style_LIMITES_TRAMOS_19,
                popuplayertitle: 'LIMITES_TRAMOS',
                interactive: true,
                title: '<img src="styles/legend/LIMITES_TRAMOS_19.png" /> LIMITES_TRAMOS'
            });
var group_GENERAL = new ol.layer.Group({
                                layers: [lyr_MUNICIPIOS_PROYECTO_13,lyr_ENTIDADES_QRO_GTO_14,lyr_EJE_V1_15,lyr_CADENAMIENTOS_16,lyr_ESTACIONES_V1_17,lyr_PK_V2_18,lyr_LIMITES_TRAMOS_19,],
                                fold: 'close',
                                title: 'GENERAL'});
var group_GEOTECNIA = new ol.layer.Group({
                                layers: [lyr_SONDEOS_V02_11,lyr_FALLA_CELAYA_12,],
                                fold: 'close',
                                title: 'GEOTECNIA'});
var group_ESTACIONES = new ol.layer.Group({
                                layers: [lyr_ENVOLVENTES_ESTACIONES_10,],
                                fold: 'close',
                                title: 'ESTACIONES'});
var group_E02_APASEO = new ol.layer.Group({
                                layers: [lyr_E02_EJES_LINE_6,lyr_E02_EJES_CIMENT_ID_7,lyr_E02_TRABES_8,lyr_E02_ZAPATAS_9,],
                                fold: 'close',
                                title: 'E02_APASEO'});
var group_AFECTACIONES = new ol.layer.Group({
                                layers: [lyr_DDV_002_3,lyr_LIMITES_DDV_V1_4,lyr_EXPLORACION_INAH_5,],
                                fold: 'close',
                                title: 'AFECTACIONES'});
var group_AMBIENTAL = new ol.layer.Group({
                                layers: [lyr_MIA_IRAPUATO_2,],
                                fold: 'close',
                                title: 'AMBIENTAL'});
var group_BASEMAP = new ol.layer.Group({
                                layers: [lyr_OSMStandard_0,lyr_GoogleSatellite_1,],
                                fold: 'close',
                                title: 'BASEMAP'});

lyr_OSMStandard_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_MIA_IRAPUATO_2.setVisible(true);lyr_DDV_002_3.setVisible(true);lyr_LIMITES_DDV_V1_4.setVisible(true);lyr_EXPLORACION_INAH_5.setVisible(true);lyr_E02_EJES_LINE_6.setVisible(true);lyr_E02_EJES_CIMENT_ID_7.setVisible(true);lyr_E02_TRABES_8.setVisible(true);lyr_E02_ZAPATAS_9.setVisible(true);lyr_ENVOLVENTES_ESTACIONES_10.setVisible(true);lyr_SONDEOS_V02_11.setVisible(true);lyr_FALLA_CELAYA_12.setVisible(true);lyr_MUNICIPIOS_PROYECTO_13.setVisible(true);lyr_ENTIDADES_QRO_GTO_14.setVisible(true);lyr_EJE_V1_15.setVisible(true);lyr_CADENAMIENTOS_16.setVisible(true);lyr_ESTACIONES_V1_17.setVisible(true);lyr_PK_V2_18.setVisible(true);lyr_LIMITES_TRAMOS_19.setVisible(true);
var layersList = [group_BASEMAP,group_AMBIENTAL,group_AFECTACIONES,group_E02_APASEO,group_ESTACIONES,group_GEOTECNIA,group_GENERAL];
lyr_MIA_IRAPUATO_2.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_DDV_002_3.set('fieldAliases', {'PROPIETARI': 'PROPIETARI', 'ESTATUS': 'ESTATUS', 'ID_SISGO': 'ID_SISGO', 'ESTACIÓN': 'ESTACIÓN', 'PLANO_DWG': 'PLANO_DWG', 'PLANO_PDF': 'PLANO_PDF', 'CODIGO': 'CODIGO', 'PK_INICIO': 'PK_INICIO', 'PK_FIN': 'PK_FIN', 'SUP_M2': 'SUP_M2', 'SUBTRAMO': 'SUBTRAMO', });
lyr_LIMITES_DDV_V1_4.set('fieldAliases', {'Linetype': 'Linetype', 'TIPO': 'TIPO', });
lyr_EXPLORACION_INAH_5.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_E02_EJES_LINE_6.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_E02_EJES_CIMENT_ID_7.set('fieldAliases', {'Text': 'Text', });
lyr_E02_TRABES_8.set('fieldAliases', {'Layer': 'Layer', });
lyr_E02_ZAPATAS_9.set('fieldAliases', {'TIPO': 'TIPO', 'ID': 'ID', 'PK': 'PK', 'SUBTRAMO': 'SUBTRAMO', 'ESTATUS': 'ESTATUS', 'OBSERVACIO': 'OBSERVACIO', 'INI_CONST': 'INI_CONST', 'FIN_CONST': 'FIN_CONST', });
lyr_ENVOLVENTES_ESTACIONES_10.set('fieldAliases', {'ESTACIÓN': 'ESTACIÓN', 'SISGO_ID': 'SISGO_ID', 'PK_INICIO': 'PK_INICIO', 'PK_FINAL': 'PK_FINAL', });
lyr_SONDEOS_V02_11.set('fieldAliases', {'UNIDAD PCA': 'UNIDAD PCA', 'TIPO DE SO': 'TIPO DE SO', 'EMPRESA': 'EMPRESA', 'ESTATUS': 'ESTATUS', 'OBSERVACIO': 'OBSERVACIO', 'CODI_LOCAL': 'CODI_LOCAL', 'COORD_X': 'COORD_X', 'COORD_Y': 'COORD_Y', 'UBICACIÓN': 'UBICACIÓN', 'FECHA_INI': 'FECHA_INI', 'FECHA_FIN': 'FECHA_FIN', 'PROFUND': 'PROFUND', 'PK': 'PK', 'ID_SISGO': 'ID_SISGO', 'LINK_EXTER': 'LINK_EXTER', 'LINK_INTER': 'LINK_INTER', });
lyr_FALLA_CELAYA_12.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_MUNICIPIOS_PROYECTO_13.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', });
lyr_ENTIDADES_QRO_GTO_14.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'NOMGEO': 'NOMGEO', });
lyr_EJE_V1_15.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_CADENAMIENTOS_16.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_ESTACIONES_V1_17.set('fieldAliases', {'ESTACION': 'ESTACION', 'PK': 'PK', 'LOCALIDAD': 'LOCALIDAD', 'MUNICIPIO': 'MUNICIPIO', 'ESTADO': 'ESTADO', 'COORD_X': 'COORD_X', 'COORD_Y': 'COORD_Y', });
lyr_PK_V2_18.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', 'ANGULO_01': 'ANGULO_01', });
lyr_LIMITES_TRAMOS_19.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_MIA_IRAPUATO_2.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_DDV_002_3.set('fieldImages', {'PROPIETARI': 'TextEdit', 'ESTATUS': 'TextEdit', 'ID_SISGO': 'TextEdit', 'ESTACIÓN': 'TextEdit', 'PLANO_DWG': 'TextEdit', 'PLANO_PDF': 'TextEdit', 'CODIGO': 'TextEdit', 'PK_INICIO': 'TextEdit', 'PK_FIN': 'TextEdit', 'SUP_M2': 'TextEdit', 'SUBTRAMO': 'TextEdit', });
lyr_LIMITES_DDV_V1_4.set('fieldImages', {'Linetype': 'TextEdit', 'TIPO': 'TextEdit', });
lyr_EXPLORACION_INAH_5.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_E02_EJES_LINE_6.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_E02_EJES_CIMENT_ID_7.set('fieldImages', {'Text': 'TextEdit', });
lyr_E02_TRABES_8.set('fieldImages', {'Layer': 'TextEdit', });
lyr_E02_ZAPATAS_9.set('fieldImages', {'TIPO': 'TextEdit', 'ID': '', 'PK': '', 'SUBTRAMO': '', 'ESTATUS': '', 'OBSERVACIO': '', 'INI_CONST': '', 'FIN_CONST': '', });
lyr_ENVOLVENTES_ESTACIONES_10.set('fieldImages', {'ESTACIÓN': '', 'SISGO_ID': '', 'PK_INICIO': '', 'PK_FINAL': '', });
lyr_SONDEOS_V02_11.set('fieldImages', {'UNIDAD PCA': 'CheckBox', 'TIPO DE SO': 'TextEdit', 'EMPRESA': 'TextEdit', 'ESTATUS': 'TextEdit', 'OBSERVACIO': 'TextEdit', 'CODI_LOCAL': 'TextEdit', 'COORD_X': 'TextEdit', 'COORD_Y': 'TextEdit', 'UBICACIÓN': 'TextEdit', 'FECHA_INI': 'TextEdit', 'FECHA_FIN': 'TextEdit', 'PROFUND': '', 'PK': 'TextEdit', 'ID_SISGO': 'TextEdit', 'LINK_EXTER': '', 'LINK_INTER': '', });
lyr_FALLA_CELAYA_12.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_MUNICIPIOS_PROYECTO_13.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', });
lyr_ENTIDADES_QRO_GTO_14.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'NOMGEO': 'TextEdit', });
lyr_EJE_V1_15.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_CADENAMIENTOS_16.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_ESTACIONES_V1_17.set('fieldImages', {'ESTACION': 'TextEdit', 'PK': 'TextEdit', 'LOCALIDAD': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'ESTADO': 'TextEdit', 'COORD_X': 'TextEdit', 'COORD_Y': 'TextEdit', });
lyr_PK_V2_18.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', 'ANGULO_01': 'TextEdit', });
lyr_LIMITES_TRAMOS_19.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_MIA_IRAPUATO_2.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_DDV_002_3.set('fieldLabels', {'PROPIETARI': 'inline label - always visible', 'ESTATUS': 'inline label - always visible', 'ID_SISGO': 'inline label - always visible', 'ESTACIÓN': 'inline label - always visible', 'PLANO_DWG': 'inline label - always visible', 'PLANO_PDF': 'inline label - always visible', 'CODIGO': 'inline label - always visible', 'PK_INICIO': 'inline label - always visible', 'PK_FIN': 'inline label - always visible', 'SUP_M2': 'inline label - always visible', 'SUBTRAMO': 'inline label - always visible', });
lyr_LIMITES_DDV_V1_4.set('fieldLabels', {'Linetype': 'no label', 'TIPO': 'no label', });
lyr_EXPLORACION_INAH_5.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_E02_EJES_LINE_6.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_E02_EJES_CIMENT_ID_7.set('fieldLabels', {'Text': 'no label', });
lyr_E02_TRABES_8.set('fieldLabels', {'Layer': 'no label', });
lyr_E02_ZAPATAS_9.set('fieldLabels', {'TIPO': 'inline label - always visible', 'ID': 'no label', 'PK': 'no label', 'SUBTRAMO': 'no label', 'ESTATUS': 'no label', 'OBSERVACIO': 'no label', 'INI_CONST': 'no label', 'FIN_CONST': 'no label', });
lyr_ENVOLVENTES_ESTACIONES_10.set('fieldLabels', {'ESTACIÓN': 'inline label - always visible', 'SISGO_ID': 'inline label - always visible', 'PK_INICIO': 'inline label - always visible', 'PK_FINAL': 'inline label - always visible', });
lyr_SONDEOS_V02_11.set('fieldLabels', {'UNIDAD PCA': 'no label', 'TIPO DE SO': 'inline label - always visible', 'EMPRESA': 'inline label - always visible', 'ESTATUS': 'inline label - always visible', 'OBSERVACIO': 'no label', 'CODI_LOCAL': 'inline label - always visible', 'COORD_X': 'inline label - always visible', 'COORD_Y': 'inline label - always visible', 'UBICACIÓN': 'inline label - always visible', 'FECHA_INI': 'no label', 'FECHA_FIN': 'no label', 'PROFUND': 'inline label - always visible', 'PK': 'inline label - always visible', 'ID_SISGO': 'no label', 'LINK_EXTER': 'inline label - always visible', 'LINK_INTER': 'inline label - always visible', });
lyr_FALLA_CELAYA_12.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_MUNICIPIOS_PROYECTO_13.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', });
lyr_ENTIDADES_QRO_GTO_14.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'NOMGEO': 'no label', });
lyr_EJE_V1_15.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_CADENAMIENTOS_16.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_ESTACIONES_V1_17.set('fieldLabels', {'ESTACION': 'inline label - always visible', 'PK': 'no label', 'LOCALIDAD': 'no label', 'MUNICIPIO': 'no label', 'ESTADO': 'no label', 'COORD_X': 'no label', 'COORD_Y': 'no label', });
lyr_PK_V2_18.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'header label - visible with data', 'ANGULO_01': 'no label', });
lyr_LIMITES_TRAMOS_19.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_LIMITES_TRAMOS_19.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});