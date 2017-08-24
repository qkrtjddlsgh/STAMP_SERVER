var express = require('express');
var router = express.Router();
var member = require('../../models/Member');

router.post('/', function(req, res){
    var recv_data = req.body;

    var id = recv_data.id;
    var down_point = recv_data.point;

    member.find({id: id}, function(err, doc){
        if(err) {
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
            var cur_point = doc[0].point;
            var new_point = cur_point - down_point;

            var set_data = {$set: {point: new_point}};

            member.update({id: id}, set_data, function(err, result){
                if(err){
                    console.error(err.message);
                }
                else{
                    var add_data = new Object();
                    add_data.cur_point = cur_point;
                    add_data.new_point = new_point;

                    var res_data = new Object();
                    res_data.code = "6200";
                    res_data.response = add_data;

                    res.send(res_data);
                    res.end();
                }
            });
        }
    });
});

modules.exports = router;