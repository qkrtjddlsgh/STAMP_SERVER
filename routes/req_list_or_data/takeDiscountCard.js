var express = require('express');
var router = express.Router();
var discount_card = require('../../models/DiscountCard');
var random = require('../../util_modules/randomFunc');
var dberr = require('../../error_handle_modules/handleDBerror');

router.post('/', function (req, res) {

    var recv_data = req.body;
    var region = recv_data.region;

    discount_card.find({store_region : region}, function (err, result) {
        if(err){
            dberr(err, res);
        }else{
            var card_cnt = 0;
            for(var i = 0; i < result.length; i++){
                if(result[i].number_of_card > 0){
                    card_cnt
                }
            }
        }
    })

});

module.exports = router;