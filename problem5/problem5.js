// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

function smallestMultiple() {
//
  let divisors = [3, 5, 7, 9, 11, 13, 15, 17, 19]
  let status = true
  let incrementer = 20

  while (status) {
    for (let divisor of divisors) {
      if (incrementer % divisor !== 0) {
        status = true
        break
      }
      status = false
    }
    incrementer += 20
  }

  return incrementer
}

module.exports = smallestMultiple
