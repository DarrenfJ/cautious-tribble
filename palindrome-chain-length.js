// Palindrome chain length
// https://www.codewars.com/kata/palindrome-chain-length/train/javascript

function revNumber(num) {
  return parseInt(num.toString().split('').reverse().join(''));
  }
  
  // Check for Palindrome
// from: https://www.freecodecamp.org/challenges/check-for-palindromes

function palindrome(num) {
  // Good luck!
  var str = num.toString();
  var testStr = str;
  testStr = testStr.split("").reverse().join("");
  if (str === testStr) {
    return true;
  } else {
    return false;
  }  
}

var palindromeChainLength = function(n) {
// rev number, add it, check for palindrome, keep count
  var steps = 0;
  if (palindrome(n)) {
   return steps;
  }
  while (steps < 100) {
    var rev = revNumber(n)
     var addNum = n + rev;
     steps++;
     if (palindrome(addNum)) {
       return steps;
      } else {
        n = addNum;
      }
    }
  console.log("You have hit 100 tries");
};