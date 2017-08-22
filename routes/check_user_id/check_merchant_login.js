var express = require('express');
var router = express.Router();
var merchant = require('../../models/Merchant');

router.post('/', function(req, res) {
    var recv_data = req.body;

    var id = recv_data.id;
    var password = recv_data.password;

    merchant.find({id: id}, function (err, result) {
        if (err) {
            console.error(err.message);
        }
        if (result.length == 0) {
            var res_data = new Object();
            res_data.code = "5100";
            res_data.message = "Not exist ID";

            res.send(res_data);
            res.end();
        }
        else {
            if (result[0].password == password) {
                var res_data = new Object();
                res_data.code = "1120";
                res_data.message = "Login correctly";

                res.send(res_data);
                res.end();
            }
            else {
                var res_data = new Object();
                res_data.code = "1130";
                res_data.message = "Incorrect password";

                res.send(res_data);
                res.end();
            }
        }
    });
});

module.exports = router;