// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var hexdec = require('../../../../src/php/math/hexdec.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/math/hexdec.js (tested in test/languages/php/math/test-hexdec.js)', function () {
  it('should pass example 1', function (done) {
    var expected = 10
    var result = hexdec('that')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    var expected = 160
    var result = hexdec('a0')
    expect(result).to.deep.equal(expected)
    done()
  })
})
