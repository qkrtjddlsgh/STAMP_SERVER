// Date 객체의 시간을 arg 로 받아 POSIX 시간으로 변경하는 함수

var dateToUnixTime = function (date) {
    var cur = new Date(date);
    return Math.floor(cur.getTime() / 1000);
};

module.exports = dateToUnixTime;