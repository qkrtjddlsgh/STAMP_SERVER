var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var couponData = new Schema({
    store_type : String,
    store_region : String,
    member_id : String,
    member_phone_number : String,
    //num_of_stamp : Number,

    // stamp_field의 값이 1이면 찍힌거
    stamp_field : []
});

var coupon = mongoose.model('coupon', couponData, 'coupons');

module.exports = coupon;