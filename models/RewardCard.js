var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var rewardCard = new Schema({
    // 리워드 카드 기본 정보
    card_idx : String,
    store_name : String,
    store_id : String,
    store_region : String,
    register_date : Date,

    // 리워드 정보 ( 비율 할인 / 가격 할인 / 교환 권)
    reward_type : Number,
    reward_data : {},

    // 소유자 정보
    owner_type : {type : Number, default : 0},
    owner_id : String,
    owner_date : Date

});

var rewardCardSchem = mongoose.model('reward_card', rewardCard, 'reward_cards');
module.exports = rewardCardSchem;