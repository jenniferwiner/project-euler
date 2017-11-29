let assert = require('chai').assert
let expect = require('chai').expect
let smallestMultiple = require('./problem5')

describe('Smallest Multiple', function() {
  it('should find the smallest positive number that is evenly divisible by all of the numbers from 1 to 20', function() {
    expect(smallestMultiple()).to.deep.equal(null)
  })
})
