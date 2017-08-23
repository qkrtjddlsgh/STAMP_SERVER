var fcm = require('./setFCMServer');
var express = require('express');
var router = express.Router();
var member = require('../models/Member');

var message = {
    to : null,
    data : null,
    notification : null
}

router.post('/', function (req, res) {
    var recv_data = req.body;
    var push_body = recv_data.push_body;
    var push_title = recv_data.push_title;

    var message_obj = {
        body : push_body,
        title : push_title
    }

    member.find({}, function (err, result) {
        if(err){
            // error occur
        }else{
            if(result.length == 0){
                console.error("no documents");
                res.send({message : "no documents"});
                res.end();
            }else{
                for(var i = 0; i < result.length; i++){
                    var tmp = result[i].device_token;
                    message.to = tmp;
                    message.data = message_obj;
                    message.notification = message_obj;
                    fcm.send(message, function (err, response) {
                       if(err){
                           console.error("push send error");
                       } else{
                           console.log(JSON.stringify(response));
                       }
                    });
                }
                res.send({message : "push send"});
                res.end();
            }
        }
    });
});

module.exports = router;