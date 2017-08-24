var express = require('express');
var router = express.Router();
var merchant = require('../../models/Merchant');
var dberr = require('../../error_handle_modules/handleDBerror');

router.post('/',function (req, res) {
    var recv_data = req.body;
    var region = recv_data.store_region;

    var find_query = {store_region : region};

    merchant.find(find_query, function (err, result) {
        if(err){
            dberr(err, res);
        }else{
            var tmp_arr = new Array();
            for(var i = 0; i < result.length; i++){
                if(result[i].merchant_event_list.length > 0){
                    var tmp_obj = new Object();
                    tmp_obj.store_name = result[i].store_name;
                    tmp_obj.id = result[i].id;
                    var tmp_arr2 = new Array();
                    for(var j = 0; j < result[i].merchant_event_list.length; j++){
                        tmp_arr2.push(result[i].merchant_event_list[j]);
                    }
                    tmp_obj.event_list = tmp_arr2;
                }else{
                    continue;
                }
                tmp_arr.push(tmp_obj);
            }
            res.send(tmp_arr);
            res.end();
        }
    })
});

module.exports = router;