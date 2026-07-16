var size = 0;
var placement = 'point';
function categories_DDV_V001_2(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement, textAlign, offsetX, offsetY, overflow, repeat) {
    var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
    switch(valueStr) {
        case 'EN PROCESO':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(248,147,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3.6479999999999997}),fill: new ol.style.Fill({color: 'rgba(255,255,13,0.5019607843137255)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'LIBERADO':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(31,72,30,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3.6479999999999997}),fill: new ol.style.Fill({color: 'rgba(77,175,74,0.5019607843137255)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'PENDIENTE':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(128,14,16,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 4.4079999999999995}),fill: new ol.style.Fill({color: 'rgba(228,26,28,0.5019607843137255)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;
    }};

var style_DDV_V001_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("ESTATUS");
    var labelFont = "10.4px \'Open Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "#fafafa";
    var bufferWidth = 3.0;
    var textAlign = 'center';
    var offsetX = 0;
    var offsetY = 0;
    var overflow = false;
    var repeat = 0;
    var placement = 'point';
    if (feature.get("PROPIETARI") !== null) {
        labelText = String(feature.get("PROPIETARI"));
    }
    
    var style = categories_DDV_V001_2(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement, textAlign, offsetX, offsetY, overflow, repeat);

    return style;
};
