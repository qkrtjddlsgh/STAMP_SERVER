var dateToUnixTimeFull = function (date) {
    var cur = new Date(date);
    return Math.floor(cur.getTime());
};

module.exports = dateToUnixTimeFull;