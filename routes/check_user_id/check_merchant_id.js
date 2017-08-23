var express = require('express');
var router = express.Router();
var merchant = require('../../models/Merchant');

router.post('/', function(req, res){
    var recv_data = req.body;

    var id = recv_data.id;

    merchant.find({id: id}, function(err, doc){
        if(err){
            console.error(err.message);
        }
        if(doc.length == 0){
            var new_merchant = new merchant();
            new_merchant.id = id;
            new_merchant.password = null;
            new_merchant.store_name = null;
            new_merchant.store_type = null;
            new_merchant.store_region = null;
            new_merchant.store_address = null;
            new_merchant.phone_number = null;
            new_merchant.save();

            var res_data = new Object();
            res_data.code = "1101";
            res_data.message = "New merchant is registered";

            res.send(res_data);
            res.end();
        }
        else{
            var res_data = new Object();
            res_data.code = "1100";
            res_data.message = "ID is already registered";

            res.send(res_data);
            res.end();
        }
    });
});

module.exports = router;