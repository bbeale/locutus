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
var bcscale = require('/Users/kvz/code/phpjs/src/php/bc/bcscale.js')

describe('php.bc.bcscale.js', function () {
  it.skip('should pass example 1', function (done) {
    bcscale(1)
    var expected = 3
    var result = bcscale(1)
    expect(result).to.deep.equal(expected)
    done()
  })
})