// Highest and Lowest
// https://www.codewars.com/kata/highest-and-lowest/train/javascript
//
// using
// http://www.devign.me/javascript-tip-cast-a-whole-array-to-a-different-type/

function highAndLow(numbers){
  // ...
  
  var arr = numbers.split(' ');
  var arrNum=arr.map(Number);
  arrNum.sort(function(a, b){return a-b});
  var highLow = arrNum[arrNum.length-1] + " " + arrNum[0];
  return highLow;
}