// Square Every Digit
// https://www.codewars.com/kata/square-every-digit/train/javascript

function squareDigits(num){
  //may the code be with you
  var sqrArr = [];
  var arr = num.toString().split('');
  for (var i = 0;i<arr.length;i++ ) {
    sqrArr[i]=Math.pow(parseInt(arr[i]), 2);
  }
  num = sqrArr.join('');
  return parseInt(num);
}