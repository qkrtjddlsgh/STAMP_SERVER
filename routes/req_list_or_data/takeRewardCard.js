var express = require('express');
var router = express.Router();
var reward_card = require('../../models/RewardCard');
var random_number = require('../../util_modules/randomFunc');
var kst = require('../../util_modules/getKST');
var dberr = require('../../error_handle_modules/handleDBerror');

router.post('/', function (req, res) {
    var recv_data = req.body;

    var user_id = recv_data.user_id;

    var find_query = {owner_type : 0};

    reward_card.find(find_query, function (err, result) {
        if(err){
            dberr(err, res);
        }else{
            if(result.length == 0){
                res.send({message : "reward is not exist"});
                res.end();
            }
            var cnt = random_number(result.length);
            console.log(cnt);
            var card_idx = result[cnt].card_idx;
            find_query = {card_idx : card_idx};
            var update_query = {$set : {owner_type :1, owner_id : user_id, owner_date : kst()}};
            reward_card.update(find_query, update_query, function (err, result) {
                if(err){
                    dberr(err, res);
                }else{
                    res.send(result);
                    res.end();
                }
            })
        }
    });

})

module.exports = router;