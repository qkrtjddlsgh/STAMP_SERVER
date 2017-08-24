var express = require('express');
var router = express.Router();
var merchant = require('../../models/Merchant');
var dberr = require('../../error_handle_modules/handleDBerror');

router.post('/', function (req, res) {
    var recv_data = req.body;
    var id = recv_data.id;

    var find_query = {id : id};

    merchant.find(find_query, function (err, result) {
        if(err){
            dberr(err, res);
        }else{
            if(result.length == 0){
                res.send({message : "not exist matched document"});
                res.end();
            }else{
                res.send(result[0]);
                res.end();
            }
        }
    })
});

module.exports = router;