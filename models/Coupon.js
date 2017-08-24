var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var couponData = new Schema({
    // document 속성 정의 필드
    doc_type : String,

    // document 접근 키 (Primary Key)
    member_id : String,
    member_phone_number : String,

    // stamp field - 지역별로 필드를 구분
    inha_street : [
        {
            when : String,
            date : Date,
            where : String
        }
    ],
    bupyeong_street : [
        {
            when : String,
            date : Date,
            where : String
        }
    ],
    chinatown_street : [
        {
            when : String,
            date : Date,
            where : String
        }
    ]

});

var coupon = mongoose.model('coupon', couponData, 'coupons');

module.exports = coupon;