// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var setlocale = require('../../../../src/php/strings/setlocale') // eslint-disable-line no-unused-vars,camelcase
var localeconv = require('../../../../src/php/strings/localeconv.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/strings/localeconv.js (tested in test/languages/php/strings/test-localeconv.js)', function () {
  it('should pass example 1', function (done) {
    var expected = {decimal_point: '.', thousands_sep: '', positive_sign: '', negative_sign: '-', int_frac_digits: 2, frac_digits: 2, p_cs_precedes: 1, p_sep_by_space: 0, n_cs_precedes: 1, n_sep_by_space: 0, p_sign_posn: 1, n_sign_posn: 1, grouping: [], int_curr_symbol: 'USD ', currency_symbol: '$', mon_decimal_point: '.', mon_thousands_sep: ',', mon_grouping: [3, 3]}
    setlocale('LC_ALL', 'en_US')
    var result = localeconv()
    expect(result).to.deep.equal(expected)
    done()
  })
})
