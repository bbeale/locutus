// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var atanh = require('../../../../src/php/math/atanh.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/math/atanh.js (tested in test/languages/php/math/test-atanh.js)', function () {
  it('should pass example 1', function (done) {
    var expected = 0.3095196042031118
    var result = atanh(0.3)
    expect(result).to.deep.equal(expected)
    done()
  })
})
