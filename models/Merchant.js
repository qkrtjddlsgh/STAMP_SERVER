var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var merchantData = new Schema({
    id : String,
    password : String,
    store_name : String,
    // A : 음식점, B : 카페, C : 기타
    store_type : String,
    // ex) 인하대후문, 송도, 월미도
    store_region : String,
    store_address : String,
    // store 설명
    store_desc : String,
    phone_number : String,

    // geometric data
    location : { },

    // 리뷰 리스트
    review_list : [],

    // 할인권 관련 필드
    discount_card_list : []
});

var merchant = mongoose.model('merchant', merchantData, 'merchants');

module.exports = merchant;