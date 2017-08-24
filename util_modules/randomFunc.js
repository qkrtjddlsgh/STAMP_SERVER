var randomFunc = function (max) {
    var ret = Math.round(Math.random() * (max-1));
    console.log(ret);
    return ret;
}

module.exports = randomFunc;