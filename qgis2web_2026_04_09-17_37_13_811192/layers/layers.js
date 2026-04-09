ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([13825840.342403, 72091.015574, 13846511.488922, 84788.526969]);
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
var format_DESAKOPANDAKAN1_1 = new ol.format.GeoJSON();
var features_DESAKOPANDAKAN1_1 = format_DESAKOPANDAKAN1_1.readFeatures(json_DESAKOPANDAKAN1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DESAKOPANDAKAN1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DESAKOPANDAKAN1_1.addFeatures(features_DESAKOPANDAKAN1_1);
var lyr_DESAKOPANDAKAN1_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DESAKOPANDAKAN1_1, 
                style: style_DESAKOPANDAKAN1_1,
                popuplayertitle: 'DESA KOPANDAKAN 1',
                interactive: true,
                title: '<img src="styles/legend/DESAKOPANDAKAN1_1.png" /> DESA KOPANDAKAN 1'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_DESAKOPANDAKAN1_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_DESAKOPANDAKAN1_1];
lyr_DESAKOPANDAKAN1_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'LUAS': 'LUAS', });
lyr_DESAKOPANDAKAN1_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'LUAS': 'TextEdit', });
lyr_DESAKOPANDAKAN1_1.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'inline label - always visible', 'FCODE': 'inline label - always visible', 'REMARK': 'no label', 'METADATA': 'inline label - always visible', 'SRS_ID': 'inline label - always visible', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'inline label - always visible', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'inline label - always visible', 'KDPPUM': 'inline label - always visible', 'LUASWH': 'inline label - always visible', 'TIPADM': 'inline label - always visible', 'WADMKC': 'inline label - always visible', 'WADMKD': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'inline label - always visible', 'LUAS': 'inline label - always visible', });
lyr_DESAKOPANDAKAN1_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});