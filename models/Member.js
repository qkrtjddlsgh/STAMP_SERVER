var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var memberData = new Schema({
    device_token : String,
    id : String,
    password : String,
    name : String,
    address : String,
    gender : String,
    phone_number : String
});

var member = mongoose.model('member', memberData, 'members');

module.exports = member;