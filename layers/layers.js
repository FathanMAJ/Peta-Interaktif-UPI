var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_JalanLingkunganKampus_1 = new ol.format.GeoJSON();
var features_JalanLingkunganKampus_1 = format_JalanLingkunganKampus_1.readFeatures(json_JalanLingkunganKampus_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanLingkunganKampus_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanLingkunganKampus_1.addFeatures(features_JalanLingkunganKampus_1);
var lyr_JalanLingkunganKampus_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanLingkunganKampus_1, 
                style: style_JalanLingkunganKampus_1,
                popuplayertitle: "Jalan Lingkungan Kampus",
                interactive: false,
                title: '<img src="styles/legend/JalanLingkunganKampus_1.png" /> Jalan Lingkungan Kampus'
            });
var format_BangunanUPI_2 = new ol.format.GeoJSON();
var features_BangunanUPI_2 = format_BangunanUPI_2.readFeatures(json_BangunanUPI_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BangunanUPI_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BangunanUPI_2.addFeatures(features_BangunanUPI_2);
var lyr_BangunanUPI_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BangunanUPI_2, 
                style: style_BangunanUPI_2,
                popuplayertitle: "Bangunan UPI",
                interactive: true,
                title: '<img src="styles/legend/BangunanUPI_2.png" /> Bangunan UPI'
            });
var format_TitikBangunanUPI_3 = new ol.format.GeoJSON();
var features_TitikBangunanUPI_3 = format_TitikBangunanUPI_3.readFeatures(json_TitikBangunanUPI_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikBangunanUPI_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikBangunanUPI_3.addFeatures(features_TitikBangunanUPI_3);
var lyr_TitikBangunanUPI_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikBangunanUPI_3, 
                style: style_TitikBangunanUPI_3,
                popuplayertitle: "Titik Bangunan UPI",
                interactive: false,
                title: 'Titik Bangunan UPI'
            });
var format_BatasWilayahUPI_4 = new ol.format.GeoJSON();
var features_BatasWilayahUPI_4 = format_BatasWilayahUPI_4.readFeatures(json_BatasWilayahUPI_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasWilayahUPI_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasWilayahUPI_4.addFeatures(features_BatasWilayahUPI_4);
var lyr_BatasWilayahUPI_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasWilayahUPI_4, 
                style: style_BatasWilayahUPI_4,
                popuplayertitle: "Batas Wilayah UPI",
                interactive: false,
                title: '<img src="styles/legend/BatasWilayahUPI_4.png" /> Batas Wilayah UPI'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_JalanLingkunganKampus_1.setVisible(true);lyr_BangunanUPI_2.setVisible(true);lyr_TitikBangunanUPI_3.setVisible(true);lyr_BatasWilayahUPI_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_JalanLingkunganKampus_1,lyr_BangunanUPI_2,lyr_TitikBangunanUPI_3,lyr_BatasWilayahUPI_4];
lyr_JalanLingkunganKampus_1.set('fieldAliases', {'id': 'id', 'Nama_Jalan': 'Nama_Jalan', });
lyr_BangunanUPI_2.set('fieldAliases', {'Id': 'Id', 'nama': 'nama', 'xy': 'xy', 'tambah': 'tambah', });
lyr_TitikBangunanUPI_3.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Nomor': 'Nomor', 'Bangunan': 'Bangunan', });
lyr_BatasWilayahUPI_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_JalanLingkunganKampus_1.set('fieldImages', {'id': 'TextEdit', 'Nama_Jalan': 'TextEdit', });
lyr_BangunanUPI_2.set('fieldImages', {'Id': 'Range', 'nama': 'TextEdit', 'xy': 'TextEdit', 'tambah': 'TextEdit', });
lyr_TitikBangunanUPI_3.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Nomor': 'TextEdit', 'Bangunan': 'TextEdit', });
lyr_BatasWilayahUPI_4.set('fieldImages', {'OBJECTID': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_JalanLingkunganKampus_1.set('fieldLabels', {'id': 'hidden field', 'Nama_Jalan': 'no label', });
lyr_BangunanUPI_2.set('fieldLabels', {'Id': 'hidden field', 'nama': 'no label', 'xy': 'no label', 'tambah': 'no label', });
lyr_TitikBangunanUPI_3.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Nomor': 'no label', 'Bangunan': 'no label', });
lyr_BatasWilayahUPI_4.set('fieldLabels', {'OBJECTID': 'hidden field', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_BatasWilayahUPI_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});