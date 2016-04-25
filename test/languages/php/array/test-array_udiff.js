// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
XMLHttpRequest = {} // eslint-disable-line no-native-reassign
window = { // eslint-disable-line no-native-reassign
  window: {},
  document: {
    lastModified: 1388954399,
    getElementsByTagName: function () { return [] }
  },
  location: {
    href: ""
  }
}
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set') // eslint-disable-line no-unused-vars
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get') // eslint-disable-line no-unused-vars
var array_udiff = require('/Users/kvz/code/phpjs/src/php/array/array_udiff.js')

describe('php.array.array_udiff.js', function () {
  it('should pass example 1', function (done) {
    $array1 = {a: 'green', b: 'brown', c: 'blue', 0: 'red'}
    $array2 = {a: 'GREEN', B: 'brown', 0: 'yellow', 1: 'red'}
    array_udiff($array1, $array2, function (f_string1, f_string2){var string1 = (f_string1+'').toLowerCase(); var string2 = (f_string2+'').toLowerCase(); if (string1 > string2) return 1; if (string1 === string2) return 0; return -1;})
    var expected = {c: 'blue'}
$array1 = {a: 'green', b: 'brown', c: 'blue', 0: 'red'}
$array2 = {a: 'GREEN', B: 'brown', 0: 'yellow', 1: 'red'}
    var result = array_udiff($array1, $array2, function (f_string1, f_string2){var string1 = (f_string1+'').toLowerCase(); var string2 = (f_string2+'').toLowerCase(); if (string1 > string2) return 1; if (string1 === string2) return 0; return -1;})
    expect(result).to.deep.equal(expected)
    done()
  })
})