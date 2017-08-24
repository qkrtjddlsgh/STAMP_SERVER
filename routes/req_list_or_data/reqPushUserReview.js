var express = require('express');
var router = express.Router();
var merchant = require('../../models/Merchant');
var dberr = require('../../error_handle_modules/handleDBerror');
var kst = require('../../util_modules/getKST');

router.post('/', function (req, res) {
    var recv_data = req.body;

    var store_name = recv_data.store_name;
    var author = recv_data.user_id;
    var body = recv_data.review_body;

    var review_obj = {
        author : author,
        body : body,
        date : kst()
    };
    var find_query = {store_name : store_name};
    var update_query = {$push : {review_list : review_obj}};

    merchant.update(find_query, update_query, function (err, result) {
        if(err){
            dberr(err, res);
        }else{
            res.send({result : result, review_data : review_obj});
            res.end();
        }
    })
});

module.exports = router;