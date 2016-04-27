// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
process.env.TZ = 'UTC'
var expect = require('chai').expect
var Count = require('../../../../src/golang/strings/Count.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/golang/strings/Count.js (tested in test/languages/golang/strings/test-Count.js)', function () {
  it('should pass example 1', function (done) {
    var expected = 3
    var result = Count("cheese", "e")
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    var expected = 5
    var result = Count("five", "") // before & after each rune
    expect(result).to.deep.equal(expected)
    done()
  })
})
