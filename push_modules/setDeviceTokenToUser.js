var express = require('express');
var router = express.Router();
var member = require('../models/Member');

router.post('/', function (req, res) {

    var recv_data = req.body;
    var id = recv_data.id;
    var device_token = recv_data.device_token;

    var query = {$set : {device_token : device_token}};

    member.update({id : id}, query, function (err, result) {
        if(err){
            console.error(JSON.stringify(err));
            res.send({message : "database error"});
            res.end();
        }else{
            console.log(JSON.stringify(result));
            res.send({message : "update complete"});
            res.end();
        }
    })

});

module.exports = router;