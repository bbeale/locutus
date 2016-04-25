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
var soundex = require('/Users/kvz/code/phpjs/src/php/strings/soundex.js')

describe('php.strings.soundex.js', function () {
  it('should pass example 1', function (done) {
    soundex('Kevin')
    var expected = 'K150'
    var result = soundex('Kevin')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    soundex('Ellery')
    var expected = 'E460'
    var result = soundex('Ellery')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 3', function (done) {
    soundex('Euler')
    var expected = 'E460'
    var result = soundex('Euler')
    expect(result).to.deep.equal(expected)
    done()
  })
})