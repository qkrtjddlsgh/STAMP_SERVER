var express = require('express');
var router = express.Router();
var reward_card = require('../../models/RewardCard');
var index_number = require('../../util_modules/indexNumber');
var kst = require('../../util_modules/getKST');
var dberr = require('../../error_handle_modules/handleDBerror');

router.post('/', function (req, res) {
    var recv_data = req.body;

    var store_id = recv_data.store_id;
    var store_name = recv_data.store_name;
    var store_region = recv_data.store_region;
    var reward_type = recv_data.reward_type;
    var reward_number = recv_data.reward_number;
    var reward_item_name = recv_data.reward_item_name;
    var additional_comment = recv_data.additional_comment;

    var card_idx = index_number(new Date());
    console.log(card_idx);
    var register_date = kst();

    var doc = new reward_card();
    doc.card_idx = card_idx;
    doc.store_name = store_name;
    doc.store_region = store_region;
    doc.store_id = store_id;
    doc.register_date = register_date;
    doc.reward_type = reward_type;
    doc.reward_number = reward_number;
    doc.reward_item_name = reward_item_name;
    doc.additional_comment = additional_comment;
    doc.owner_id = null;
    doc.owner_date = null;

    doc.save(function(err, result){
       if(err){
           dberr(err, res);
       }else{
           res.send(result);
           res.end();
       }
    });

});

module.exports = router;