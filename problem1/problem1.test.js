var assert = require('chai').assert
var expect = require('chai').expect
var sumMultiples = require('./problem1')

describe('Find the sum of the multiples of 3 or 5 below 1000', function() {
  it('should return ', function() {
    expect(sumMultiples()).to.deep.equal(233168)
  });
});
