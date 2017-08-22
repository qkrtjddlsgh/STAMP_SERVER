var express = require('express');
var router = express.Router();
var merchant = require('../../models/Merchant');

router.post('/', function(req, res){
    var recv_data = req.body;

    var id = recv_data.id;
    var password = recv_data.password;
    var store_name = recv_data.store_name;
    var store_address = recv_data.store_address;
    var phone_number = recv_data.phone_number;

    var set_data = {$set: {password: password, store_name: store_name, store_address: store_address, phone_number: phone_number}};

    merchant.update({id: id}, set_data, function(err, result){
        if(err){
            console.error(err.message);
        }
        if(result.n == 0){
            var res_data = new Object();
            res_data.code = "5100";
            res_data.message = "Not exist ID";

            res.send(res_data);
            res.end();
        }
        else{
            var add_data = new Object();
            add_data.id = id;
            add_data.store_name = store_name;
            add_data.store_address = store_address;
            add_data.phone_number = phone_number;

            var res_data = new Object()
            res_data.code = "1110";
            res_data.response = add_data;

            res.send(res_data);
            res.end();
        }
    });
});

module.exports = router;