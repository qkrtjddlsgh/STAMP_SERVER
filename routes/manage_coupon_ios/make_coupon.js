var express = require('express');
var router = express.Router();
var coupon = require('../../models/Coupon');

router.post('/', function(req, res){
    var recv_data = req.body;

    var member_id = recv_data.member_id;
    var member_phone_number = recv_data.member_phone_number;

    coupon.find({member_id: member_id, member_phone_number: member_phone_number}, function(err, doc){
        if(err){
            console.error(err.message);
        }
        if(doc.length == 0){
            var new_coupon = new coupon();
            new_coupon.doc_type = null;
            new_coupon.member_id = member_id;
            new_coupon.member_phone_number = member_phone_number;
            new_coupon.inha_street = [];
            new_coupon.bupyeong_street = [];
            new_coupon.chinatown_street = [];
            new_coupon.save();

            var res_data = new Object();
            res_data.code = "2100";
            res_data.message = "Coupon is generate";

            res.send(res_data);
            res.end();
        }
        else{
            var res_data = new Object();
            res_data.code = "5200";
            res_data.message = "Coupon is already exist";

            res.send(res_data);
            res.end();
        }
    });
});

module.exports = router;