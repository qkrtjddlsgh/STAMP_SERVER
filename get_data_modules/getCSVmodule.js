var json2csv = require('json2csv');

var getCSVfunc = function ( res, data, fields ) {
    json2csv({data : data, fields : fields}, function (err, csv) {
        if(err){
            console.error(JSON.stringify(err));
            res.end();
        }
        else{
            console.log(csv);
            res.send(new Buffer(csv));
            res.end();
        }
    });
}

module.exports = getCSVfunc;