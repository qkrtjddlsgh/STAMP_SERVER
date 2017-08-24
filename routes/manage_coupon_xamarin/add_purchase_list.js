var express = require('express');
var router = express.Router();
var purchase = require('../../models/Purchase');

router.post('/', function(req, res){
    var recv_data = req.body;

    var date = recv_data.date;
    var member_phone_number = recv_data.member_phone_number;
    var store_name = recv_data.store_name;
    var store_region = recv_data.store_region;
    var menu_name = recv_data.menu_name;
    var menu_num = recv_data.menu_num;

    var query = {$push: {'purchase_list': {"member_phone_number": member_phone_number, "store_name": store_name, "store_region": store_region, "menu_name": menu_name, "menu_num": menu_num}}};

    purchase.update({date: date}, query, function(err, result){
        if(err){
            console.error(err.message);
        }
        if(result.n == 0) {
            var new_list = new purchase();
            new_list.date = date;
            new_list.purchase_list = [];
            new_list.save();

            /*var query = {$push: {'purchase_list': {"member_id": member_id, "store_region": store_region, "menu_name": menu_name, "menu_num": menu_num}}};

            purchase.update({date: date}, query, function (err, result) {
                if (err) {
                    console.error(err.message);
                }
            });*/

            var res_data = new Object();
            res_data.code = "3110";
            res_data.message = "Make new and added";

            res.send(res_data);
            res.end();
        }
        else{
            var res_data = new Object();
            res_data.code = "3120";
            res_data.message = "added";

            res.send(res_data);
            res.end();
        }
    });
});

module.exports = router;