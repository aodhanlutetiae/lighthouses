var wms_layers = [];

var format_SM_TidalBoundary_0 = new ol.format.GeoJSON();
var features_SM_TidalBoundary_0 = format_SM_TidalBoundary_0.readFeatures(json_SM_TidalBoundary_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SM_TidalBoundary_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SM_TidalBoundary_0.addFeatures(features_SM_TidalBoundary_0);
var lyr_SM_TidalBoundary_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SM_TidalBoundary_0, 
                style: style_SM_TidalBoundary_0,
                interactive: true,
                title: '<img src="styles/legend/SM_TidalBoundary_0.png" /> SM_TidalBoundary'
            });
var format_SN_TidalBoundary_1 = new ol.format.GeoJSON();
var features_SN_TidalBoundary_1 = format_SN_TidalBoundary_1.readFeatures(json_SN_TidalBoundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SN_TidalBoundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SN_TidalBoundary_1.addFeatures(features_SN_TidalBoundary_1);
var lyr_SN_TidalBoundary_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SN_TidalBoundary_1, 
                style: style_SN_TidalBoundary_1,
                interactive: true,
                title: '<img src="styles/legend/SN_TidalBoundary_1.png" /> SN_TidalBoundary'
            });
var format_SO_TidalBoundary_2 = new ol.format.GeoJSON();
var features_SO_TidalBoundary_2 = format_SO_TidalBoundary_2.readFeatures(json_SO_TidalBoundary_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SO_TidalBoundary_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SO_TidalBoundary_2.addFeatures(features_SO_TidalBoundary_2);
var lyr_SO_TidalBoundary_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SO_TidalBoundary_2, 
                style: style_SO_TidalBoundary_2,
                interactive: true,
                title: '<img src="styles/legend/SO_TidalBoundary_2.png" /> SO_TidalBoundary'
            });
var format_SR_TidalBoundary_3 = new ol.format.GeoJSON();
var features_SR_TidalBoundary_3 = format_SR_TidalBoundary_3.readFeatures(json_SR_TidalBoundary_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SR_TidalBoundary_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SR_TidalBoundary_3.addFeatures(features_SR_TidalBoundary_3);
var lyr_SR_TidalBoundary_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SR_TidalBoundary_3, 
                style: style_SR_TidalBoundary_3,
                interactive: true,
                title: '<img src="styles/legend/SR_TidalBoundary_3.png" /> SR_TidalBoundary'
            });
var format_SS_TidalBoundary_4 = new ol.format.GeoJSON();
var features_SS_TidalBoundary_4 = format_SS_TidalBoundary_4.readFeatures(json_SS_TidalBoundary_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SS_TidalBoundary_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SS_TidalBoundary_4.addFeatures(features_SS_TidalBoundary_4);
var lyr_SS_TidalBoundary_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SS_TidalBoundary_4, 
                style: style_SS_TidalBoundary_4,
                interactive: true,
                title: '<img src="styles/legend/SS_TidalBoundary_4.png" /> SS_TidalBoundary'
            });
var format_ST_TidalBoundary_5 = new ol.format.GeoJSON();
var features_ST_TidalBoundary_5 = format_ST_TidalBoundary_5.readFeatures(json_ST_TidalBoundary_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ST_TidalBoundary_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ST_TidalBoundary_5.addFeatures(features_ST_TidalBoundary_5);
var lyr_ST_TidalBoundary_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ST_TidalBoundary_5, 
                style: style_ST_TidalBoundary_5,
                interactive: true,
                title: '<img src="styles/legend/ST_TidalBoundary_5.png" /> ST_TidalBoundary'
            });
var format_HistoricalLighthouses_6 = new ol.format.GeoJSON();
var features_HistoricalLighthouses_6 = format_HistoricalLighthouses_6.readFeatures(json_HistoricalLighthouses_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HistoricalLighthouses_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HistoricalLighthouses_6.addFeatures(features_HistoricalLighthouses_6);
var lyr_HistoricalLighthouses_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HistoricalLighthouses_6, 
                style: style_HistoricalLighthouses_6,
                interactive: true,
                title: '<img src="styles/legend/HistoricalLighthouses_6.png" /> HistoricalLighthouses'
            });
var group_tidal_boundaries = new ol.layer.Group({
                                layers: [lyr_SM_TidalBoundary_0,lyr_SN_TidalBoundary_1,lyr_SO_TidalBoundary_2,lyr_SR_TidalBoundary_3,lyr_SS_TidalBoundary_4,lyr_ST_TidalBoundary_5,],
                                title: "tidal_boundaries"});

lyr_SM_TidalBoundary_0.setVisible(true);lyr_SN_TidalBoundary_1.setVisible(true);lyr_SO_TidalBoundary_2.setVisible(true);lyr_SR_TidalBoundary_3.setVisible(true);lyr_SS_TidalBoundary_4.setVisible(true);lyr_ST_TidalBoundary_5.setVisible(true);lyr_HistoricalLighthouses_6.setVisible(true);
var layersList = [group_tidal_boundaries,lyr_HistoricalLighthouses_6];
lyr_SM_TidalBoundary_0.set('fieldAliases', {'ID': 'ID', 'CLASSIFICA': 'CLASSIFICA', 'FEATCODE': 'FEATCODE', });
lyr_SN_TidalBoundary_1.set('fieldAliases', {'ID': 'ID', 'CLASSIFICA': 'CLASSIFICA', 'FEATCODE': 'FEATCODE', });
lyr_SO_TidalBoundary_2.set('fieldAliases', {'ID': 'ID', 'CLASSIFICA': 'CLASSIFICA', 'FEATCODE': 'FEATCODE', });
lyr_SR_TidalBoundary_3.set('fieldAliases', {'ID': 'ID', 'CLASSIFICA': 'CLASSIFICA', 'FEATCODE': 'FEATCODE', });
lyr_SS_TidalBoundary_4.set('fieldAliases', {'ID': 'ID', 'CLASSIFICA': 'CLASSIFICA', 'FEATCODE': 'FEATCODE', });
lyr_ST_TidalBoundary_5.set('fieldAliases', {'ID': 'ID', 'CLASSIFICA': 'CLASSIFICA', 'FEATCODE': 'FEATCODE', });
lyr_HistoricalLighthouses_6.set('fieldAliases', {'Name': 'Name', 'LH_MED': 'LH_MED', 'LH_1693': 'LH_1693', 'LH_1753': 'LH_1753', 'LH_1831': 'LH_1831', 'REACH_1831': 'REACH_1831', 'LH_1851': 'LH_1851', 'REACH_1851': 'REACH_1851', 'LH_1911': 'LH_1911', 'REACH_1911': 'REACH_1911', 'Height': 'Height', 'YearBuilt': 'YearBuilt', 'POINT_X': 'POINT_X', 'POINT_Y': 'POINT_Y', });
lyr_SM_TidalBoundary_0.set('fieldImages', {'ID': '', 'CLASSIFICA': '', 'FEATCODE': '', });
lyr_SN_TidalBoundary_1.set('fieldImages', {'ID': '', 'CLASSIFICA': '', 'FEATCODE': '', });
lyr_SO_TidalBoundary_2.set('fieldImages', {'ID': '', 'CLASSIFICA': '', 'FEATCODE': '', });
lyr_SR_TidalBoundary_3.set('fieldImages', {'ID': '', 'CLASSIFICA': '', 'FEATCODE': '', });
lyr_SS_TidalBoundary_4.set('fieldImages', {'ID': '', 'CLASSIFICA': '', 'FEATCODE': '', });
lyr_ST_TidalBoundary_5.set('fieldImages', {'ID': 'TextEdit', 'CLASSIFICA': 'TextEdit', 'FEATCODE': 'Range', });
lyr_HistoricalLighthouses_6.set('fieldImages', {'Name': '', 'LH_MED': '', 'LH_1693': '', 'LH_1753': '', 'LH_1831': '', 'REACH_1831': '', 'LH_1851': '', 'REACH_1851': '', 'LH_1911': '', 'REACH_1911': '', 'Height': '', 'YearBuilt': '', 'POINT_X': '', 'POINT_Y': '', });
lyr_SM_TidalBoundary_0.set('fieldLabels', {});
lyr_SN_TidalBoundary_1.set('fieldLabels', {});
lyr_SO_TidalBoundary_2.set('fieldLabels', {});
lyr_SR_TidalBoundary_3.set('fieldLabels', {});
lyr_SS_TidalBoundary_4.set('fieldLabels', {});
lyr_ST_TidalBoundary_5.set('fieldLabels', {});
lyr_HistoricalLighthouses_6.set('fieldLabels', {'Name': 'no label', 'LH_MED': 'no label', 'LH_1693': 'no label', 'LH_1753': 'no label', 'LH_1831': 'no label', 'REACH_1831': 'no label', 'LH_1851': 'no label', 'REACH_1851': 'no label', 'LH_1911': 'no label', 'REACH_1911': 'no label', 'Height': 'no label', 'YearBuilt': 'no label', 'POINT_X': 'no label', 'POINT_Y': 'no label', });
lyr_HistoricalLighthouses_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});