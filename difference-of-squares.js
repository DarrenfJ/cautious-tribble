// Difference Of Squares
// https://www.codewars.com/kata/difference-of-squares/train/javascript

function differenceOfSquares(x){
  // ...
  var sqrSum = 0;
  var sumSqr = 0;
  for (var i = 1; i <= x; i++) {
    sqrSum = sqrSum + i;
    sumSqr = sumSqr + Math.pow(i, 2);
  }
  sqrSum = Math.pow(sqrSum, 2);
  var diffSqrs = sqrSum - sumSqr;
  return diffSqrs;
}