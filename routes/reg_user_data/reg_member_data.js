var express = require('express');
var router = express.Router();
var member = require('../../models/Member');

router.post('/', function(req, res) {
    var recv_data = req.body;

    var id = recv_data.id;
    var password = recv_data.password;
    var name = recv_data.name;
    var address = recv_data.address;
    var gender = recv_data.gender;
    var point = recv_data.point;
    var phone_number = recv_data.phone_number;

    var set_data = {$set: {password: password, name: name, address: address, gender: gender, point: point, phone_number: phone_number}};

    member.update({id: id}, set_data, function(err, result){
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
            add_data.name = name;
            add_data.address = address;
            add_data.gender = gender;
            add_data.point = point;
            add_data.phone_number = phone_number;

            var res_data = new Object();
            res_data.code = "1110";
            res_data.response = add_data;

            res.send(res_data);
            res.end();
        }
    });
});

module.exports = router;