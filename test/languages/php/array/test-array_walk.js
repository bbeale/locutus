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
var array_walk = require('/Users/kvz/code/phpjs/src/php/array/array_walk.js')

describe.skip('php.array.array_walk.js', function () {
  it('should pass example 1', function (done) {
    array_walk ({'a':'b'}, 'void', 'userdata')
    var expected = true
    var result = array_walk ({'a':'b'}, 'void', 'userdata')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    array_walk ('a', 'void', 'userdata')
    var expected = false
    var result = array_walk ('a', 'void', 'userdata')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 3', function (done) {
    array_walk ([3, 4], function () {}, 'userdata')
    var expected = true
    var result = array_walk ([3, 4], function () {}, 'userdata')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 4', function (done) {
    array_walk ({40: 'My age', 50: 'My IQ'}, [window, 'prompt'])
    var expected = true
    var result = array_walk ({40: 'My age', 50: 'My IQ'}, [window, 'prompt'])
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 5', function (done) {
    ini_set('locutus.return_locutus_arrays', 'on')
    var arr = array({40: 'My age'}, {50: 'My IQ'})
    array_walk(arr, [window, 'prompt'])
    var expected = '[object Object]'
ini_set('locutus.return_locutus_arrays', 'on')
var arr = array({40: 'My age'}, {50: 'My IQ'})
    var result = array_walk(arr, [window, 'prompt'])
    expect(result).to.deep.equal(expected)
    done()
  })
})