// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var utf8_encode = require('../../../../src/php/xml/utf8_encode.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/xml/utf8_encode.js (tested in test/languages/php/xml/test-utf8_encode.js)', function () {
  it('should pass example 1', function (done) {
    var expected = 'Kevin van Zonneveld'
    var result = utf8_encode('Kevin van Zonneveld')
    expect(result).to.deep.equal(expected)
    done()
  })
})
