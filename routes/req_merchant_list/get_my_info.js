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
            var res_data = new Object();
            res_data.code = "6100";
            res_data.message = "ID is not exist";

            res.send(res_data);
            res.end();
        }
        else{
            var res_data = new Object();
            res_data.code = "6200";
            res_data.response = doc[0];

            res.send(res_data);
            res.end();
        }
    });

});

module.exports = router;