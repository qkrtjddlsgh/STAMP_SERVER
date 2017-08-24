var express = require('express');
var router = express.Router();
var commercial_area = require('../../models/CommercialArea');
var dberr = require('../../error_handle_modules/handleDBerror');

router.post('/', function(req, res){
    var recv_data = req.body;
    var lat = recv_data.latitude;
    var lng = recv_data.longitude;

    commercial_area.find(function (err, result) {
       if(err){
           dberr(err, res);
       }else{
           var tmp_arr = new Array();
           for(var i = 0; i < result.length; i++){
               tmp_arr.push(result[i]);
           }
           res.send(tmp_arr);
           res.end();
       }
    });
});

module.exports = router;