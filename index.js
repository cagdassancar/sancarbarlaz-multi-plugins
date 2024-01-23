var extentions = require('./extentions');

module.exports.isNumber = function (value) {
  var deger = Number.parseInt(value)
  return (deger == undefined || deger == NaN || deger == null) ? false : true
}
module.exports.padLeft = function (length,charObject, text) {
    if(length<=text.length)
    {
        return text;
    }
    else
    {
        var fark = Math.abs(length-text.length);
        var yeniDeger = "";
        for (let index = 0; index < fark; index++) {
            yeniDeger+=charObject;            
        }
        return yeniDeger+text;
    }
}
module.exports.padRight = function (length,charObject, text) {
    if(length<=text.length)
    {
        return text;
    }
    else
    {
        var fark = Math.abs(length-text.length);
        var yeniDeger = "";
        for (let index = 0; index < fark; index++) {
            yeniDeger+=charObject;            
        }
        return text+yeniDeger;
    }


}
module.exports.extentions.TestFunc = extentions.TestFunc();