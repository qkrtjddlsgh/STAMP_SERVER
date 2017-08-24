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
            if(result.length == 0){
                res.send({message : "not exist discount card"});
                res.end();
            }else {
                var card_num = random(result.length);
                var card_idx = result[card_num].card_idx;
                discount_card.find({card_idx: card_idx}, function (err, result) {
                    if (err) {
                        dberr(err, res);
                    } else {
                        if (result[0].number_of_card <= 1) {
                            discount_card.remove({card_idx: card_idx}, function (err, result) {
                                if (err) {
                                    dberr(err, res);
                                } else {
                                    res.send({result: result, idx: card_idx});
                                    res.end();
                                }
                            });
                        } else {
                            var num = result[0].number_of_card;
                            discount_card.update({card_idx: card_idx}, {$set: {number_of_card: num - 1}}, function (err, result) {
                                if (err) {
                                    dberr(err, res);
                                } else {
                                    res.send({result: result, idx: card_idx});
                                    res.end();
                                }
                            });
                        }
                    }
                });
            }
        }
    })

});

module.exports = router;