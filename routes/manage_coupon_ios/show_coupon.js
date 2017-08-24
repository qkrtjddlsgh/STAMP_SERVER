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
           var res_data = new Object();
           res_data.code = "5300";
           res_data.message = "Coupon is not exist";

           res.send(res_data);
           res.end();
       }
       else{
           var res_data = new Object();
           res_data.code = "2200";
           res_data.response = doc[0];

           res.send(res_data);
           res.end();
       }
    });
});

module.exports = router;