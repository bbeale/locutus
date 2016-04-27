// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var array_reduce = require('../../../../src/php/array/array_reduce.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/array/array_reduce.js (tested in test/languages/php/array/test-array_reduce.js)', function () {
  it('should pass example 1', function (done) {
    var expected = 15
    var result = array_reduce([1, 2, 3, 4, 5], function (v, w){v += w;return v;})
    expect(result).to.deep.equal(expected)
    done()
  })
})
