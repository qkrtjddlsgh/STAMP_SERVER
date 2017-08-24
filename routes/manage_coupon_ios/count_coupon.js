var express = require('express');
var router = express.Router();
var coupon = require('../../models/Coupon');

router.post('/', function(req, res){
    var recv_data = req.body;

    var member_phone_number = recv_data.member_phone_number;

    coupon.find({member_phone_number: member_phone_number}, function(err, doc){
        if(err){
            console.error(err.message);
        }
        if(doc.length == 0){
            var res_data = new Object();
            res_data.code = "5300";
            res_data.message = "Coupon is not exist";

            res.send(res_data);
            res.end();
        }
        else{
            var res_data = new Object();
            res_data.code = "2200";

            var count = new Object();
            count.inha_count = doc[0].inha_street.length;
            count.bupyeong_count = doc[0].bupyeong_street.length;
            count.chinatown_count = doc[0].chinatown_street.length;

            res_data.response = count;

            res.send(res_data);
            res.end();
        }
    });
});

module.exports = router;