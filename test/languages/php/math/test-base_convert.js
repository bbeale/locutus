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
var base_convert = require('/Users/kvz/code/phpjs/src/php/math/base_convert.js')

describe('php.math.base_convert.js', function () {
  it('should pass example 1', function (done) {
    base_convert('A37334', 16, 2)
    var expected = '101000110111001100110100'
    var result = base_convert('A37334', 16, 2)
    expect(result).to.deep.equal(expected)
    done()
  })
})