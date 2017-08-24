var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommercialArea = new Schema({
    region_name : String,
    region_center_latitude : Number,
    region_center_longitude : Number,
    region_zoom_level : Number,
    region_introduction : String
});

var CommercialAreaSchem = mongoose.model('commercial_area', CommercialArea, 'commercial_areas');
module.exports = CommercialAreaSchem;