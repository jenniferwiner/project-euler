// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

function sumMultiples() {
  let sum = 0

  // add all the multiples of 3 below 1000
  for (let i = 3; i < 1000; i += 3) {
    sum += i
  }

  // add all the multiples of 5 below 1000)
  for (let i = 5; i < 1000; i += 5) {
    sum += i
  }

  // subtract all the multiples of 15 below 1000 - this will handle all repeats (i.e., numbers that are multiples of 3 AND 5)
  for (let i = 15; i < 1000; i += 15) {
    sum -= i
  }

  return sum
}

module.exports = sumMultiples
