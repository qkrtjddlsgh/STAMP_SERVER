var express = require('express');
var router = express.Router();
var reward_card = require('../../models/RewardCard');
var dberr = require('../../error_handle_modules/handleDBerror');

router.post('/', function (req, res) {
    var recv_data = req.body;

    var user_id = recv_data.user_id;
    var find_query = {owner_id : user_id};

    reward_card.find(find_query, function (err, result) {
        if(err){
            dberr(err, res);
        }else{
            if(result.length == 0){
                res.send({message : "no reward card"});
                res.end();
            }else{
                res.send(result);
                res.end();
            }
        }
    })
});

module.exports = router;