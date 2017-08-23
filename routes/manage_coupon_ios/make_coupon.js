var express = require('express');
var router = express.Router();
var coupon = require('../../models/Coupon');

router.post('/', function(req, res){
    var recv_data = req.body;

    var store_type = recv_data.store_type;
    var store_region = recv_data.store_region;
    var member_id = recv_data.member_id;
    var member_phone_number = recv_data.member_phone_number;
    //var num_of_stamp = recv_data.num_of_stamp;

    coupon.find({member_id: member_id, store_type: store_type, store_region: store_region}, function(err, doc){
        if(err){
            console.error(err.message);
        }
        if(doc.length == 0){
            var new_coupon = new coupon();
            new_coupon.store_type = store_type;
            new_coupon.store_region = store_region;
            new_coupon.member_id = member_id;
            new_coupon.member_phone_number = member_phone_number;
            new_coupon.stamp_field = [];

            /*for(var i=0; i<num_of_stamp; i++){
                new_coupon.stamp_field[i] = 0;
            }*/

            new_coupon.save();

            var res_data = new Object();
            res_data.code = "2100";
            res_data.message = "Coupon is generate";

            res.send(res_data);
            res.end();
        }
        else {
            var res_data = new Object();
            res_data.code = "5200";
            res_data.message = "Coupon is already exist";

            res.send(res_data);
            res.end();
        }
    });
});

module.exports = router;