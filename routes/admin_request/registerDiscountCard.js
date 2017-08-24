var express = require('express');
var router = express.Router();
var discount_card = require('../../models/DiscountCard');
var merchant = require('../../models/Merchant');
var dberr = require('../../error_handle_modules/handleDBerror');
var kst = require('../../util_modules/getKST');
var coupon_idx = require('../../util_modules/indexNumber');

router.post('/', function (req, res) {
    var recv_data = req.body;

    var store_name = recv_data.store_name;
    var store_region = recv_data.store_region;
    var number_of_card = recv_data.number_of_card;
    var discount_rate = recv_data.discount_rate;
    var item_name = recv_data.item_name;
    var additional_comment = recv_data.additional_comment;

    var doc = new discount_card();
    doc.store_name = store_name;
    doc.card_idx = coupon_idx(new Date());
    doc.store_region = store_region;
    doc.number_of_card = number_of_card;
    doc.discount_rate = discount_rate;
    doc.item_name = item_name;
    doc.additional_comment = additional_comment;
    doc.register_date = kst();
    doc.save(function (err, result) {
        if(err){
            dberr(err,res);
        }else{
            var find_query = {store_name : store_name};
            var update_query = {$push : {discount_card_list : result}};
            merchant.update(find_query, update_query, function (err, result) {
                if(err){
                    console.error(JSON.stringify(err));
                }else{
                    console.log(JSON.stringify(result));
                }
            });
            res.send(result);
            res.end();
        }
    })
});

module.exports = router;