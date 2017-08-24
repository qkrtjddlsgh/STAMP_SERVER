var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var purchaseInfo = new Schema({
    member_phone_number : String,
    store_name : String,
    store_region : String,
    menu_name : String,
    menu_num : Number
});

module.exports = purchaseInfo;