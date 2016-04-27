// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var file_get_contents = require('../../../../src/php/filesystem/file_get_contents.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/filesystem/file_get_contents.js (tested in test/languages/php/filesystem/test-file_get_contents.js)', function () {
  it('should pass example 1', function (done) {
    var expected = true
    var $buf = file_get_contents('test/never-change.txt')
    var result = $buf.indexOf('hash') !== -1
    expect(result).to.deep.equal(expected)
    done()
  })
})
