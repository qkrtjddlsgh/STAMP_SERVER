var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var merchantData = new Schema({
    id : String,
    password : String,
    store_name : String,
    store_address : String,
    phone_number : String
});

var merchant = mongoose.model('merchant', merchantData, 'merchants');

module.exports = merchant;