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
var format_SONDEOS_V03_3_3 = new ol.format.GeoJSON();
var features_SONDEOS_V03_3_3 = format_SONDEOS_V03_3_3.readFeatures(json_SONDEOS_V03_3_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SONDEOS_V03_3_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SONDEOS_V03_3_3.addFeatures(features_SONDEOS_V03_3_3);
var lyr_SONDEOS_V03_3_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SONDEOS_V03_3_3, 
                style: style_SONDEOS_V03_3_3,
                popuplayertitle: 'SONDEOS_V03_3',
                interactive: true,
    title: 'SONDEOS_V03_3<br />\
    <img src="styles/legend/SONDEOS_V03_3_3_0.png" /> TERMINADO<br />\
    <img src="styles/legend/SONDEOS_V03_3_3_1.png" /> PENDIENTE<br />' });
var format_FALLA_CELAYA_4 = new ol.format.GeoJSON();
var features_FALLA_CELAYA_4 = format_FALLA_CELAYA_4.readFeatures(json_FALLA_CELAYA_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FALLA_CELAYA_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FALLA_CELAYA_4.addFeatures(features_FALLA_CELAYA_4);
var lyr_FALLA_CELAYA_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FALLA_CELAYA_4, 
                style: style_FALLA_CELAYA_4,
                popuplayertitle: 'FALLA_CELAYA',
                interactive: true,
                title: '<img src="styles/legend/FALLA_CELAYA_4.png" /> FALLA_CELAYA'
            });
var format_MIA_IRAPUATO_5 = new ol.format.GeoJSON();
var features_MIA_IRAPUATO_5 = format_MIA_IRAPUATO_5.readFeatures(json_MIA_IRAPUATO_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MIA_IRAPUATO_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MIA_IRAPUATO_5.addFeatures(features_MIA_IRAPUATO_5);
var lyr_MIA_IRAPUATO_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MIA_IRAPUATO_5, 
                style: style_MIA_IRAPUATO_5,
                popuplayertitle: 'MIA_IRAPUATO',
                interactive: true,
                title: '<img src="styles/legend/MIA_IRAPUATO_5.png" /> MIA_IRAPUATO'
            });
var format_DDV_002_6 = new ol.format.GeoJSON();
var features_DDV_002_6 = format_DDV_002_6.readFeatures(json_DDV_002_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DDV_002_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DDV_002_6.addFeatures(features_DDV_002_6);
var lyr_DDV_002_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DDV_002_6, 
                style: style_DDV_002_6,
                popuplayertitle: 'DDV_002',
                interactive: true,
    title: 'DDV_002<br />\
    <img src="styles/legend/DDV_002_6_0.png" /> EN PROCESO<br />\
    <img src="styles/legend/DDV_002_6_1.png" /> LIBERADO<br />\
    <img src="styles/legend/DDV_002_6_2.png" /> PENDIENTE<br />\
    <img src="styles/legend/DDV_002_6_3.png" /> POR DEFINIR<br />' });
var format_PRED_03_7 = new ol.format.GeoJSON();
var features_PRED_03_7 = format_PRED_03_7.readFeatures(json_PRED_03_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PRED_03_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PRED_03_7.addFeatures(features_PRED_03_7);
var lyr_PRED_03_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PRED_03_7, 
                style: style_PRED_03_7,
                popuplayertitle: 'PRED_03',
                interactive: true,
                title: '<img src="styles/legend/PRED_03_7.png" /> PRED_03'
            });
var format_LIMITES_DDV_V1_8 = new ol.format.GeoJSON();
var features_LIMITES_DDV_V1_8 = format_LIMITES_DDV_V1_8.readFeatures(json_LIMITES_DDV_V1_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIMITES_DDV_V1_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LIMITES_DDV_V1_8.addFeatures(features_LIMITES_DDV_V1_8);
var lyr_LIMITES_DDV_V1_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LIMITES_DDV_V1_8, 
                style: style_LIMITES_DDV_V1_8,
                popuplayertitle: 'LIMITES_DDV_V1',
                interactive: true,
    title: 'LIMITES_DDV_V1<br />\
    <img src="styles/legend/LIMITES_DDV_V1_8_0.png" /> Area afectacion<br />\
    <img src="styles/legend/LIMITES_DDV_V1_8_1.png" /> DDV ACTUAL<br />\
    <img src="styles/legend/LIMITES_DDV_V1_8_2.png" /> V-TOPO<br />' });
var format_E05_VIAS_9 = new ol.format.GeoJSON();
var features_E05_VIAS_9 = format_E05_VIAS_9.readFeatures(json_E05_VIAS_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_E05_VIAS_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_E05_VIAS_9.addFeatures(features_E05_VIAS_9);
var lyr_E05_VIAS_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_E05_VIAS_9, 
                style: style_E05_VIAS_9,
                popuplayertitle: 'E05_VIAS',
                interactive: true,
                title: '<img src="styles/legend/E05_VIAS_9.png" /> E05_VIAS'
            });
var format_E05_ARQUITECTURA_10 = new ol.format.GeoJSON();
var features_E05_ARQUITECTURA_10 = format_E05_ARQUITECTURA_10.readFeatures(json_E05_ARQUITECTURA_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_E05_ARQUITECTURA_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_E05_ARQUITECTURA_10.addFeatures(features_E05_ARQUITECTURA_10);
var lyr_E05_ARQUITECTURA_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_E05_ARQUITECTURA_10, 
                style: style_E05_ARQUITECTURA_10,
                popuplayertitle: 'E05_ARQUITECTURA',
                interactive: true,
                title: '<img src="styles/legend/E05_ARQUITECTURA_10.png" /> E05_ARQUITECTURA'
            });
var format_E03_EJES_L_11 = new ol.format.GeoJSON();
var features_E03_EJES_L_11 = format_E03_EJES_L_11.readFeatures(json_E03_EJES_L_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_E03_EJES_L_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_E03_EJES_L_11.addFeatures(features_E03_EJES_L_11);
var lyr_E03_EJES_L_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_E03_EJES_L_11, 
                style: style_E03_EJES_L_11,
                popuplayertitle: 'E03_EJES_L',
                interactive: true,
                title: '<img src="styles/legend/E03_EJES_L_11.png" /> E03_EJES_L'
            });
var format_E03_EJES_12 = new ol.format.GeoJSON();
var features_E03_EJES_12 = format_E03_EJES_12.readFeatures(json_E03_EJES_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_E03_EJES_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_E03_EJES_12.addFeatures(features_E03_EJES_12);
var lyr_E03_EJES_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_E03_EJES_12, 
                style: style_E03_EJES_12,
                popuplayertitle: 'E03_EJES',
                interactive: true,
                title: '<img src="styles/legend/E03_EJES_12.png" /> E03_EJES'
            });
var format_E03_ZAPATAS_13 = new ol.format.GeoJSON();
var features_E03_ZAPATAS_13 = format_E03_ZAPATAS_13.readFeatures(json_E03_ZAPATAS_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_E03_ZAPATAS_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_E03_ZAPATAS_13.addFeatures(features_E03_ZAPATAS_13);
var lyr_E03_ZAPATAS_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_E03_ZAPATAS_13, 
                style: style_E03_ZAPATAS_13,
                popuplayertitle: 'E03_ZAPATAS',
                interactive: true,
    title: 'E03_ZAPATAS<br />\
    <img src="styles/legend/E03_ZAPATAS_13_0.png" /> EXCAVACIÓN<br />\
    <img src="styles/legend/E03_ZAPATAS_13_1.png" /> MEJORAMIENTO<br />\
    <img src="styles/legend/E03_ZAPATAS_13_2.png" /> COLOCACIÓN DE PLANTILLA<br />\
    <img src="styles/legend/E03_ZAPATAS_13_3.png" /> ARMADO DE ACERO<br />\
    <img src="styles/legend/E03_ZAPATAS_13_4.png" /> COLOCACIÓN DE CIMBRA<br />\
    <img src="styles/legend/E03_ZAPATAS_13_5.png" /> COLOCACIÓN DE CONCRETO<br />\
    <img src="styles/legend/E03_ZAPATAS_13_6.png" /> COLOCACIÓN DE ANCLAS<br />\
    <img src="styles/legend/E03_ZAPATAS_13_7.png" /> PENDIENTE<br />\
    <img src="styles/legend/E03_ZAPATAS_13_8.png" /> TERMINADA<br />' });
var format_E03_TRABES_14 = new ol.format.GeoJSON();
var features_E03_TRABES_14 = format_E03_TRABES_14.readFeatures(json_E03_TRABES_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_E03_TRABES_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_E03_TRABES_14.addFeatures(features_E03_TRABES_14);
var lyr_E03_TRABES_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_E03_TRABES_14, 
                style: style_E03_TRABES_14,
                popuplayertitle: 'E03_TRABES',
                interactive: true,
    title: 'E03_TRABES<br />\
    <img src="styles/legend/E03_TRABES_14_0.png" /> EXCAVACIÓN<br />\
    <img src="styles/legend/E03_TRABES_14_1.png" /> MEJORAMIENTO<br />\
    <img src="styles/legend/E03_TRABES_14_2.png" /> COLOCACIÓN DE PLANTILLA<br />\
    <img src="styles/legend/E03_TRABES_14_3.png" /> ARMADO DE ACERO<br />\
    <img src="styles/legend/E03_TRABES_14_4.png" /> COLOCACIÓN DE CIMBRA<br />\
    <img src="styles/legend/E03_TRABES_14_5.png" /> COLOCACIÓN DE CONCRETO<br />\
    <img src="styles/legend/E03_TRABES_14_6.png" /> COLOCACIÓN DE ANCLAS<br />\
    <img src="styles/legend/E03_TRABES_14_7.png" /> PENDIENTE<br />\
    <img src="styles/legend/E03_TRABES_14_8.png" /> TERMINADA<br />' });
var format_E03_DADOS_15 = new ol.format.GeoJSON();
var features_E03_DADOS_15 = format_E03_DADOS_15.readFeatures(json_E03_DADOS_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_E03_DADOS_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_E03_DADOS_15.addFeatures(features_E03_DADOS_15);
var lyr_E03_DADOS_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_E03_DADOS_15, 
                style: style_E03_DADOS_15,
                popuplayertitle: 'E03_DADOS',
                interactive: true,
    title: 'E03_DADOS<br />\
    <img src="styles/legend/E03_DADOS_15_0.png" /> EXCAVACIÓN<br />\
    <img src="styles/legend/E03_DADOS_15_1.png" /> MEJORAMIENTO<br />\
    <img src="styles/legend/E03_DADOS_15_2.png" /> COLOCACIÓN DE PLANTILLA<br />\
    <img src="styles/legend/E03_DADOS_15_3.png" /> ARMADO DE ACERO<br />\
    <img src="styles/legend/E03_DADOS_15_4.png" /> COLOCACIÓN DE CIMBRA<br />\
    <img src="styles/legend/E03_DADOS_15_5.png" /> COLOCACIÓN DE CONCRETO<br />\
    <img src="styles/legend/E03_DADOS_15_6.png" /> COLOCACIÓN DE ANCLAS<br />\
    <img src="styles/legend/E03_DADOS_15_7.png" /> PENDIENTE<br />\
    <img src="styles/legend/E03_DADOS_15_8.png" /> TERMINADA<br />' });
var format_LINEAS_CT_CELAYAentities_16 = new ol.format.GeoJSON();
var features_LINEAS_CT_CELAYAentities_16 = format_LINEAS_CT_CELAYAentities_16.readFeatures(json_LINEAS_CT_CELAYAentities_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LINEAS_CT_CELAYAentities_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LINEAS_CT_CELAYAentities_16.addFeatures(features_LINEAS_CT_CELAYAentities_16);
var lyr_LINEAS_CT_CELAYAentities_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LINEAS_CT_CELAYAentities_16, 
                style: style_LINEAS_CT_CELAYAentities_16,
                popuplayertitle: 'LINEAS_CT_CELAYA — entities',
                interactive: true,
                title: 'LINEAS_CT_CELAYA — entities'
            });
var format_CT_E03_17 = new ol.format.GeoJSON();
var features_CT_E03_17 = format_CT_E03_17.readFeatures(json_CT_E03_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CT_E03_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CT_E03_17.addFeatures(features_CT_E03_17);
var lyr_CT_E03_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CT_E03_17, 
                style: style_CT_E03_17,
                popuplayertitle: 'CT_E03',
                interactive: true,
                title: '<img src="styles/legend/CT_E03_17.png" /> CT_E03'
            });
var format_CT_E03_ZAPATAS_18 = new ol.format.GeoJSON();
var features_CT_E03_ZAPATAS_18 = format_CT_E03_ZAPATAS_18.readFeatures(json_CT_E03_ZAPATAS_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CT_E03_ZAPATAS_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CT_E03_ZAPATAS_18.addFeatures(features_CT_E03_ZAPATAS_18);
var lyr_CT_E03_ZAPATAS_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CT_E03_ZAPATAS_18, 
                style: style_CT_E03_ZAPATAS_18,
                popuplayertitle: 'CT_E03_ZAPATAS',
                interactive: true,
    title: 'CT_E03_ZAPATAS<br />\
    <img src="styles/legend/CT_E03_ZAPATAS_18_0.png" /> EXCAVACIÓN<br />\
    <img src="styles/legend/CT_E03_ZAPATAS_18_1.png" /> MEJORAMIENTO<br />\
    <img src="styles/legend/CT_E03_ZAPATAS_18_2.png" /> COLOCACIÓN DE PLANTILLA<br />\
    <img src="styles/legend/CT_E03_ZAPATAS_18_3.png" /> ARMADO DE ACERO<br />\
    <img src="styles/legend/CT_E03_ZAPATAS_18_4.png" /> COLOCACIÓN DE CIMBRA<br />\
    <img src="styles/legend/CT_E03_ZAPATAS_18_5.png" /> COLOCACIÓN DE CONCRETO<br />\
    <img src="styles/legend/CT_E03_ZAPATAS_18_6.png" /> COLOCACIÓN DE ANCLAS<br />\
    <img src="styles/legend/CT_E03_ZAPATAS_18_7.png" /> PENDIENTE<br />\
    <img src="styles/legend/CT_E03_ZAPATAS_18_8.png" /> TERMINADA<br />' });
var format_CT_E03_DADOS_19 = new ol.format.GeoJSON();
var features_CT_E03_DADOS_19 = format_CT_E03_DADOS_19.readFeatures(json_CT_E03_DADOS_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CT_E03_DADOS_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CT_E03_DADOS_19.addFeatures(features_CT_E03_DADOS_19);
var lyr_CT_E03_DADOS_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CT_E03_DADOS_19, 
                style: style_CT_E03_DADOS_19,
                popuplayertitle: 'CT_E03_DADOS',
                interactive: true,
    title: 'CT_E03_DADOS<br />\
    <img src="styles/legend/CT_E03_DADOS_19_0.png" /> EXCAVACIÓN<br />\
    <img src="styles/legend/CT_E03_DADOS_19_1.png" /> MEJORAMIENTO<br />\
    <img src="styles/legend/CT_E03_DADOS_19_2.png" /> COLOCACIÓN DE PLANTILLA<br />\
    <img src="styles/legend/CT_E03_DADOS_19_3.png" /> ARMADO DE ACERO<br />\
    <img src="styles/legend/CT_E03_DADOS_19_4.png" /> COLOCACIÓN DE CIMBRA<br />\
    <img src="styles/legend/CT_E03_DADOS_19_5.png" /> COLOCACIÓN DE CONCRETO<br />\
    <img src="styles/legend/CT_E03_DADOS_19_6.png" /> COLOCACIÓN DE ANCLAS<br />\
    <img src="styles/legend/CT_E03_DADOS_19_7.png" /> PENDIENTE<br />\
    <img src="styles/legend/CT_E03_DADOS_19_8.png" /> TERMINADA<br />' });
var format_E02_CUBIERTAS_20 = new ol.format.GeoJSON();
var features_E02_CUBIERTAS_20 = format_E02_CUBIERTAS_20.readFeatures(json_E02_CUBIERTAS_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_E02_CUBIERTAS_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_E02_CUBIERTAS_20.addFeatures(features_E02_CUBIERTAS_20);
var lyr_E02_CUBIERTAS_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_E02_CUBIERTAS_20, 
                style: style_E02_CUBIERTAS_20,
                popuplayertitle: 'E02_CUBIERTAS',
                interactive: true,
                title: '<img src="styles/legend/E02_CUBIERTAS_20.png" /> E02_CUBIERTAS'
            });
var format_E02_VIAS_V1_21 = new ol.format.GeoJSON();
var features_E02_VIAS_V1_21 = format_E02_VIAS_V1_21.readFeatures(json_E02_VIAS_V1_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_E02_VIAS_V1_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_E02_VIAS_V1_21.addFeatures(features_E02_VIAS_V1_21);
var lyr_E02_VIAS_V1_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_E02_VIAS_V1_21, 
                style: style_E02_VIAS_V1_21,
                popuplayertitle: 'E02_VIAS_V1',
                interactive: true,
    title: 'E02_VIAS_V1<br />\
    <img src="styles/legend/E02_VIAS_V1_21_0.png" /> L53<br />\
    <img src="styles/legend/E02_VIAS_V1_21_1.png" /> PRY-Proyecto<br />\
    <img src="styles/legend/E02_VIAS_V1_21_2.png" /> 0 JC Apaseo entrevía 09<br />\
    <img src="styles/legend/E02_VIAS_V1_21_3.png" /> 0.AG.VIAS DE PASAJEROS<br />\
    <img src="styles/legend/E02_VIAS_V1_21_4.png" /> <br />' });
var format_RIELES_22 = new ol.format.GeoJSON();
var features_RIELES_22 = format_RIELES_22.readFeatures(json_RIELES_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RIELES_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RIELES_22.addFeatures(features_RIELES_22);
var lyr_RIELES_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RIELES_22, 
                style: style_RIELES_22,
                popuplayertitle: 'RIELES',
                interactive: true,
                title: '<img src="styles/legend/RIELES_22.png" /> RIELES'
            });
var format_E02_ARQ_01_P_23 = new ol.format.GeoJSON();
var features_E02_ARQ_01_P_23 = format_E02_ARQ_01_P_23.readFeatures(json_E02_ARQ_01_P_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_E02_ARQ_01_P_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_E02_ARQ_01_P_23.addFeatures(features_E02_ARQ_01_P_23);
var lyr_E02_ARQ_01_P_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_E02_ARQ_01_P_23, 
                style: style_E02_ARQ_01_P_23,
                popuplayertitle: 'E02_ARQ_01_P',
                interactive: true,
                title: '<img src="styles/legend/E02_ARQ_01_P_23.png" /> E02_ARQ_01_P'
            });
var format_E02_EJES_S06_24 = new ol.format.GeoJSON();
var features_E02_EJES_S06_24 = format_E02_EJES_S06_24.readFeatures(json_E02_EJES_S06_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_E02_EJES_S06_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_E02_EJES_S06_24.addFeatures(features_E02_EJES_S06_24);
var lyr_E02_EJES_S06_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_E02_EJES_S06_24, 
                style: style_E02_EJES_S06_24,
                popuplayertitle: 'E02_EJES_S06',
                interactive: true,
                title: '<img src="styles/legend/E02_EJES_S06_24.png" /> E02_EJES_S06'
            });
var format_E02_ID_EJES_S06_25 = new ol.format.GeoJSON();
var features_E02_ID_EJES_S06_25 = format_E02_ID_EJES_S06_25.readFeatures(json_E02_ID_EJES_S06_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_E02_ID_EJES_S06_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_E02_ID_EJES_S06_25.addFeatures(features_E02_ID_EJES_S06_25);
var lyr_E02_ID_EJES_S06_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_E02_ID_EJES_S06_25, 
                style: style_E02_ID_EJES_S06_25,
                popuplayertitle: 'E02_ID_EJES_S06',
                interactive: true,
                title: '<img src="styles/legend/E02_ID_EJES_S06_25.png" /> E02_ID_EJES_S06'
            });
var format_E02_ZAPATAS_26 = new ol.format.GeoJSON();
var features_E02_ZAPATAS_26 = format_E02_ZAPATAS_26.readFeatures(json_E02_ZAPATAS_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_E02_ZAPATAS_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_E02_ZAPATAS_26.addFeatures(features_E02_ZAPATAS_26);
var lyr_E02_ZAPATAS_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_E02_ZAPATAS_26, 
                style: style_E02_ZAPATAS_26,
                popuplayertitle: 'E02_ZAPATAS',
                interactive: true,
    title: 'E02_ZAPATAS<br />\
    <img src="styles/legend/E02_ZAPATAS_26_0.png" /> EXCAVACIÓN<br />\
    <img src="styles/legend/E02_ZAPATAS_26_1.png" /> MEJORAMIENTO<br />\
    <img src="styles/legend/E02_ZAPATAS_26_2.png" /> COLOCACIÓN DE PLANTILLA<br />\
    <img src="styles/legend/E02_ZAPATAS_26_3.png" /> ARMADO DE ACERO<br />\
    <img src="styles/legend/E02_ZAPATAS_26_4.png" /> COLOCACIÓN DE CIMBRA<br />\
    <img src="styles/legend/E02_ZAPATAS_26_5.png" /> COLOCACIÓN DE CONCRETO<br />\
    <img src="styles/legend/E02_ZAPATAS_26_6.png" /> COLOCACIÓN DE ANCLAS<br />\
    <img src="styles/legend/E02_ZAPATAS_26_7.png" /> PENDIENTE<br />\
    <img src="styles/legend/E02_ZAPATAS_26_8.png" /> TERMINADA<br />' });
var format_E02_TRABES_27 = new ol.format.GeoJSON();
var features_E02_TRABES_27 = format_E02_TRABES_27.readFeatures(json_E02_TRABES_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_E02_TRABES_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_E02_TRABES_27.addFeatures(features_E02_TRABES_27);
var lyr_E02_TRABES_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_E02_TRABES_27, 
                style: style_E02_TRABES_27,
                popuplayertitle: 'E02_TRABES',
                interactive: true,
    title: 'E02_TRABES<br />\
    <img src="styles/legend/E02_TRABES_27_0.png" /> EXCAVACIÓN<br />\
    <img src="styles/legend/E02_TRABES_27_1.png" /> MEJORAMIENTO<br />\
    <img src="styles/legend/E02_TRABES_27_2.png" /> COLOCACIÓN DE PLANTILLA<br />\
    <img src="styles/legend/E02_TRABES_27_3.png" /> ARMADO DE ACERO<br />\
    <img src="styles/legend/E02_TRABES_27_4.png" /> COLOCACIÓN DE CIMBRA<br />\
    <img src="styles/legend/E02_TRABES_27_5.png" /> COLOCACIÓN DE CONCRETO<br />\
    <img src="styles/legend/E02_TRABES_27_6.png" /> COLOCACIÓN DE ANCLAS<br />\
    <img src="styles/legend/E02_TRABES_27_7.png" /> PENDIENTE<br />\
    <img src="styles/legend/E02_TRABES_27_8.png" /> TERMINADA<br />' });
var format_E02_DADOS_28 = new ol.format.GeoJSON();
var features_E02_DADOS_28 = format_E02_DADOS_28.readFeatures(json_E02_DADOS_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_E02_DADOS_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_E02_DADOS_28.addFeatures(features_E02_DADOS_28);
var lyr_E02_DADOS_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_E02_DADOS_28, 
                style: style_E02_DADOS_28,
                popuplayertitle: 'E02_DADOS',
                interactive: true,
    title: 'E02_DADOS<br />\
    <img src="styles/legend/E02_DADOS_28_0.png" /> EXCAVACIÓN<br />\
    <img src="styles/legend/E02_DADOS_28_1.png" /> MEJORAMIENTO<br />\
    <img src="styles/legend/E02_DADOS_28_2.png" /> COLOCACIÓN DE PLANTILLA<br />\
    <img src="styles/legend/E02_DADOS_28_3.png" /> ARMADO DE ACERO<br />\
    <img src="styles/legend/E02_DADOS_28_4.png" /> COLOCACIÓN DE CIMBRA<br />\
    <img src="styles/legend/E02_DADOS_28_5.png" /> COLOCACIÓN DE CONCRETO<br />\
    <img src="styles/legend/E02_DADOS_28_6.png" /> COLOCACIÓN DE ANCLAS<br />\
    <img src="styles/legend/E02_DADOS_28_7.png" /> PENDIENTE<br />\
    <img src="styles/legend/E02_DADOS_28_8.png" /> TERMINADA<br />' });
var format_CT_E02_TRABES_29 = new ol.format.GeoJSON();
var features_CT_E02_TRABES_29 = format_CT_E02_TRABES_29.readFeatures(json_CT_E02_TRABES_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CT_E02_TRABES_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CT_E02_TRABES_29.addFeatures(features_CT_E02_TRABES_29);
var lyr_CT_E02_TRABES_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CT_E02_TRABES_29, 
                style: style_CT_E02_TRABES_29,
                popuplayertitle: 'CT_E02_TRABES',
                interactive: true,
    title: 'CT_E02_TRABES<br />\
    <img src="styles/legend/CT_E02_TRABES_29_0.png" /> EXCAVACIÓN<br />\
    <img src="styles/legend/CT_E02_TRABES_29_1.png" /> MEJORAMIENTO<br />\
    <img src="styles/legend/CT_E02_TRABES_29_2.png" /> COLOCACIÓN DE PLANTILLA<br />\
    <img src="styles/legend/CT_E02_TRABES_29_3.png" /> ARMADO DE ACERO<br />\
    <img src="styles/legend/CT_E02_TRABES_29_4.png" /> COLOCACIÓN DE CIMBRA<br />\
    <img src="styles/legend/CT_E02_TRABES_29_5.png" /> COLOCACIÓN DE CONCRETO<br />\
    <img src="styles/legend/CT_E02_TRABES_29_6.png" /> COLOCACIÓN DE ANCLAS<br />\
    <img src="styles/legend/CT_E02_TRABES_29_7.png" /> PENDIENTE<br />\
    <img src="styles/legend/CT_E02_TRABES_29_8.png" /> TERMINADA<br />' });
var format_CT_E02_ZAPATAS_30 = new ol.format.GeoJSON();
var features_CT_E02_ZAPATAS_30 = format_CT_E02_ZAPATAS_30.readFeatures(json_CT_E02_ZAPATAS_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CT_E02_ZAPATAS_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CT_E02_ZAPATAS_30.addFeatures(features_CT_E02_ZAPATAS_30);
var lyr_CT_E02_ZAPATAS_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CT_E02_ZAPATAS_30, 
                style: style_CT_E02_ZAPATAS_30,
                popuplayertitle: 'CT_E02_ZAPATAS',
                interactive: true,
    title: 'CT_E02_ZAPATAS<br />\
    <img src="styles/legend/CT_E02_ZAPATAS_30_0.png" /> EXCAVACIÓN<br />\
    <img src="styles/legend/CT_E02_ZAPATAS_30_1.png" /> MEJORAMIENTO<br />\
    <img src="styles/legend/CT_E02_ZAPATAS_30_2.png" /> COLOCACIÓN DE PLANTILLA<br />\
    <img src="styles/legend/CT_E02_ZAPATAS_30_3.png" /> ARMADO DE ACERO<br />\
    <img src="styles/legend/CT_E02_ZAPATAS_30_4.png" /> COLOCACIÓN DE CIMBRA<br />\
    <img src="styles/legend/CT_E02_ZAPATAS_30_5.png" /> COLOCACIÓN DE CONCRETO<br />\
    <img src="styles/legend/CT_E02_ZAPATAS_30_6.png" /> COLOCACIÓN DE ANCLAS<br />\
    <img src="styles/legend/CT_E02_ZAPATAS_30_7.png" /> PENDIENTE<br />\
    <img src="styles/legend/CT_E02_ZAPATAS_30_8.png" /> TERMINADA<br />' });
var format_CT_E02_ZAP_CORR_31 = new ol.format.GeoJSON();
var features_CT_E02_ZAP_CORR_31 = format_CT_E02_ZAP_CORR_31.readFeatures(json_CT_E02_ZAP_CORR_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CT_E02_ZAP_CORR_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CT_E02_ZAP_CORR_31.addFeatures(features_CT_E02_ZAP_CORR_31);
var lyr_CT_E02_ZAP_CORR_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CT_E02_ZAP_CORR_31, 
                style: style_CT_E02_ZAP_CORR_31,
                popuplayertitle: 'CT_E02_ZAP_CORR',
                interactive: true,
    title: 'CT_E02_ZAP_CORR<br />\
    <img src="styles/legend/CT_E02_ZAP_CORR_31_0.png" /> EXCAVACIÓN<br />\
    <img src="styles/legend/CT_E02_ZAP_CORR_31_1.png" /> MEJORAMIENTO<br />\
    <img src="styles/legend/CT_E02_ZAP_CORR_31_2.png" /> COLOCACIÓN DE PLANTILLA<br />\
    <img src="styles/legend/CT_E02_ZAP_CORR_31_3.png" /> ARMADO DE ACERO<br />\
    <img src="styles/legend/CT_E02_ZAP_CORR_31_4.png" /> COLOCACIÓN DE CIMBRA<br />\
    <img src="styles/legend/CT_E02_ZAP_CORR_31_5.png" /> COLOCACIÓN DE CONCRETO<br />\
    <img src="styles/legend/CT_E02_ZAP_CORR_31_6.png" /> COLOCACIÓN DE ANCLAS<br />\
    <img src="styles/legend/CT_E02_ZAP_CORR_31_7.png" /> PENDIENTE<br />\
    <img src="styles/legend/CT_E02_ZAP_CORR_31_8.png" /> TERMINADA<br />' });
var format_CT_E02_DADOS_V2_32 = new ol.format.GeoJSON();
var features_CT_E02_DADOS_V2_32 = format_CT_E02_DADOS_V2_32.readFeatures(json_CT_E02_DADOS_V2_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CT_E02_DADOS_V2_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CT_E02_DADOS_V2_32.addFeatures(features_CT_E02_DADOS_V2_32);
var lyr_CT_E02_DADOS_V2_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CT_E02_DADOS_V2_32, 
                style: style_CT_E02_DADOS_V2_32,
                popuplayertitle: 'CT_E02_DADOS_V2',
                interactive: true,
    title: 'CT_E02_DADOS_V2<br />\
    <img src="styles/legend/CT_E02_DADOS_V2_32_0.png" /> EXCAVACIÓN<br />\
    <img src="styles/legend/CT_E02_DADOS_V2_32_1.png" /> MEJORAMIENTO<br />\
    <img src="styles/legend/CT_E02_DADOS_V2_32_2.png" /> COLOCACIÓN DE PLANTILLA<br />\
    <img src="styles/legend/CT_E02_DADOS_V2_32_3.png" /> ARMADO DE ACERO<br />\
    <img src="styles/legend/CT_E02_DADOS_V2_32_4.png" /> COLOCACIÓN DE CIMBRA<br />\
    <img src="styles/legend/CT_E02_DADOS_V2_32_5.png" /> COLOCACIÓN DE CONCRETO<br />\
    <img src="styles/legend/CT_E02_DADOS_V2_32_6.png" /> COLOCACIÓN DE ANCLAS<br />\
    <img src="styles/legend/CT_E02_DADOS_V2_32_7.png" /> PENDIENTE<br />\
    <img src="styles/legend/CT_E02_DADOS_V2_32_8.png" /> TERMINADA<br />' });
var format_CT_E02_EJES_33 = new ol.format.GeoJSON();
var features_CT_E02_EJES_33 = format_CT_E02_EJES_33.readFeatures(json_CT_E02_EJES_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CT_E02_EJES_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CT_E02_EJES_33.addFeatures(features_CT_E02_EJES_33);
var lyr_CT_E02_EJES_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CT_E02_EJES_33, 
                style: style_CT_E02_EJES_33,
                popuplayertitle: 'CT_E02_EJES',
                interactive: true,
                title: '<img src="styles/legend/CT_E02_EJES_33.png" /> CT_E02_EJES'
            });
var format_CT_E02_34 = new ol.format.GeoJSON();
var features_CT_E02_34 = format_CT_E02_34.readFeatures(json_CT_E02_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CT_E02_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CT_E02_34.addFeatures(features_CT_E02_34);
var lyr_CT_E02_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CT_E02_34, 
                style: style_CT_E02_34,
                popuplayertitle: 'CT_E02',
                interactive: true,
                title: '<img src="styles/legend/CT_E02_34.png" /> CT_E02'
            });
var format_MUNICIPIOS_PROYECTO_35 = new ol.format.GeoJSON();
var features_MUNICIPIOS_PROYECTO_35 = format_MUNICIPIOS_PROYECTO_35.readFeatures(json_MUNICIPIOS_PROYECTO_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MUNICIPIOS_PROYECTO_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MUNICIPIOS_PROYECTO_35.addFeatures(features_MUNICIPIOS_PROYECTO_35);
var lyr_MUNICIPIOS_PROYECTO_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MUNICIPIOS_PROYECTO_35, 
                style: style_MUNICIPIOS_PROYECTO_35,
                popuplayertitle: 'MUNICIPIOS_PROYECTO',
                interactive: true,
                title: '<img src="styles/legend/MUNICIPIOS_PROYECTO_35.png" /> MUNICIPIOS_PROYECTO'
            });
var format_ENTIDADES_QRO_GTO_36 = new ol.format.GeoJSON();
var features_ENTIDADES_QRO_GTO_36 = format_ENTIDADES_QRO_GTO_36.readFeatures(json_ENTIDADES_QRO_GTO_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ENTIDADES_QRO_GTO_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ENTIDADES_QRO_GTO_36.addFeatures(features_ENTIDADES_QRO_GTO_36);
var lyr_ENTIDADES_QRO_GTO_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ENTIDADES_QRO_GTO_36, 
                style: style_ENTIDADES_QRO_GTO_36,
                popuplayertitle: 'ENTIDADES_QRO_GTO',
                interactive: true,
                title: '<img src="styles/legend/ENTIDADES_QRO_GTO_36.png" /> ENTIDADES_QRO_GTO'
            });
var format_EJE_V1_37 = new ol.format.GeoJSON();
var features_EJE_V1_37 = format_EJE_V1_37.readFeatures(json_EJE_V1_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EJE_V1_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EJE_V1_37.addFeatures(features_EJE_V1_37);
var lyr_EJE_V1_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EJE_V1_37, 
                style: style_EJE_V1_37,
                popuplayertitle: 'EJE_V1',
                interactive: true,
                title: '<img src="styles/legend/EJE_V1_37.png" /> EJE_V1'
            });
var format_CADENAMIENTOS_38 = new ol.format.GeoJSON();
var features_CADENAMIENTOS_38 = format_CADENAMIENTOS_38.readFeatures(json_CADENAMIENTOS_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CADENAMIENTOS_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CADENAMIENTOS_38.addFeatures(features_CADENAMIENTOS_38);
var lyr_CADENAMIENTOS_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CADENAMIENTOS_38, 
                style: style_CADENAMIENTOS_38,
                popuplayertitle: 'CADENAMIENTOS',
                interactive: true,
                title: '<img src="styles/legend/CADENAMIENTOS_38.png" /> CADENAMIENTOS'
            });
var format_ESTACIONES_V1_39 = new ol.format.GeoJSON();
var features_ESTACIONES_V1_39 = format_ESTACIONES_V1_39.readFeatures(json_ESTACIONES_V1_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ESTACIONES_V1_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESTACIONES_V1_39.addFeatures(features_ESTACIONES_V1_39);
var lyr_ESTACIONES_V1_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ESTACIONES_V1_39, 
                style: style_ESTACIONES_V1_39,
                popuplayertitle: 'ESTACIONES_V1',
                interactive: true,
                title: '<img src="styles/legend/ESTACIONES_V1_39.png" /> ESTACIONES_V1'
            });
var format_PK_V2_40 = new ol.format.GeoJSON();
var features_PK_V2_40 = format_PK_V2_40.readFeatures(json_PK_V2_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PK_V2_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PK_V2_40.addFeatures(features_PK_V2_40);
var lyr_PK_V2_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PK_V2_40, 
                style: style_PK_V2_40,
                popuplayertitle: 'PK_V2',
                interactive: true,
                title: '<img src="styles/legend/PK_V2_40.png" /> PK_V2'
            });
var format_LIMITES_TRAMOS_41 = new ol.format.GeoJSON();
var features_LIMITES_TRAMOS_41 = format_LIMITES_TRAMOS_41.readFeatures(json_LIMITES_TRAMOS_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIMITES_TRAMOS_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LIMITES_TRAMOS_41.addFeatures(features_LIMITES_TRAMOS_41);
var lyr_LIMITES_TRAMOS_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LIMITES_TRAMOS_41, 
                style: style_LIMITES_TRAMOS_41,
                popuplayertitle: 'LIMITES_TRAMOS',
                interactive: true,
                title: '<img src="styles/legend/LIMITES_TRAMOS_41.png" /> LIMITES_TRAMOS'
            });
var group_GENERAL = new ol.layer.Group({
                                layers: [lyr_MUNICIPIOS_PROYECTO_35,lyr_ENTIDADES_QRO_GTO_36,lyr_EJE_V1_37,lyr_CADENAMIENTOS_38,lyr_ESTACIONES_V1_39,lyr_PK_V2_40,lyr_LIMITES_TRAMOS_41,],
                                fold: 'close',
                                title: 'GENERAL'});
var group_E02_APASEO = new ol.layer.Group({
                                layers: [lyr_E02_CUBIERTAS_20,lyr_E02_VIAS_V1_21,lyr_RIELES_22,lyr_E02_ARQ_01_P_23,lyr_E02_EJES_S06_24,lyr_E02_ID_EJES_S06_25,lyr_E02_ZAPATAS_26,lyr_E02_TRABES_27,lyr_E02_DADOS_28,lyr_CT_E02_TRABES_29,lyr_CT_E02_ZAPATAS_30,lyr_CT_E02_ZAP_CORR_31,lyr_CT_E02_DADOS_V2_32,lyr_CT_E02_EJES_33,lyr_CT_E02_34,],
                                fold: 'close',
                                title: 'E02_APASEO'});
var group_E03_CELAYA = new ol.layer.Group({
                                layers: [lyr_E03_EJES_L_11,lyr_E03_EJES_12,lyr_E03_ZAPATAS_13,lyr_E03_TRABES_14,lyr_E03_DADOS_15,lyr_LINEAS_CT_CELAYAentities_16,lyr_CT_E03_17,lyr_CT_E03_ZAPATAS_18,lyr_CT_E03_DADOS_19,],
                                fold: 'close',
                                title: 'E03_CELAYA'});
var group_E05_SALAMANCA = new ol.layer.Group({
                                layers: [lyr_E05_VIAS_9,lyr_E05_ARQUITECTURA_10,],
                                fold: 'close',
                                title: 'E05_SALAMANCA'});
var group_AFECTACIONES = new ol.layer.Group({
                                layers: [lyr_DDV_002_6,lyr_PRED_03_7,lyr_LIMITES_DDV_V1_8,],
                                fold: 'close',
                                title: 'AFECTACIONES'});
var group_AMBIENTAL = new ol.layer.Group({
                                layers: [lyr_MIA_IRAPUATO_5,],
                                fold: 'close',
                                title: 'AMBIENTAL'});
var group_GEOTECNIA = new ol.layer.Group({
                                layers: [lyr_SONDEOS_V03_3_3,lyr_FALLA_CELAYA_4,],
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

lyr_GoogleSatellite_0.setVisible(true);lyr_ORTOFOTO_APASEO_1.setVisible(true);lyr_CASETAS_V01_2.setVisible(true);lyr_SONDEOS_V03_3_3.setVisible(true);lyr_FALLA_CELAYA_4.setVisible(true);lyr_MIA_IRAPUATO_5.setVisible(true);lyr_DDV_002_6.setVisible(false);lyr_PRED_03_7.setVisible(false);lyr_LIMITES_DDV_V1_8.setVisible(true);lyr_E05_VIAS_9.setVisible(true);lyr_E05_ARQUITECTURA_10.setVisible(true);lyr_E03_EJES_L_11.setVisible(true);lyr_E03_EJES_12.setVisible(true);lyr_E03_ZAPATAS_13.setVisible(true);lyr_E03_TRABES_14.setVisible(true);lyr_E03_DADOS_15.setVisible(true);lyr_LINEAS_CT_CELAYAentities_16.setVisible(true);lyr_CT_E03_17.setVisible(true);lyr_CT_E03_ZAPATAS_18.setVisible(true);lyr_CT_E03_DADOS_19.setVisible(true);lyr_E02_CUBIERTAS_20.setVisible(true);lyr_E02_VIAS_V1_21.setVisible(true);lyr_RIELES_22.setVisible(true);lyr_E02_ARQ_01_P_23.setVisible(true);lyr_E02_EJES_S06_24.setVisible(true);lyr_E02_ID_EJES_S06_25.setVisible(true);lyr_E02_ZAPATAS_26.setVisible(true);lyr_E02_TRABES_27.setVisible(true);lyr_E02_DADOS_28.setVisible(true);lyr_CT_E02_TRABES_29.setVisible(true);lyr_CT_E02_ZAPATAS_30.setVisible(true);lyr_CT_E02_ZAP_CORR_31.setVisible(true);lyr_CT_E02_DADOS_V2_32.setVisible(true);lyr_CT_E02_EJES_33.setVisible(true);lyr_CT_E02_34.setVisible(true);lyr_MUNICIPIOS_PROYECTO_35.setVisible(true);lyr_ENTIDADES_QRO_GTO_36.setVisible(true);lyr_EJE_V1_37.setVisible(true);lyr_CADENAMIENTOS_38.setVisible(true);lyr_ESTACIONES_V1_39.setVisible(true);lyr_PK_V2_40.setVisible(true);lyr_LIMITES_TRAMOS_41.setVisible(true);
var layersList = [group_BASEMAP,group_ORTOFOTOS,group_OBRA_ELECTROMECANICA,group_GEOTECNIA,group_AMBIENTAL,group_AFECTACIONES,group_E05_SALAMANCA,group_E03_CELAYA,group_E02_APASEO,group_GENERAL];
lyr_CASETAS_V01_2.set('fieldAliases', {'Name': 'Name', });
lyr_SONDEOS_V03_3_3.set('fieldAliases', {'UNIDAD PCA': 'UNIDAD PCA', 'TIPO DE SO': 'TIPO DE SO', 'EMPRESA': 'EMPRESA', 'ESTATUS': 'ESTATUS', 'OBSERVACIO': 'OBSERVACIO', 'CODI_LOCAL': 'CODI_LOCAL', 'COORD_X': 'COORD_X', 'COORD_Y': 'COORD_Y', 'UBICACIÓN': 'UBICACIÓN', 'FECHA_INI': 'FECHA_INI', 'FECHA_FIN': 'FECHA_FIN', 'PROFUND': 'PROFUND', 'PK': 'PK', 'ID_SISGO': 'ID_SISGO', 'LINK_EXTER': 'LINK_EXTER', 'LINK_INTER': 'LINK_INTER', 'layer': 'layer', 'path': 'path', });
lyr_FALLA_CELAYA_4.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_MIA_IRAPUATO_5.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_DDV_002_6.set('fieldAliases', {'PROPIETARI': 'PROPIETARI', 'ESTATUS': 'ESTATUS', 'ID_SISGO': 'ID_SISGO', 'ESTACIÓN': 'ESTACIÓN', 'PLANO_DWG': 'PLANO_DWG', 'PLANO_PDF': 'PLANO_PDF', 'CODIGO': 'CODIGO', 'PK_INICIO': 'PK_INICIO', 'PK_FIN': 'PK_FIN', 'SUP_M2': 'SUP_M2', 'SUBTRAMO': 'SUBTRAMO', });
lyr_PRED_03_7.set('fieldAliases', {});
lyr_LIMITES_DDV_V1_8.set('fieldAliases', {'Linetype': 'Linetype', 'TIPO': 'TIPO', });
lyr_E05_VIAS_9.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_E05_ARQUITECTURA_10.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_E03_EJES_L_11.set('fieldAliases', {'EJE': 'EJE', });
lyr_E03_EJES_12.set('fieldAliases', {'EJE': 'EJE', });
lyr_E03_ZAPATAS_13.set('fieldAliases', {'ID': 'ID', 'SUBTRAMO': 'SUBTRAMO', 'PK': 'PK', 'FECHA_EJEC': 'FECHA_EJEC', 'ESTATUS': 'ESTATUS', 'OBSERV': 'OBSERV', 'EJE_X': 'EJE_X', 'EJE_Y': 'EJE_Y', });
lyr_E03_TRABES_14.set('fieldAliases', {'ID_SISGO': 'ID_SISGO', 'SUBTRAMO': 'SUBTRAMO', 'PK': 'PK', 'FECHA_EJEC': 'FECHA_EJEC', 'ESTATUS': 'ESTATUS', 'OBSERV': 'OBSERV', 'EJE_X': 'EJE_X', 'EJE_Y': 'EJE_Y', });
lyr_E03_DADOS_15.set('fieldAliases', {'ID': 'ID', 'SUBTRAMO': 'SUBTRAMO', 'PK': 'PK', 'FECHA_EJEC': 'FECHA_EJEC', 'ESTATUS': 'ESTATUS', 'OBSERV': 'OBSERV', 'EJE_X': 'EJE_X', 'EJE_Y': 'EJE_Y', });
lyr_LINEAS_CT_CELAYAentities_16.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_CT_E03_17.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_CT_E03_ZAPATAS_18.set('fieldAliases', {'Layer': 'Layer', 'ESTATUS': 'ESTATUS', });
lyr_CT_E03_DADOS_19.set('fieldAliases', {'Layer': 'Layer', 'ESTATUS': 'ESTATUS', });
lyr_E02_CUBIERTAS_20.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_E02_VIAS_V1_21.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_RIELES_22.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_E02_ARQ_01_P_23.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_E02_EJES_S06_24.set('fieldAliases', {'EJE': 'EJE', });
lyr_E02_ID_EJES_S06_25.set('fieldAliases', {'EJE': 'EJE', });
lyr_E02_ZAPATAS_26.set('fieldAliases', {'ESTATUS': 'ESTATUS', 'ID': 'ID', 'SUBTRAMO': 'SUBTRAMO', 'PK': 'PK', 'FECHA_EJEC': 'FECHA_EJEC', 'OBSERV': 'OBSERV', 'EJE_X': 'EJE_X', 'EJE_Y': 'EJE_Y', });
lyr_E02_TRABES_27.set('fieldAliases', {'ID': 'ID', 'SUBTRAMO': 'SUBTRAMO', 'PK': 'PK', 'FECHA_EJEC': 'FECHA_EJEC', 'ESTATUS': 'ESTATUS', 'OBSERV': 'OBSERV', 'EJE_X': 'EJE_X', 'EJE_Y': 'EJE_Y', });
lyr_E02_DADOS_28.set('fieldAliases', {'ID': 'ID', 'SUBTRAMO': 'SUBTRAMO', 'PK': 'PK', 'FECHA_EJEC': 'FECHA_EJEC', 'ESTATUS': 'ESTATUS', 'OBSERV': 'OBSERV', 'EJE_X': 'EJE_X', 'EJE_Y': 'EJE_Y', });
lyr_CT_E02_TRABES_29.set('fieldAliases', {'Layer': 'Layer', 'ESTATUS': 'ESTATUS', });
lyr_CT_E02_ZAPATAS_30.set('fieldAliases', {'Layer': 'Layer', 'ESTATUS': 'ESTATUS', });
lyr_CT_E02_ZAP_CORR_31.set('fieldAliases', {'Layer': 'Layer', 'ESTATUS': 'ESTATUS', });
lyr_CT_E02_DADOS_V2_32.set('fieldAliases', {'Layer': 'Layer', 'ESTATUS': 'ESTATUS', });
lyr_CT_E02_EJES_33.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_CT_E02_34.set('fieldAliases', {'Layer': 'Layer', });
lyr_MUNICIPIOS_PROYECTO_35.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', });
lyr_ENTIDADES_QRO_GTO_36.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'NOMGEO': 'NOMGEO', });
lyr_EJE_V1_37.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_CADENAMIENTOS_38.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_ESTACIONES_V1_39.set('fieldAliases', {'ESTACION': 'ESTACION', 'PK': 'PK', 'LOCALIDAD': 'LOCALIDAD', 'MUNICIPIO': 'MUNICIPIO', 'ESTADO': 'ESTADO', 'COORD_X': 'COORD_X', 'COORD_Y': 'COORD_Y', });
lyr_PK_V2_40.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', 'ANGULO_01': 'ANGULO_01', });
lyr_LIMITES_TRAMOS_41.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_CASETAS_V01_2.set('fieldImages', {'Name': 'TextEdit', });
lyr_SONDEOS_V03_3_3.set('fieldImages', {'UNIDAD PCA': 'CheckBox', 'TIPO DE SO': 'TextEdit', 'EMPRESA': 'TextEdit', 'ESTATUS': 'TextEdit', 'OBSERVACIO': 'TextEdit', 'CODI_LOCAL': 'TextEdit', 'COORD_X': 'TextEdit', 'COORD_Y': 'TextEdit', 'UBICACIÓN': 'TextEdit', 'FECHA_INI': 'TextEdit', 'FECHA_FIN': 'TextEdit', 'PROFUND': 'TextEdit', 'PK': 'TextEdit', 'ID_SISGO': 'TextEdit', 'LINK_EXTER': 'TextEdit', 'LINK_INTER': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_FALLA_CELAYA_4.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_MIA_IRAPUATO_5.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_DDV_002_6.set('fieldImages', {'PROPIETARI': 'TextEdit', 'ESTATUS': 'TextEdit', 'ID_SISGO': 'TextEdit', 'ESTACIÓN': 'TextEdit', 'PLANO_DWG': 'TextEdit', 'PLANO_PDF': 'TextEdit', 'CODIGO': 'TextEdit', 'PK_INICIO': 'TextEdit', 'PK_FIN': 'TextEdit', 'SUP_M2': 'TextEdit', 'SUBTRAMO': 'TextEdit', });
lyr_PRED_03_7.set('fieldImages', {});
lyr_LIMITES_DDV_V1_8.set('fieldImages', {'Linetype': 'TextEdit', 'TIPO': 'TextEdit', });
lyr_E05_VIAS_9.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_E05_ARQUITECTURA_10.set('fieldImages', {'Layer': '', 'PaperSpace': '', 'SubClasses': '', 'Linetype': '', 'EntityHand': '', 'Text': '', });
lyr_E03_EJES_L_11.set('fieldImages', {'EJE': '', });
lyr_E03_EJES_12.set('fieldImages', {'EJE': 'TextEdit', });
lyr_E03_ZAPATAS_13.set('fieldImages', {'ID': '', 'SUBTRAMO': '', 'PK': '', 'FECHA_EJEC': '', 'ESTATUS': 'TextEdit', 'OBSERV': '', 'EJE_X': '', 'EJE_Y': '', });
lyr_E03_TRABES_14.set('fieldImages', {'ID_SISGO': '', 'SUBTRAMO': '', 'PK': '', 'FECHA_EJEC': '', 'ESTATUS': 'TextEdit', 'OBSERV': '', 'EJE_X': '', 'EJE_Y': '', });
lyr_E03_DADOS_15.set('fieldImages', {'ID': '', 'SUBTRAMO': '', 'PK': '', 'FECHA_EJEC': '', 'ESTATUS': 'TextEdit', 'OBSERV': '', 'EJE_X': '', 'EJE_Y': '', });
lyr_LINEAS_CT_CELAYAentities_16.set('fieldImages', {'Layer': '', 'PaperSpace': '', 'SubClasses': '', 'Linetype': '', 'EntityHandle': '', 'Text': '', });
lyr_CT_E03_17.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': '', 'SubClasses': '', 'Linetype': '', 'EntityHand': '', 'Text': '', });
lyr_CT_E03_ZAPATAS_18.set('fieldImages', {'Layer': 'TextEdit', 'ESTATUS': 'TextEdit', });
lyr_CT_E03_DADOS_19.set('fieldImages', {'Layer': 'TextEdit', 'ESTATUS': 'TextEdit', });
lyr_E02_CUBIERTAS_20.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_E02_VIAS_V1_21.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_RIELES_22.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_E02_ARQ_01_P_23.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_E02_EJES_S06_24.set('fieldImages', {'EJE': '', });
lyr_E02_ID_EJES_S06_25.set('fieldImages', {'EJE': 'TextEdit', });
lyr_E02_ZAPATAS_26.set('fieldImages', {'ESTATUS': 'TextEdit', 'ID': '', 'SUBTRAMO': '', 'PK': '', 'FECHA_EJEC': '', 'OBSERV': '', 'EJE_X': '', 'EJE_Y': '', });
lyr_E02_TRABES_27.set('fieldImages', {'ID': '', 'SUBTRAMO': '', 'PK': '', 'FECHA_EJEC': '', 'ESTATUS': 'TextEdit', 'OBSERV': '', 'EJE_X': '', 'EJE_Y': '', });
lyr_E02_DADOS_28.set('fieldImages', {'ID': '', 'SUBTRAMO': '', 'PK': '', 'FECHA_EJEC': '', 'ESTATUS': 'TextEdit', 'OBSERV': '', 'EJE_X': '', 'EJE_Y': '', });
lyr_CT_E02_TRABES_29.set('fieldImages', {'Layer': 'TextEdit', 'ESTATUS': 'TextEdit', });
lyr_CT_E02_ZAPATAS_30.set('fieldImages', {'Layer': 'TextEdit', 'ESTATUS': 'TextEdit', });
lyr_CT_E02_ZAP_CORR_31.set('fieldImages', {'Layer': 'TextEdit', 'ESTATUS': 'TextEdit', });
lyr_CT_E02_DADOS_V2_32.set('fieldImages', {'Layer': 'TextEdit', 'ESTATUS': 'TextEdit', });
lyr_CT_E02_EJES_33.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_CT_E02_34.set('fieldImages', {'Layer': 'TextEdit', });
lyr_MUNICIPIOS_PROYECTO_35.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', });
lyr_ENTIDADES_QRO_GTO_36.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'NOMGEO': 'TextEdit', });
lyr_EJE_V1_37.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_CADENAMIENTOS_38.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_ESTACIONES_V1_39.set('fieldImages', {'ESTACION': 'TextEdit', 'PK': 'TextEdit', 'LOCALIDAD': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'ESTADO': 'TextEdit', 'COORD_X': 'TextEdit', 'COORD_Y': 'TextEdit', });
lyr_PK_V2_40.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', 'ANGULO_01': 'TextEdit', });
lyr_LIMITES_TRAMOS_41.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_CASETAS_V01_2.set('fieldLabels', {'Name': 'no label', });
lyr_SONDEOS_V03_3_3.set('fieldLabels', {'UNIDAD PCA': 'no label', 'TIPO DE SO': 'inline label - always visible', 'EMPRESA': 'inline label - always visible', 'ESTATUS': 'inline label - always visible', 'OBSERVACIO': 'no label', 'CODI_LOCAL': 'inline label - always visible', 'COORD_X': 'inline label - always visible', 'COORD_Y': 'inline label - always visible', 'UBICACIÓN': 'inline label - always visible', 'FECHA_INI': 'no label', 'FECHA_FIN': 'no label', 'PROFUND': 'inline label - always visible', 'PK': 'inline label - always visible', 'ID_SISGO': 'no label', 'LINK_EXTER': 'inline label - always visible', 'LINK_INTER': 'inline label - always visible', 'layer': 'no label', 'path': 'no label', });
lyr_FALLA_CELAYA_4.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_MIA_IRAPUATO_5.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_DDV_002_6.set('fieldLabels', {'PROPIETARI': 'inline label - always visible', 'ESTATUS': 'inline label - always visible', 'ID_SISGO': 'inline label - always visible', 'ESTACIÓN': 'inline label - always visible', 'PLANO_DWG': 'inline label - always visible', 'PLANO_PDF': 'inline label - always visible', 'CODIGO': 'inline label - always visible', 'PK_INICIO': 'inline label - always visible', 'PK_FIN': 'inline label - always visible', 'SUP_M2': 'inline label - always visible', 'SUBTRAMO': 'inline label - always visible', });
lyr_PRED_03_7.set('fieldLabels', {});
lyr_LIMITES_DDV_V1_8.set('fieldLabels', {'Linetype': 'no label', 'TIPO': 'inline label - always visible', });
lyr_E05_VIAS_9.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_E05_ARQUITECTURA_10.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_E03_EJES_L_11.set('fieldLabels', {'EJE': 'no label', });
lyr_E03_EJES_12.set('fieldLabels', {'EJE': 'no label', });
lyr_E03_ZAPATAS_13.set('fieldLabels', {'ID': 'inline label - always visible', 'SUBTRAMO': 'inline label - always visible', 'PK': 'inline label - always visible', 'FECHA_EJEC': 'no label', 'ESTATUS': 'inline label - always visible', 'OBSERV': 'no label', 'EJE_X': 'inline label - always visible', 'EJE_Y': 'inline label - always visible', });
lyr_E03_TRABES_14.set('fieldLabels', {'ID_SISGO': 'no label', 'SUBTRAMO': 'no label', 'PK': 'no label', 'FECHA_EJEC': 'no label', 'ESTATUS': 'inline label - always visible', 'OBSERV': 'no label', 'EJE_X': 'no label', 'EJE_Y': 'no label', });
lyr_E03_DADOS_15.set('fieldLabels', {'ID': 'inline label - always visible', 'SUBTRAMO': 'inline label - always visible', 'PK': 'inline label - always visible', 'FECHA_EJEC': 'inline label - always visible', 'ESTATUS': 'inline label - always visible', 'OBSERV': 'no label', 'EJE_X': 'inline label - always visible', 'EJE_Y': 'inline label - always visible', });
lyr_LINEAS_CT_CELAYAentities_16.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_CT_E03_17.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_CT_E03_ZAPATAS_18.set('fieldLabels', {'Layer': 'inline label - always visible', 'ESTATUS': 'inline label - always visible', });
lyr_CT_E03_DADOS_19.set('fieldLabels', {'Layer': 'inline label - always visible', 'ESTATUS': 'inline label - always visible', });
lyr_E02_CUBIERTAS_20.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_E02_VIAS_V1_21.set('fieldLabels', {'Layer': 'inline label - always visible', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_RIELES_22.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_E02_ARQ_01_P_23.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_E02_EJES_S06_24.set('fieldLabels', {'EJE': 'no label', });
lyr_E02_ID_EJES_S06_25.set('fieldLabels', {'EJE': 'no label', });
lyr_E02_ZAPATAS_26.set('fieldLabels', {'ESTATUS': 'inline label - always visible', 'ID': 'inline label - always visible', 'SUBTRAMO': 'inline label - always visible', 'PK': 'inline label - always visible', 'FECHA_EJEC': 'inline label - always visible', 'OBSERV': 'no label', 'EJE_X': 'inline label - always visible', 'EJE_Y': 'inline label - always visible', });
lyr_E02_TRABES_27.set('fieldLabels', {'ID': 'inline label - always visible', 'SUBTRAMO': 'inline label - always visible', 'PK': 'inline label - always visible', 'FECHA_EJEC': 'inline label - always visible', 'ESTATUS': 'inline label - always visible', 'OBSERV': 'no label', 'EJE_X': 'inline label - always visible', 'EJE_Y': 'inline label - always visible', });
lyr_E02_DADOS_28.set('fieldLabels', {'ID': 'inline label - always visible', 'SUBTRAMO': 'inline label - always visible', 'PK': 'inline label - always visible', 'FECHA_EJEC': 'inline label - always visible', 'ESTATUS': 'inline label - always visible', 'OBSERV': 'no label', 'EJE_X': 'inline label - always visible', 'EJE_Y': 'inline label - always visible', });
lyr_CT_E02_TRABES_29.set('fieldLabels', {'Layer': 'inline label - always visible', 'ESTATUS': 'inline label - always visible', });
lyr_CT_E02_ZAPATAS_30.set('fieldLabels', {'Layer': 'inline label - always visible', 'ESTATUS': 'inline label - always visible', });
lyr_CT_E02_ZAP_CORR_31.set('fieldLabels', {'Layer': 'inline label - always visible', 'ESTATUS': 'inline label - always visible', });
lyr_CT_E02_DADOS_V2_32.set('fieldLabels', {'Layer': 'inline label - always visible', 'ESTATUS': 'inline label - always visible', });
lyr_CT_E02_EJES_33.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_CT_E02_34.set('fieldLabels', {'Layer': 'no label', });
lyr_MUNICIPIOS_PROYECTO_35.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', });
lyr_ENTIDADES_QRO_GTO_36.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'NOMGEO': 'no label', });
lyr_EJE_V1_37.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_CADENAMIENTOS_38.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_ESTACIONES_V1_39.set('fieldLabels', {'ESTACION': 'inline label - always visible', 'PK': 'no label', 'LOCALIDAD': 'no label', 'MUNICIPIO': 'no label', 'ESTADO': 'no label', 'COORD_X': 'no label', 'COORD_Y': 'no label', });
lyr_PK_V2_40.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'header label - visible with data', 'ANGULO_01': 'no label', });
lyr_LIMITES_TRAMOS_41.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_LIMITES_TRAMOS_41.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});