var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tradeCard = new Schema({
    card_idx : String,
    store_name : String,
    store_region: String,

    // 교환 정보
    item_name : String,
    additional_comment : String

    // 소유자 정보
    
});

var tradeCardSchem = mongoose.model('trade_card', tradeCard, 'reward_cards');
module.exports = tradeCardSchem;