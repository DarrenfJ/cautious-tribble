// Vowel Count
// https://www.codewars.com/kata/vowel-count/train/javascript

function getCount(str) {
  var vowelsCount = 0;
  
  // enter your majic here
  for (var i = 0; i < str.length; i++) {
    if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") {
      vowelsCount++;
    }
  }
  return vowelsCount;
}