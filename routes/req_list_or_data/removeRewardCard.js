var express = require('express');
var router = express.Router();
var reward_card = require('../../models/RewardCard');
var dberr = require('../../error_handle_modules/handleDBerror');

router.post('/', function (req, res) {
    var recv_data = req.body;
    var card_idx = recv_data.card_idx;

    var find_query = {card_idx : card_idx};

    reward_card.find(find_query, function (err, result) {
        if(err){
            dberr(err, res);
        }else{
            if(result.length == 0){
                res.send({code : 0});
                res.end();
            }else{
                reward_card.remove(find_query, function (err, result) {
                   if(err){
                       dberr(err, res);
                   } else{
                       res.send({code : 1});
                       res.end();
                   }
                });
            }
        }
    })
});

module.exports = router;