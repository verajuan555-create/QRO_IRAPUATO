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
var lyr_ORTOFOTO_APASEO_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/qroirapuato/wms?version%3D1.1.0%26layers%3Dqroirapuato%3AORTOFOTO_APASEO%26bbox%3D322485.50009999983%2C2271925.1402603453%2C326534.4666878987%2C2272690.1744999997%26width%3D768%26height%3D330%26srs%3DEPSG%3A32614%26styles%3D",
                              attributions: ' ',
                              params: {
                                "LAYERS": "ORTOFOTO_APASEO",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'ORTOFOTO_APASEO',
                            popuplayertitle: 'ORTOFOTO_APASEO',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_ORTOFOTO_APASEO_1, 0]);
var format_CASETAS_V01_2 = new ol.format.GeoJSON();
var features_CASETAS_V01_2 = format_CASETAS_V01_2.readFeatures(json_CASETAS_V01_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CASETAS_V01_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CASETAS_V01_2.addFeatures(features_CASETAS_V01_2);
var lyr_CASETAS_V01_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CASETAS_V01_2, 
                style: style_CASETAS_V01_2,
                popuplayertitle: 'CASETAS_V01',
                interactive: true,
                title: '<img src="styles/legend/CASETAS_V01_2.png" /> CASETAS_V01'
            });
var format_FALLA_CELAYA_3 = new ol.format.GeoJSON();
var features_FALLA_CELAYA_3 = format_FALLA_CELAYA_3.readFeatures(json_FALLA_CELAYA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FALLA_CELAYA_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FALLA_CELAYA_3.addFeatures(features_FALLA_CELAYA_3);
var lyr_FALLA_CELAYA_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FALLA_CELAYA_3, 
                style: style_FALLA_CELAYA_3,
                popuplayertitle: 'FALLA_CELAYA',
                interactive: true,
                title: '<img src="styles/legend/FALLA_CELAYA_3.png" /> FALLA_CELAYA'
            });
var format_MIA_IRAPUATO_4 = new ol.format.GeoJSON();
var features_MIA_IRAPUATO_4 = format_MIA_IRAPUATO_4.readFeatures(json_MIA_IRAPUATO_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MIA_IRAPUATO_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MIA_IRAPUATO_4.addFeatures(features_MIA_IRAPUATO_4);
var lyr_MIA_IRAPUATO_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MIA_IRAPUATO_4, 
                style: style_MIA_IRAPUATO_4,
                popuplayertitle: 'MIA_IRAPUATO',
                interactive: true,
                title: '<img src="styles/legend/MIA_IRAPUATO_4.png" /> MIA_IRAPUATO'
            });
var format_LIMITES_DDV_V1_5 = new ol.format.GeoJSON();
var features_LIMITES_DDV_V1_5 = format_LIMITES_DDV_V1_5.readFeatures(json_LIMITES_DDV_V1_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIMITES_DDV_V1_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LIMITES_DDV_V1_5.addFeatures(features_LIMITES_DDV_V1_5);
var lyr_LIMITES_DDV_V1_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LIMITES_DDV_V1_5, 
                style: style_LIMITES_DDV_V1_5,
                popuplayertitle: 'LIMITES_DDV_V1',
                interactive: true,
    title: 'LIMITES_DDV_V1<br />\
    <img src="styles/legend/LIMITES_DDV_V1_5_0.png" /> Area afectacion<br />\
    <img src="styles/legend/LIMITES_DDV_V1_5_1.png" /> DDV ACTUAL<br />\
    <img src="styles/legend/LIMITES_DDV_V1_5_2.png" /> V-TOPO<br />' });
var format_E03_EJES_L_6 = new ol.format.GeoJSON();
var features_E03_EJES_L_6 = format_E03_EJES_L_6.readFeatures(json_E03_EJES_L_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_E03_EJES_L_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_E03_EJES_L_6.addFeatures(features_E03_EJES_L_6);
var lyr_E03_EJES_L_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_E03_EJES_L_6, 
                style: style_E03_EJES_L_6,
                popuplayertitle: 'E03_EJES_L',
                interactive: true,
                title: '<img src="styles/legend/E03_EJES_L_6.png" /> E03_EJES_L'
            });
var format_E03_EJES_7 = new ol.format.GeoJSON();
var features_E03_EJES_7 = format_E03_EJES_7.readFeatures(json_E03_EJES_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_E03_EJES_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_E03_EJES_7.addFeatures(features_E03_EJES_7);
var lyr_E03_EJES_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_E03_EJES_7, 
                style: style_E03_EJES_7,
                popuplayertitle: 'E03_EJES',
                interactive: true,
                title: '<img src="styles/legend/E03_EJES_7.png" /> E03_EJES'
            });
var format_E03_ZAPATAS_8 = new ol.format.GeoJSON();
var features_E03_ZAPATAS_8 = format_E03_ZAPATAS_8.readFeatures(json_E03_ZAPATAS_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_E03_ZAPATAS_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_E03_ZAPATAS_8.addFeatures(features_E03_ZAPATAS_8);
var lyr_E03_ZAPATAS_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_E03_ZAPATAS_8, 
                style: style_E03_ZAPATAS_8,
                popuplayertitle: 'E03_ZAPATAS',
                interactive: true,
    title: 'E03_ZAPATAS<br />\
    <img src="styles/legend/E03_ZAPATAS_8_0.png" /> EXCAVACIÓN<br />\
    <img src="styles/legend/E03_ZAPATAS_8_1.png" /> MEJORAMIENTO<br />\
    <img src="styles/legend/E03_ZAPATAS_8_2.png" /> COLOCACIÓN DE PLANTILLA<br />\
    <img src="styles/legend/E03_ZAPATAS_8_3.png" /> ARMADO DE ACERO<br />\
    <img src="styles/legend/E03_ZAPATAS_8_4.png" /> COLOCACIÓN DE CIMBRA<br />\
    <img src="styles/legend/E03_ZAPATAS_8_5.png" /> COLOCACIÓN DE CONCRETO<br />\
    <img src="styles/legend/E03_ZAPATAS_8_6.png" /> COLOCACIÓN DE ANCLAS<br />\
    <img src="styles/legend/E03_ZAPATAS_8_7.png" /> PENDIENTE<br />\
    <img src="styles/legend/E03_ZAPATAS_8_8.png" /> TERMINADA<br />' });
var format_E03_TRABES_9 = new ol.format.GeoJSON();
var features_E03_TRABES_9 = format_E03_TRABES_9.readFeatures(json_E03_TRABES_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_E03_TRABES_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_E03_TRABES_9.addFeatures(features_E03_TRABES_9);
var lyr_E03_TRABES_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_E03_TRABES_9, 
                style: style_E03_TRABES_9,
                popuplayertitle: 'E03_TRABES',
                interactive: true,
    title: 'E03_TRABES<br />\
    <img src="styles/legend/E03_TRABES_9_0.png" /> EXCAVACIÓN<br />\
    <img src="styles/legend/E03_TRABES_9_1.png" /> MEJORAMIENTO<br />\
    <img src="styles/legend/E03_TRABES_9_2.png" /> COLOCACIÓN DE PLANTILLA<br />\
    <img src="styles/legend/E03_TRABES_9_3.png" /> ARMADO DE ACERO<br />\
    <img src="styles/legend/E03_TRABES_9_4.png" /> COLOCACIÓN DE CIMBRA<br />\
    <img src="styles/legend/E03_TRABES_9_5.png" /> COLOCACIÓN DE CONCRETO<br />\
    <img src="styles/legend/E03_TRABES_9_6.png" /> COLOCACIÓN DE ANCLAS<br />\
    <img src="styles/legend/E03_TRABES_9_7.png" /> PENDIENTE<br />\
    <img src="styles/legend/E03_TRABES_9_8.png" /> TERMINADA<br />' });
var format_E02_EJES_LINE_10 = new ol.format.GeoJSON();
var features_E02_EJES_LINE_10 = format_E02_EJES_LINE_10.readFeatures(json_E02_EJES_LINE_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_E02_EJES_LINE_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_E02_EJES_LINE_10.addFeatures(features_E02_EJES_LINE_10);
var lyr_E02_EJES_LINE_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_E02_EJES_LINE_10, 
                style: style_E02_EJES_LINE_10,
                popuplayertitle: 'E02_EJES_LINE',
                interactive: true,
                title: '<img src="styles/legend/E02_EJES_LINE_10.png" /> E02_EJES_LINE'
            });
var format_E02_EJES_TXT_11 = new ol.format.GeoJSON();
var features_E02_EJES_TXT_11 = format_E02_EJES_TXT_11.readFeatures(json_E02_EJES_TXT_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_E02_EJES_TXT_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_E02_EJES_TXT_11.addFeatures(features_E02_EJES_TXT_11);
var lyr_E02_EJES_TXT_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_E02_EJES_TXT_11, 
                style: style_E02_EJES_TXT_11,
                popuplayertitle: 'E02_EJES_TXT',
                interactive: true,
                title: '<img src="styles/legend/E02_EJES_TXT_11.png" /> E02_EJES_TXT'
            });
var format_E02_TRABES_12 = new ol.format.GeoJSON();
var features_E02_TRABES_12 = format_E02_TRABES_12.readFeatures(json_E02_TRABES_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_E02_TRABES_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_E02_TRABES_12.addFeatures(features_E02_TRABES_12);
var lyr_E02_TRABES_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_E02_TRABES_12, 
                style: style_E02_TRABES_12,
                popuplayertitle: 'E02_TRABES',
                interactive: true,
    title: 'E02_TRABES<br />\
    <img src="styles/legend/E02_TRABES_12_0.png" /> EXCAVACIÓN<br />\
    <img src="styles/legend/E02_TRABES_12_1.png" /> MEJORAMIENTO<br />\
    <img src="styles/legend/E02_TRABES_12_2.png" /> COLOCACIÓN DE PLANTILLA<br />\
    <img src="styles/legend/E02_TRABES_12_3.png" /> ARMADO DE ACERO<br />\
    <img src="styles/legend/E02_TRABES_12_4.png" /> COLOCACIÓN DE CIMBRA<br />\
    <img src="styles/legend/E02_TRABES_12_5.png" /> COLOCACIÓN DE CONCRETO<br />\
    <img src="styles/legend/E02_TRABES_12_6.png" /> COLOCACIÓN DE ANCLAS<br />\
    <img src="styles/legend/E02_TRABES_12_7.png" /> PENDIENTE<br />\
    <img src="styles/legend/E02_TRABES_12_8.png" /> TERMINADA<br />' });
var format_E02_ZAPATAS_13 = new ol.format.GeoJSON();
var features_E02_ZAPATAS_13 = format_E02_ZAPATAS_13.readFeatures(json_E02_ZAPATAS_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_E02_ZAPATAS_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_E02_ZAPATAS_13.addFeatures(features_E02_ZAPATAS_13);
var lyr_E02_ZAPATAS_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_E02_ZAPATAS_13, 
                style: style_E02_ZAPATAS_13,
                popuplayertitle: 'E02_ZAPATAS',
                interactive: true,
    title: 'E02_ZAPATAS<br />\
    <img src="styles/legend/E02_ZAPATAS_13_0.png" /> EXCAVACIÓN<br />\
    <img src="styles/legend/E02_ZAPATAS_13_1.png" /> MEJORAMIENTO<br />\
    <img src="styles/legend/E02_ZAPATAS_13_2.png" /> COLOCACIÓN DE PLANTILLA<br />\
    <img src="styles/legend/E02_ZAPATAS_13_3.png" /> ARMADO DE ACERO<br />\
    <img src="styles/legend/E02_ZAPATAS_13_4.png" /> COLOCACIÓN DE CIMBRA<br />\
    <img src="styles/legend/E02_ZAPATAS_13_5.png" /> COLOCACIÓN DE CONCRETO<br />\
    <img src="styles/legend/E02_ZAPATAS_13_6.png" /> COLOCACIÓN DE ANCLAS<br />\
    <img src="styles/legend/E02_ZAPATAS_13_7.png" /> PENDIENTE<br />\
    <img src="styles/legend/E02_ZAPATAS_13_8.png" /> TERMINADA<br />' });
var format_E02_CUBIERTAS_14 = new ol.format.GeoJSON();
var features_E02_CUBIERTAS_14 = format_E02_CUBIERTAS_14.readFeatures(json_E02_CUBIERTAS_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_E02_CUBIERTAS_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_E02_CUBIERTAS_14.addFeatures(features_E02_CUBIERTAS_14);
var lyr_E02_CUBIERTAS_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_E02_CUBIERTAS_14, 
                style: style_E02_CUBIERTAS_14,
                popuplayertitle: 'E02_CUBIERTAS',
                interactive: true,
                title: '<img src="styles/legend/E02_CUBIERTAS_14.png" /> E02_CUBIERTAS'
            });
var format_E02_VIAS_V1_15 = new ol.format.GeoJSON();
var features_E02_VIAS_V1_15 = format_E02_VIAS_V1_15.readFeatures(json_E02_VIAS_V1_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_E02_VIAS_V1_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_E02_VIAS_V1_15.addFeatures(features_E02_VIAS_V1_15);
var lyr_E02_VIAS_V1_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_E02_VIAS_V1_15, 
                style: style_E02_VIAS_V1_15,
                popuplayertitle: 'E02_VIAS_V1',
                interactive: true,
    title: 'E02_VIAS_V1<br />\
    <img src="styles/legend/E02_VIAS_V1_15_0.png" /> L53<br />\
    <img src="styles/legend/E02_VIAS_V1_15_1.png" /> PRY-Proyecto<br />\
    <img src="styles/legend/E02_VIAS_V1_15_2.png" /> 0 JC Apaseo entrevía 09<br />\
    <img src="styles/legend/E02_VIAS_V1_15_3.png" /> 0.AG.VIAS DE PASAJEROS<br />\
    <img src="styles/legend/E02_VIAS_V1_15_4.png" /> <br />' });
var format_RIELES_16 = new ol.format.GeoJSON();
var features_RIELES_16 = format_RIELES_16.readFeatures(json_RIELES_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RIELES_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RIELES_16.addFeatures(features_RIELES_16);
var lyr_RIELES_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RIELES_16, 
                style: style_RIELES_16,
                popuplayertitle: 'RIELES',
                interactive: true,
                title: '<img src="styles/legend/RIELES_16.png" /> RIELES'
            });
var format_MUNICIPIOS_PROYECTO_17 = new ol.format.GeoJSON();
var features_MUNICIPIOS_PROYECTO_17 = format_MUNICIPIOS_PROYECTO_17.readFeatures(json_MUNICIPIOS_PROYECTO_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MUNICIPIOS_PROYECTO_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MUNICIPIOS_PROYECTO_17.addFeatures(features_MUNICIPIOS_PROYECTO_17);
var lyr_MUNICIPIOS_PROYECTO_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MUNICIPIOS_PROYECTO_17, 
                style: style_MUNICIPIOS_PROYECTO_17,
                popuplayertitle: 'MUNICIPIOS_PROYECTO',
                interactive: true,
                title: '<img src="styles/legend/MUNICIPIOS_PROYECTO_17.png" /> MUNICIPIOS_PROYECTO'
            });
var format_ENTIDADES_QRO_GTO_18 = new ol.format.GeoJSON();
var features_ENTIDADES_QRO_GTO_18 = format_ENTIDADES_QRO_GTO_18.readFeatures(json_ENTIDADES_QRO_GTO_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ENTIDADES_QRO_GTO_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ENTIDADES_QRO_GTO_18.addFeatures(features_ENTIDADES_QRO_GTO_18);
var lyr_ENTIDADES_QRO_GTO_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ENTIDADES_QRO_GTO_18, 
                style: style_ENTIDADES_QRO_GTO_18,
                popuplayertitle: 'ENTIDADES_QRO_GTO',
                interactive: true,
                title: '<img src="styles/legend/ENTIDADES_QRO_GTO_18.png" /> ENTIDADES_QRO_GTO'
            });
var format_EJE_V1_19 = new ol.format.GeoJSON();
var features_EJE_V1_19 = format_EJE_V1_19.readFeatures(json_EJE_V1_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EJE_V1_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EJE_V1_19.addFeatures(features_EJE_V1_19);
var lyr_EJE_V1_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EJE_V1_19, 
                style: style_EJE_V1_19,
                popuplayertitle: 'EJE_V1',
                interactive: true,
                title: '<img src="styles/legend/EJE_V1_19.png" /> EJE_V1'
            });
var format_CADENAMIENTOS_20 = new ol.format.GeoJSON();
var features_CADENAMIENTOS_20 = format_CADENAMIENTOS_20.readFeatures(json_CADENAMIENTOS_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CADENAMIENTOS_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CADENAMIENTOS_20.addFeatures(features_CADENAMIENTOS_20);
var lyr_CADENAMIENTOS_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CADENAMIENTOS_20, 
                style: style_CADENAMIENTOS_20,
                popuplayertitle: 'CADENAMIENTOS',
                interactive: true,
                title: '<img src="styles/legend/CADENAMIENTOS_20.png" /> CADENAMIENTOS'
            });
var format_ESTACIONES_V1_21 = new ol.format.GeoJSON();
var features_ESTACIONES_V1_21 = format_ESTACIONES_V1_21.readFeatures(json_ESTACIONES_V1_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ESTACIONES_V1_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESTACIONES_V1_21.addFeatures(features_ESTACIONES_V1_21);
var lyr_ESTACIONES_V1_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ESTACIONES_V1_21, 
                style: style_ESTACIONES_V1_21,
                popuplayertitle: 'ESTACIONES_V1',
                interactive: true,
                title: '<img src="styles/legend/ESTACIONES_V1_21.png" /> ESTACIONES_V1'
            });
var format_PK_V2_22 = new ol.format.GeoJSON();
var features_PK_V2_22 = format_PK_V2_22.readFeatures(json_PK_V2_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PK_V2_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PK_V2_22.addFeatures(features_PK_V2_22);
var lyr_PK_V2_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PK_V2_22, 
                style: style_PK_V2_22,
                popuplayertitle: 'PK_V2',
                interactive: true,
                title: '<img src="styles/legend/PK_V2_22.png" /> PK_V2'
            });
var format_LIMITES_TRAMOS_23 = new ol.format.GeoJSON();
var features_LIMITES_TRAMOS_23 = format_LIMITES_TRAMOS_23.readFeatures(json_LIMITES_TRAMOS_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIMITES_TRAMOS_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LIMITES_TRAMOS_23.addFeatures(features_LIMITES_TRAMOS_23);
var lyr_LIMITES_TRAMOS_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LIMITES_TRAMOS_23, 
                style: style_LIMITES_TRAMOS_23,
                popuplayertitle: 'LIMITES_TRAMOS',
                interactive: true,
                title: '<img src="styles/legend/LIMITES_TRAMOS_23.png" /> LIMITES_TRAMOS'
            });
var group_GENERAL = new ol.layer.Group({
                                layers: [lyr_MUNICIPIOS_PROYECTO_17,lyr_ENTIDADES_QRO_GTO_18,lyr_EJE_V1_19,lyr_CADENAMIENTOS_20,lyr_ESTACIONES_V1_21,lyr_PK_V2_22,lyr_LIMITES_TRAMOS_23,],
                                fold: 'close',
                                title: 'GENERAL'});
var group_E02_APASEO = new ol.layer.Group({
                                layers: [lyr_E02_EJES_LINE_10,lyr_E02_EJES_TXT_11,lyr_E02_TRABES_12,lyr_E02_ZAPATAS_13,lyr_E02_CUBIERTAS_14,lyr_E02_VIAS_V1_15,lyr_RIELES_16,],
                                fold: 'close',
                                title: 'E02_APASEO'});
var group_E03_CELAYA = new ol.layer.Group({
                                layers: [lyr_E03_EJES_L_6,lyr_E03_EJES_7,lyr_E03_ZAPATAS_8,lyr_E03_TRABES_9,],
                                fold: 'close',
                                title: 'E03_CELAYA'});
var group_AFECTACIONES = new ol.layer.Group({
                                layers: [lyr_LIMITES_DDV_V1_5,],
                                fold: 'close',
                                title: 'AFECTACIONES'});
var group_AMBIENTAL = new ol.layer.Group({
                                layers: [lyr_MIA_IRAPUATO_4,],
                                fold: 'close',
                                title: 'AMBIENTAL'});
var group_GEOTECNIA = new ol.layer.Group({
                                layers: [lyr_FALLA_CELAYA_3,],
                                fold: 'close',
                                title: 'GEOTECNIA'});
var group_OBRA_ELECTROMECANICA = new ol.layer.Group({
                                layers: [lyr_CASETAS_V01_2,],
                                fold: 'close',
                                title: 'OBRA_ELECTROMECANICA'});
var group_ORTOFOTOS = new ol.layer.Group({
                                layers: [lyr_ORTOFOTO_APASEO_1,],
                                fold: 'close',
                                title: 'ORTOFOTOS'});
var group_BASEMAP = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite_0,],
                                fold: 'close',
                                title: 'BASEMAP'});

lyr_GoogleSatellite_0.setVisible(true);lyr_ORTOFOTO_APASEO_1.setVisible(true);lyr_CASETAS_V01_2.setVisible(true);lyr_FALLA_CELAYA_3.setVisible(true);lyr_MIA_IRAPUATO_4.setVisible(true);lyr_LIMITES_DDV_V1_5.setVisible(true);lyr_E03_EJES_L_6.setVisible(true);lyr_E03_EJES_7.setVisible(true);lyr_E03_ZAPATAS_8.setVisible(true);lyr_E03_TRABES_9.setVisible(true);lyr_E02_EJES_LINE_10.setVisible(true);lyr_E02_EJES_TXT_11.setVisible(true);lyr_E02_TRABES_12.setVisible(true);lyr_E02_ZAPATAS_13.setVisible(true);lyr_E02_CUBIERTAS_14.setVisible(true);lyr_E02_VIAS_V1_15.setVisible(true);lyr_RIELES_16.setVisible(true);lyr_MUNICIPIOS_PROYECTO_17.setVisible(true);lyr_ENTIDADES_QRO_GTO_18.setVisible(true);lyr_EJE_V1_19.setVisible(true);lyr_CADENAMIENTOS_20.setVisible(true);lyr_ESTACIONES_V1_21.setVisible(true);lyr_PK_V2_22.setVisible(true);lyr_LIMITES_TRAMOS_23.setVisible(true);
var layersList = [group_BASEMAP,group_ORTOFOTOS,group_OBRA_ELECTROMECANICA,group_GEOTECNIA,group_AMBIENTAL,group_AFECTACIONES,group_E03_CELAYA,group_E02_APASEO,group_GENERAL];
lyr_CASETAS_V01_2.set('fieldAliases', {'Name': 'Name', });
lyr_FALLA_CELAYA_3.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_MIA_IRAPUATO_4.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_LIMITES_DDV_V1_5.set('fieldAliases', {'Linetype': 'Linetype', 'TIPO': 'TIPO', });
lyr_E03_EJES_L_6.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_E03_EJES_7.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_E03_ZAPATAS_8.set('fieldAliases', {'Layer': 'Layer', 'ESTATUS': 'ESTATUS', });
lyr_E03_TRABES_9.set('fieldAliases', {'ID_SISGO': 'ID_SISGO', 'ESTATUS': 'ESTATUS', });
lyr_E02_EJES_LINE_10.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_E02_EJES_TXT_11.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_E02_TRABES_12.set('fieldAliases', {'Layer': 'Layer', 'ESTATUS': 'ESTATUS', });
lyr_E02_ZAPATAS_13.set('fieldAliases', {'ESTATUS': 'ESTATUS', 'ID': 'ID', 'SUBTRAMO': 'SUBTRAMO', 'PK': 'PK', 'FECHA_EJEC': 'FECHA_EJEC', 'OBSERV': 'OBSERV', 'EJE_X': 'EJE_X', 'EJE_Y': 'EJE_Y', });
lyr_E02_CUBIERTAS_14.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_E02_VIAS_V1_15.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_RIELES_16.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_MUNICIPIOS_PROYECTO_17.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', });
lyr_ENTIDADES_QRO_GTO_18.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'NOMGEO': 'NOMGEO', });
lyr_EJE_V1_19.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_CADENAMIENTOS_20.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_ESTACIONES_V1_21.set('fieldAliases', {'ESTACION': 'ESTACION', 'PK': 'PK', 'LOCALIDAD': 'LOCALIDAD', 'MUNICIPIO': 'MUNICIPIO', 'ESTADO': 'ESTADO', 'COORD_X': 'COORD_X', 'COORD_Y': 'COORD_Y', });
lyr_PK_V2_22.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', 'ANGULO_01': 'ANGULO_01', });
lyr_LIMITES_TRAMOS_23.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_CASETAS_V01_2.set('fieldImages', {'Name': 'TextEdit', });
lyr_FALLA_CELAYA_3.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_MIA_IRAPUATO_4.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_LIMITES_DDV_V1_5.set('fieldImages', {'Linetype': 'TextEdit', 'TIPO': 'TextEdit', });
lyr_E03_EJES_L_6.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_E03_EJES_7.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_E03_ZAPATAS_8.set('fieldImages', {'Layer': 'TextEdit', 'ESTATUS': 'TextEdit', });
lyr_E03_TRABES_9.set('fieldImages', {'ID_SISGO': '', 'ESTATUS': 'TextEdit', });
lyr_E02_EJES_LINE_10.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_E02_EJES_TXT_11.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_E02_TRABES_12.set('fieldImages', {'Layer': 'TextEdit', 'ESTATUS': 'TextEdit', });
lyr_E02_ZAPATAS_13.set('fieldImages', {'ESTATUS': 'TextEdit', 'ID': '', 'SUBTRAMO': '', 'PK': '', 'FECHA_EJEC': '', 'OBSERV': '', 'EJE_X': '', 'EJE_Y': '', });
lyr_E02_CUBIERTAS_14.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_E02_VIAS_V1_15.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_RIELES_16.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_MUNICIPIOS_PROYECTO_17.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', });
lyr_ENTIDADES_QRO_GTO_18.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'NOMGEO': 'TextEdit', });
lyr_EJE_V1_19.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_CADENAMIENTOS_20.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_ESTACIONES_V1_21.set('fieldImages', {'ESTACION': 'TextEdit', 'PK': 'TextEdit', 'LOCALIDAD': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'ESTADO': 'TextEdit', 'COORD_X': 'TextEdit', 'COORD_Y': 'TextEdit', });
lyr_PK_V2_22.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', 'ANGULO_01': 'TextEdit', });
lyr_LIMITES_TRAMOS_23.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_CASETAS_V01_2.set('fieldLabels', {'Name': 'no label', });
lyr_FALLA_CELAYA_3.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_MIA_IRAPUATO_4.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_LIMITES_DDV_V1_5.set('fieldLabels', {'Linetype': 'no label', 'TIPO': 'no label', });
lyr_E03_EJES_L_6.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_E03_EJES_7.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_E03_ZAPATAS_8.set('fieldLabels', {'Layer': 'inline label - always visible', 'ESTATUS': 'inline label - always visible', });
lyr_E03_TRABES_9.set('fieldLabels', {'ID_SISGO': 'no label', 'ESTATUS': 'inline label - always visible', });
lyr_E02_EJES_LINE_10.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_E02_EJES_TXT_11.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_E02_TRABES_12.set('fieldLabels', {'Layer': 'inline label - always visible', 'ESTATUS': 'inline label - always visible', });
lyr_E02_ZAPATAS_13.set('fieldLabels', {'ESTATUS': 'inline label - always visible', 'ID': 'inline label - always visible', 'SUBTRAMO': 'inline label - always visible', 'PK': 'inline label - always visible', 'FECHA_EJEC': 'inline label - always visible', 'OBSERV': 'no label', 'EJE_X': 'inline label - always visible', 'EJE_Y': 'inline label - always visible', });
lyr_E02_CUBIERTAS_14.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_E02_VIAS_V1_15.set('fieldLabels', {'Layer': 'inline label - always visible', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_RIELES_16.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_MUNICIPIOS_PROYECTO_17.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', });
lyr_ENTIDADES_QRO_GTO_18.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'NOMGEO': 'no label', });
lyr_EJE_V1_19.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_CADENAMIENTOS_20.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_ESTACIONES_V1_21.set('fieldLabels', {'ESTACION': 'inline label - always visible', 'PK': 'no label', 'LOCALIDAD': 'no label', 'MUNICIPIO': 'no label', 'ESTADO': 'no label', 'COORD_X': 'no label', 'COORD_Y': 'no label', });
lyr_PK_V2_22.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'header label - visible with data', 'ANGULO_01': 'no label', });
lyr_LIMITES_TRAMOS_23.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_LIMITES_TRAMOS_23.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});