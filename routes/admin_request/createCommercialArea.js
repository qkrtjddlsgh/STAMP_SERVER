var express = require('express');
var router = express.Router();
var commercial_area = require('../../models/CommercialArea');
var dberr = require('../../error_handle_modules/handleDBerror');

router.post('/', function (req, res) {
    var recv_data = req.body;
    var name = recv_data.region_name;
    var center_lat = recv_data.region_center_latitude;
    var center_lng = recv_data.region_center_longitude;
    var zoom_level = recv_data.region_zoom_level;
    var introduction = recv_data.region_introduction;
    /*
    region_center_latitude : Number,
    region_center_longitude : Number,
    region_zoom_level : Number,
    region_introduction : String
     */

    var doc = new commercial_area();
    doc.region_name = name;
    doc.region_center_latitude = center_lat;
    doc.region_center_longitude = center_lng;
    doc.region_zoom_level = zoom_level;
    doc.region_introduction = introduction;
    doc.save(function (err, result) {
        if(err){
            dberr(err, res);
        }else{
            res.send(result);
            res.end();
        }
    })

});

module.exports = router;