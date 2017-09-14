// Check for Palindrome
// from: https://www.freecodecamp.org/challenges/check-for-palindromes

function palindrome(str) {
  // Good luck!
  str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  str = str.replace(/\s/g,'');
  str = str.toLowerCase();
  var testStr = str;
  testStr = testStr.split("").reverse().join("");
  if (str === testStr) {
    return true;
  } else {
    return false;
  }  
}