// Even odd disparity
// https://www.codewars.com/kata/even-odd-disparity/train/javascript

function isEven(n) {
   return n % 2 == 0;
}

function isOdd(n) {
   return Math.abs(n % 2) == 1;
}

function solve(a){
  var numEven = 0;
  var numOdd = 0;
  var disparity = 0;
  // iterate and check it's a number
  for (var i = 0; i < a.length; i++) {
    if (typeof(a[i]) === "number") {
      if (isEven(a[i])) {
        numEven++;
      } else if (isOdd(a[i])) {
        numOdd++;
      } else {
        continue;
      }
    } else {
      continue;
    }
  }
  disparity = numEven-numOdd;
    return disparity;
};


