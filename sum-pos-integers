// Sum of two lowest positive integers
// http://www.codewars.com/kata/sum-of-two-lowest-positive-integers/train/javascript
// from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// https://davidwalsh.name/javascript-clone-array

function sumTwoSmallestNumbers(numbers) {  
  //Code here
  var clone = numbers.slice(0);
  clone.sort(function(a, b) {
  return a - b;
});
  var answer=clone[0] + clone[1];
  return answer
};
