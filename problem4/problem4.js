// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

// this is not finding the largest number, just a palindrome... because of the way it is incrementing
function largestPalindrome() {
  for (var i = 999; i > 0; i--) {
    for (var j = 999; i > 0; i--) {
      if (isPal(i*j)) {
        return i*j
      }
    }
  }
}

function isPal(n){
  let nString = n.toString()
  let firstHalf = nString.slice(0, Math.floor(nString.length/2))
  let secondHalf = nString.length % 2 === 0 ? nString.slice(nString.length/2) : nString.slice(Math.floor(nString.length/2) + 1)
  return firstHalf === secondHalf.split('').reverse().join('')
}
largestPalindrome()
module.exports = largestPalindrome
