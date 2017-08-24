var express = require('express');
var router = express.Router();
var merchant = require('../../models/Merchant');
var dberr = require('../../error_handle_modules/handleDBerror');

router.post('/', function(req, res){
    var recv_data = req.body;
    //var lat = recv_data.latitude;
    //lat = parseFloat(lat);
    //var lng = recv_data.longitude;
    //lng = parseFloat(lng);
    var store_region = recv_data.store_region;

    var find_query = {store_region : store_region};
    var send_obj = new Object();

    merchant.find(find_query, function (err, result) {
        if(err){
            dberr(err, res);
        }else{

            if(result.length == 0){
                send_obj.code = "6200";
                send_obj.message = "not exist merchant";
            }else{
                var tmp_arr = new Array();
                for(var i = 0; i < result.length; i++){
                    var tmp_obj = result[i];
                    tmp_arr.push(tmp_obj);
                }
                send_obj.code = "6100";
                send_obj.result_list = tmp_arr;
            }
            res.send(send_obj);
            res.end();

        }
    });

});

module.exports = router;