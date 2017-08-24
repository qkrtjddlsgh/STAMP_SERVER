var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DiscountCard = new Schema({
    card_idx : String,
    store_name : String,
    store_region : String,
    number_of_card : Number,
    discount_rate : Number, // 100이면 교환권을 의미
    item_name : String,
    additional_comment : String,
    register_date : Date,

    // 할인권 발행 기록
    record : [
        {
            user_id : String,
            date : Date
        }
    ]
});

discountCardSchem = mongoose.model('discount_card', DiscountCard, 'discount_cards');
module.exports = discountCardSchem;