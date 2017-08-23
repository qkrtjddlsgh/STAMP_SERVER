var csvFunc = require('../../get_data_modules/getCSVmodule');
var express = require('express');
var router = express.Router();
var KST = require('../../util_modules/getKST');
var UnixTime = require('../../util_modules/dateToUnixTime');
var Time = require('../../util_modules/unixTimeToDate');
var date = require('../../util_modules/getDate');

router.post('/', function(req, res){
    var recv_data = req.body;

    res.end();
});

module.exports = router;
