var express = require('express');
var router = express.Router();
var member = require('../../models/Member');

router.post('/', function(req, res){
    var recv_data = req.body;

    var id = recv_data.id;

    member.find({id: id}, function(err, doc){
        if(err){
            console.error(err.message);
        }
        if(doc.length == 0){
            var new_member = new member();
            new_member.id = id;
            new_member.password = null;
            new_member.name = null;
            new_member.address = null;
            new_member.gender = null;
            new_member.phone_number = null;
            new_member.save();

            var res_data = new Object();
            res_data.code = "1101";
            res_data.message = "New member is registered";

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
    })
});

module.exports = router;