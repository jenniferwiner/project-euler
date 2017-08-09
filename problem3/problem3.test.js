var assert = require('chai').assert
var expect = require('chai').expect
var largestPrime = require('./problem3')

describe('Largest Prime', function() {
  it('should return the largest prime factor of the number 600851475143', function() {
    expect(largestPrime(600851475143)).to.deep.equal(6857)
  });
  it('should return the largest prime factor of the number 13195', function() {
    expect(largestPrime(13195)).to.deep.equal(29)
  });
});
