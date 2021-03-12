var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Isochrones_1 = new ol.format.GeoJSON();
var features_Isochrones_1 = format_Isochrones_1.readFeatures(json_Isochrones_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Isochrones_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Isochrones_1.addFeatures(features_Isochrones_1);
var lyr_Isochrones_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Isochrones_1, 
                style: style_Isochrones_1,
                interactive: false,
    title: 'Isochrones<br />\
    <img src="styles/legend/Isochrones_1_0.png" /> 16093 m<br />\
    <img src="styles/legend/Isochrones_1_1.png" /> 24140 m<br />'
        });
var format_myfirstdata_2 = new ol.format.GeoJSON();
var features_myfirstdata_2 = format_myfirstdata_2.readFeatures(json_myfirstdata_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_myfirstdata_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_myfirstdata_2.addFeatures(features_myfirstdata_2);
var lyr_myfirstdata_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_myfirstdata_2, 
                style: style_myfirstdata_2,
                interactive: false,
                title: '<img src="styles/legend/myfirstdata_2.png" /> myfirstdata'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Isochrones_1.setVisible(true);lyr_myfirstdata_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Isochrones_1,lyr_myfirstdata_2];
lyr_Isochrones_1.set('fieldAliases', {'ID': 'ID', 'AA_METERS': 'AA_METERS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', 'legendlabel': 'legendlabel', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', });
lyr_myfirstdata_2.set('fieldAliases', {'fid': 'fid', 'label': 'label', 'NameLabel': 'NameLabel', });
lyr_Isochrones_1.set('fieldImages', {'ID': '', 'AA_METERS': '', 'AA_MODE': '', 'TOTAL_POP': '', 'legendlabel': '', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', });
lyr_myfirstdata_2.set('fieldImages', {'fid': '', 'label': '', 'NameLabel': '', });
lyr_Isochrones_1.set('fieldLabels', {'ID': 'no label', 'AA_METERS': 'no label', 'AA_MODE': 'no label', 'TOTAL_POP': 'no label', 'legendlabel': 'no label', });
lyr_myfirstdata_2.set('fieldLabels', {'fid': 'no label', 'label': 'no label', 'NameLabel': 'no label', });
lyr_myfirstdata_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});