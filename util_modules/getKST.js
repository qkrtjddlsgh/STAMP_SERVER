// 현재 대한민국 표준시 (KST) 를 리턴하는 함수

var getKST = function () {
    var utc = new Date();
    var kst = new Date(utc);
    kst.setHours(utc.getHours() + 9);
    return kst;
};

module.exports = getKST;

