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
    var rating = recv_data.rating;
    var date = new Date();
    date.setHours(date.getHours() + 9);
    var date_year = date.getFullYear();
    var date_month = date.getMonth() + 1;
    var date_day = date.getDate();

    var review_obj = {
        author : author,
        body : body,
        date : kst(),
        rating : rating,
        date_year : date_year,
        date_month : date_month,
        date_day : date_day
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