var express = require('express');
var router = express.Router();
var coupon = require('../../models/Coupon');
var kst = require('../../util_modules/getKST');
var dberr = require('../../error_handle_modules/handleDBerror');

router.post('/', function(req, res){
    var recv_data = req.body;
    var member_phone_number = recv_data.member_phone_number;
    var when = recv_data.date;
    var region = recv_data.store_region;
    var store = recv_data.store_name;

    coupon.find({member_phone_number: member_phone_number}, function(err, doc){
        if(err){
            console.error(err.message);
        }
        if(doc.length == 0){
            var res_data = new Object();
            res_data.code = "6100";
            res_data.message = "Coupon is not exist";

            res.send(res_data);
            res.end();
        }
        else{
            // DB query
            var find_query = {member_phone_number : member_phone_number};
            var update_query = {
                when : when,
                date : kst(),
                where : store
            };

            if(region == "inha_street"){
                coupon.update(find_query, {$push : {inha_street : update_query}}, function (err, result) {
                    if(err){
                        dberr(err, res);
                    }else{
                        console.log("inha street coupon set");
                        var send_obj = {message : "inha street coupon set"};
                        send_obj.code = "6200";
                        res.send(send_obj);
                        res.end();
                    }
                });
            }else if(region == "bupyeong_street"){
                coupon.update(find_query, {$push : {bupyeong_street : update_query}}, function (err, result) {
                    if(err){
                        dberr(err, res);
                    }else{
                        console.log("bupyeong street coupon set");
                        var send_obj = {message : "bupyeong street coupon set"};
                        send_obj.code = "6200";
                        res.send(send_obj);
                        res.end();
                    }
                });
            }else if(region == "chinatown_street"){
                coupon.update(find_query, {$push : {chinatown_street : update_query}}, function (err, result) {
                    if(err){
                        dberr(err, res);
                    }else{
                        console.log("chinatown street coupon set");
                        var send_obj = {message : "china street coupon set"};
                        send_obj.code = "6200";
                        res.send(send_obj);
                        res.end();
                    }
                });
            }else{
                // 지역 요청이 잘못된 경우
                var res_data = new Object();
                res_data.code = "6100";
                res_data.message = "Invalid region";

                res.send(res_data);
                res.end();
            }
        }
    });
});

module.exports = router;