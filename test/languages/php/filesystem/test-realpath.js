// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var realpath = require('../../../../src/php/filesystem/realpath.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/filesystem/realpath.js (tested in test/languages/php/filesystem/test-realpath.js)', function () {
  it('should pass example 1', function (done) {
    var expected = 'some/_supporters/pj_test_supportfile_1.htm'
    var result = realpath('some/dir/.././_supporters/pj_test_supportfile_1.htm')
    expect(result).to.deep.equal(expected)
    done()
  })
})
