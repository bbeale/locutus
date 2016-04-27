// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var ctype_graph = require('../../../../src/php/ctype/ctype_graph.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/ctype/ctype_graph.js (tested in test/languages/php/ctype/test-ctype_graph.js)', function () {
  it('should pass example 1', function (done) {
    var expected = true
    var result = ctype_graph('!%')
    expect(result).to.deep.equal(expected)
    done()
  })
})
