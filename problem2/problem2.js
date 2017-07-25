// Even Fibonacci Numbers

// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be: 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

// FIRST SOLUTION, takes 1108 ms - TOO LONG, refactor, terrible bigO
function recursiveEvenFib() {
  let n = 0
  let sum = 0

  function innerFib(n) {
    if (n === 0) return 0
    if (n === 1) return 1
    return innerFib(n-1) + innerFib(n-2)
  }

  while (innerFib(n) < 4000000) {
   if (innerFib(n) % 2 === 0) {
     sum += innerFib(n)
   }
   n++
   innerFib(n-1)
  }

  return sum
}

// Iterative solution - 9 ms
function evenFib() {
  let prev = 0
  let curr = 1
  let sum = 0

  while (curr < 4000000) {
    let temp = prev + curr
    prev = curr
    curr = temp
    if (curr % 2 == 0) {
      sum += curr
    }
  }
  return sum
}

evenFib()

// Comparison between Iterative & Recursive Approaches from Performance Considerations
// https://www.codeproject.com/Articles/21194/Iterative-vs-Recursive-Approaches

module.exports = evenFib
