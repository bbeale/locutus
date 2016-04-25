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
var atanh = require('/Users/kvz/code/phpjs/src/php/math/atanh.js')

describe('php.math.atanh.js', function () {
  it('should pass example 1', function (done) {
    atanh(0.3)
    var expected = 0.3095196042031118
    var result = atanh(0.3)
    expect(result).to.deep.equal(expected)
    done()
  })
})