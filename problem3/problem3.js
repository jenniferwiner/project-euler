// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143?

function largestPrime(n) {
  let counter = 1
  let highest = 1
  while (n >= counter) {
    if (n % counter === 0) {
      n = n/counter
      highest = counter
    }
    counter++
  }
  return highest
}

module.exports = largestPrime
