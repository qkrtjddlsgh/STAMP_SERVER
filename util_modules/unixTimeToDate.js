// POSIX 시간을 Date 객체로 변환하고 리턴하는 함수

var unixTimeToDate = function (unixTime) {
    return new Date(unixTime * 1000);
};

module.exports = unixTimeToDate;