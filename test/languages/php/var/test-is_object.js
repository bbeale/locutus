// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var is_object = require('../../../../src/php/var/is_object.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/var/is_object.js (tested in test/languages/php/var/test-is_object.js)', function () {
  it('should pass example 1', function (done) {
    var expected = false
    var result = is_object('23')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    var expected = true
    var result = is_object({foo: 'bar'})
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 3', function (done) {
    var expected = false
    var result = is_object(null)
    expect(result).to.deep.equal(expected)
    done()
  })
})
