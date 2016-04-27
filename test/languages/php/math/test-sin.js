// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var sin = require('../../../../src/php/math/sin.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/math/sin.js (tested in test/languages/php/math/test-sin.js)', function () {
  it('should pass example 1', function (done) {
    var expected = -9834330
    var result = Math.ceil(sin(8723321.4) * 10000000)
    expect(result).to.deep.equal(expected)
    done()
  })
})
