// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var array_pad = require('../../../../src/php/array/array_pad.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/array/array_pad.js (tested in test/languages/php/array/test-array_pad.js)', function () {
  it('should pass example 1', function (done) {
    var expected = [ 7, 8, 9]
    var result = array_pad([ 7, 8, 9 ], 2, 'a')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    var expected = [ 7, 8, 9, 'a', 'a']
    var result = array_pad([ 7, 8, 9 ], 5, 'a')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 3', function (done) {
    var expected = [ 7, 8, 9, 2, 2]
    var result = array_pad([ 7, 8, 9 ], 5, 2)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 4', function (done) {
    var expected = [ 'a', 'a', 7, 8, 9 ]
    var result = array_pad([ 7, 8, 9 ], -5, 'a')
    expect(result).to.deep.equal(expected)
    done()
  })
})
