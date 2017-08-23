// yyyy, mm, dd 를 받아 Date 객체로 변환하고 리턴하는 함수

var getDate = function(yyyy, mm, dd){
  var date = new Date();
  date.setYear(yyyy);
  date.setMonth(mm - 1);
  date.setDate(dd);
  return date;
};

module.exports = getDate;