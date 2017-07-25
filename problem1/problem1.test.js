var assert = require('chai').assert
var expect = require('chai').expect
var sumMultiples = require('./problem1')

describe('sumMultiples', function() {
  it('Find the sum of the multiples of 3 or 5 below 1000', function() {
    expect(sumMultiples()).to.deep.equal(233168)
  });
});
