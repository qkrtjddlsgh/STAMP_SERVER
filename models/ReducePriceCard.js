var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reducePriceCard = new Schema({
    card_idx : String,
    store_name : String,
    store_region : String,

    // 가격 할인 정보 (절대가격에 대한 할인)
});

var reducePriceCardSchem = mongoose.model('reduce_price_card', reducePriceCard, 'reward_cards');
module.exports = reducePriceCardSchem;