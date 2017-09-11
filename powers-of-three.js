// powers of three
// https://www.codewars.com/kata/powers-of-3/train/javascript
// using:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/log
// https://stackoverflow.com/questions/4668407/check-whether-a-float-number-contains-decimals-or-not

function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x);
}

function largestPower(n){
  // return the largest integer k such that 3^k < n
  // test if it's a perfect 3rd root
  var exp = getBaseLog(3, n).toFixed(10);
  var testExp = Math.pow(3, exp);
   if (n != testExp) { 
   // if it isn't round it down
    var power = Math.floor(exp);
  } else {
  // if it is, subtract 1 because it's < and not <=
      power = Math.floor(exp - 1);
  }  
  return power
}