var express = require('express');
var router = express.Router();
var merchant = require('../../models/Merchant');
var dberr = require('../../error_handle_modules/handleDBerror');

router.post('/', function (req, res) {
    var recv_data = req.body;

    var store_name = recv_data.store_name;
    var event_title = recv_data.event_title;
    var event_body = recv_data.event_body;
    var event_duration = recv_data.event_duration;

    var find_query = {store_name : store_name};
    var update_obj = {
        event_title : event_title,
        event_body : event_body,
        event_duration : event_duration
    }
    var update_query = {
        $push : {
            merchant_event_list : update_obj
        }
    }

    merchant.update(find_query, update_query, function (err, result) {
        if(err){
            dberr(err, res);
        }else{
            res.send({data : update_obj, result : result});
            res.end();
        }
    })

});

module.exports = router;
