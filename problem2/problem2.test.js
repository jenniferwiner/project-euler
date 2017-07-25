var assert = require('chai').assert
var expect = require('chai').expect
var evenFib = require('./problem2')

describe('Even Fib', function() {
  it('should return sum of the even Fibonacci numbers below 4,000,000', function() {
    expect(evenFib()).to.deep.equal(4613732)
  });
});
