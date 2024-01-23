/**
 * Method that returns whether the String object can be converted to Number
 * @returns returns bool
 * @param this string value
 */
String.prototype.isNumber = function () {
  let value = String(this)
  var deger = Number.parseInt(value)
  return deger == undefined || deger == NaN || deger == null ? false : true
}

/**
 * Adds the specified number of objects to the left of the incoming object.
 * @returns returns string
 * @param length We specify how long the object will be
 * @param char object to add
 */
String.prototype.toPadLeft = function (length, char) {
  let text = String(this)
  if (length <= text.length) {
    return text
  } else {
    var fark = Math.abs(length - text.length)
    var yeniDeger = ''
    for (let index = 0; index < fark; index++) {
      yeniDeger += char
    }
    return yeniDeger + text
  }
}

/**
 * Adds the specified number of objects to the right of the incoming object.
 * @returns returns string
 * @param length We specify how long the object will be
 * @param char object to add
 */
String.prototype.toPadRight = function (length, char) {
  let text = String(this)
  if (length <= text.length) {
    return text
  } else {
    var fark = Math.abs(length - text.length)
    var yeniDeger = ''
    for (let index = 0; index < fark; index++) {
      yeniDeger += char
    }
    return text + yeniDeger
  }
}

/**
 * Method that capitalizes the first letter of the object
 * @returns returns string
 */
String.prototype.toFirstUpper = function (length, char) {
  let text = String(this)
  var otherKeyword = text.toLowerCase().substring(1, text.length)
  var firstKeyword = text.substring(0, 1).toUpperCase()
  return firstKeyword + otherKeyword
}
