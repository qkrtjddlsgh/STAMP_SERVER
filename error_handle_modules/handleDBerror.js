var dberr = function (err, res) {
    console.error(JSON.stringify(err));
    var send_obj = {message : "database error"};
    res.send(send_obj);
    res.end();
}

module.exports = dberr;