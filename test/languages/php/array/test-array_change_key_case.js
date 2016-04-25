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
var array_change_key_case = require('/Users/kvz/code/phpjs/src/php/array/array_change_key_case.js')

describe('php.array.array_change_key_case.js', function () {
  it('should pass example 1', function (done) {
    array_change_key_case(42)
    var expected = false
    var result = array_change_key_case(42)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    array_change_key_case([ 3, 5 ])
    var expected = [3, 5]
    var result = array_change_key_case([ 3, 5 ])
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 3', function (done) {
    array_change_key_case({ FuBaR: 42 })
    var expected = {"fubar": 42}
    var result = array_change_key_case({ FuBaR: 42 })
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 4', function (done) {
    array_change_key_case({ FuBaR: 42 }, 'CASE_LOWER')
    var expected = {"fubar": 42}
    var result = array_change_key_case({ FuBaR: 42 }, 'CASE_LOWER')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 5', function (done) {
    array_change_key_case({ FuBaR: 42 }, 'CASE_UPPER')
    var expected = {"FUBAR": 42}
    var result = array_change_key_case({ FuBaR: 42 }, 'CASE_UPPER')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 6', function (done) {
    array_change_key_case({ FuBaR: 42 }, 2)
    var expected = {"FUBAR": 42}
    var result = array_change_key_case({ FuBaR: 42 }, 2)
    expect(result).to.deep.equal(expected)
    done()
  })
  it.skip('should pass example 7', function (done) {
    ini_set('locutus.return_locutus_arrays', 'on')
    var arr = [{a: 0}, {B: 1}, {c: 2}]
    var newArr = array_change_key_case(arr)
    newArr.splice(1, 1)
    var expected = [{b: 1}]
ini_set('locutus.return_locutus_arrays', 'on')
var arr = [{a: 0}, {B: 1}, {c: 2}]
var newArr = array_change_key_case(arr)
    var result = newArr.splice(1, 1)
    expect(result).to.deep.equal(expected)
    done()
  })
})