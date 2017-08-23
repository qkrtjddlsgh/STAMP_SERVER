var express = require('express');
var router = express.Router();
var coupon = require('../../models/Coupon');

router.post('/', function(req, res){
    var recv_data = req.body;

    var store_type = recv_data.store_type;
    var store_region = recv_data.store_region;
    var member_phone_number = recv_data.member_phone_number;

    coupon.find({store_type: store_type, store_region: store_region, member_phone_number: member_phone_number}, function(err, doc) {
        if (err) {
            console.error(err.message);
        }
        if (doc.length == 0) {
            var res_data = new Object();
            res_data.code = "5300";
            res_data.message = "Coupon is not exist";

            res.send(res_data);
            res.end();
        }
        else {
            var query = {$pop: {stamp_field: 1}};

            coupon.update({store_type: store_type, store_region: store_region, member_phone_number: member_phone_number}, query, function (err, result) {
                if (err) {
                    console.error(err.message);
                }
                else {
                    var res_data = new Object();
                    res_data.message = "Update";

                    res.send(res_data);
                    res.end();
                }
            });
        }
    });
});

module.exports = router;