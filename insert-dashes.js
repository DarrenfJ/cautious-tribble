// Insert dashes
// https://www.codewars.com/kata/insert-dashes/train/javascript

function isOdd(n) {
   return Math.abs(n % 2) == 1;
}

function insertDash(num) {
var newThang = [];
   //code me
   var arr = num.toString().split('');
    for (var i = 0; i < arr.length;i++) {
    newThang.push(arr[i]);
      if (isOdd(parseInt(arr[i])) && isOdd(parseInt(arr[i+1]))) {
        newThang.push('-');
      }
      var numStr = newThang.join('');
    }
    return numStr;
}

