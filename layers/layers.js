var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Reprojected_1 = new ol.format.GeoJSON();
var features_Reprojected_1 = format_Reprojected_1.readFeatures(json_Reprojected_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Reprojected_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Reprojected_1.addFeatures(features_Reprojected_1);
var lyr_Reprojected_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Reprojected_1, 
                style: style_Reprojected_1,
                popuplayertitle: "Reprojected",
                interactive: false,
                title: '<img src="styles/legend/Reprojected_1.png" /> Reprojected'
            });
var lyr_Clippedmask_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Clipped (mask)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Clippedmask_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11976582.809511, -766024.276661, 11977550.095088, -765165.639463]
                            })
                        });
var format_JalanLingkunganKampus_3 = new ol.format.GeoJSON();
var features_JalanLingkunganKampus_3 = format_JalanLingkunganKampus_3.readFeatures(json_JalanLingkunganKampus_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanLingkunganKampus_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanLingkunganKampus_3.addFeatures(features_JalanLingkunganKampus_3);
var lyr_JalanLingkunganKampus_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanLingkunganKampus_3, 
                style: style_JalanLingkunganKampus_3,
                popuplayertitle: "Jalan Lingkungan Kampus",
                interactive: false,
                title: '<img src="styles/legend/JalanLingkunganKampus_3.png" /> Jalan Lingkungan Kampus'
            });
var format_BangunanUPI_4 = new ol.format.GeoJSON();
var features_BangunanUPI_4 = format_BangunanUPI_4.readFeatures(json_BangunanUPI_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BangunanUPI_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BangunanUPI_4.addFeatures(features_BangunanUPI_4);
var lyr_BangunanUPI_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BangunanUPI_4, 
                style: style_BangunanUPI_4,
                popuplayertitle: "Bangunan UPI",
                interactive: true,
                title: '<img src="styles/legend/BangunanUPI_4.png" /> Bangunan UPI'
            });
var format_TitikBangunanUPI_5 = new ol.format.GeoJSON();
var features_TitikBangunanUPI_5 = format_TitikBangunanUPI_5.readFeatures(json_TitikBangunanUPI_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikBangunanUPI_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikBangunanUPI_5.addFeatures(features_TitikBangunanUPI_5);
var lyr_TitikBangunanUPI_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikBangunanUPI_5, 
                style: style_TitikBangunanUPI_5,
                popuplayertitle: "Titik Bangunan UPI",
                interactive: false,
                title: 'Titik Bangunan UPI'
            });
var format_BatasWilayahUPI_6 = new ol.format.GeoJSON();
var features_BatasWilayahUPI_6 = format_BatasWilayahUPI_6.readFeatures(json_BatasWilayahUPI_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasWilayahUPI_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasWilayahUPI_6.addFeatures(features_BatasWilayahUPI_6);
var lyr_BatasWilayahUPI_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasWilayahUPI_6, 
                style: style_BatasWilayahUPI_6,
                popuplayertitle: "Batas Wilayah UPI",
                interactive: false,
                title: '<img src="styles/legend/BatasWilayahUPI_6.png" /> Batas Wilayah UPI'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Reprojected_1.setVisible(true);lyr_Clippedmask_2.setVisible(true);lyr_JalanLingkunganKampus_3.setVisible(true);lyr_BangunanUPI_4.setVisible(true);lyr_TitikBangunanUPI_5.setVisible(true);lyr_BatasWilayahUPI_6.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Reprojected_1,lyr_Clippedmask_2,lyr_JalanLingkunganKampus_3,lyr_BangunanUPI_4,lyr_TitikBangunanUPI_5,lyr_BatasWilayahUPI_6];
lyr_Reprojected_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_JalanLingkunganKampus_3.set('fieldAliases', {'id': 'id', 'Nama_Jalan': 'Nama_Jalan', });
lyr_BangunanUPI_4.set('fieldAliases', {'Id': 'Id', 'nama': 'nama', 'xy': 'xy', 'tambah': 'tambah', });
lyr_TitikBangunanUPI_5.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Nomor': 'Nomor', 'Bangunan': 'Bangunan', });
lyr_BatasWilayahUPI_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Reprojected_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_JalanLingkunganKampus_3.set('fieldImages', {'id': 'TextEdit', 'Nama_Jalan': 'TextEdit', });
lyr_BangunanUPI_4.set('fieldImages', {'Id': 'Range', 'nama': 'TextEdit', 'xy': 'TextEdit', 'tambah': 'TextEdit', });
lyr_TitikBangunanUPI_5.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Nomor': 'TextEdit', 'Bangunan': 'TextEdit', });
lyr_BatasWilayahUPI_6.set('fieldImages', {'OBJECTID': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_Reprojected_1.set('fieldLabels', {'OBJECTID': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_JalanLingkunganKampus_3.set('fieldLabels', {'id': 'hidden field', 'Nama_Jalan': 'no label', });
lyr_BangunanUPI_4.set('fieldLabels', {'Id': 'hidden field', 'nama': 'no label', 'xy': 'no label', 'tambah': 'no label', });
lyr_TitikBangunanUPI_5.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Nomor': 'no label', 'Bangunan': 'no label', });
lyr_BatasWilayahUPI_6.set('fieldLabels', {'OBJECTID': 'hidden field', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_BatasWilayahUPI_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});