var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//var purchaseInfo = require('./purchaseinfo');


var purchaseData = new Schema({
    date : String,
    purchase_list : [
        //purchaseInfo
    ]
});

var purchase = mongoose.model('purchase', purchaseData, 'purchases');

module.exports = purchase;