// Sum of the first nth term of Series
// https://www.codewars.com/kata/sum-of-the-first-nth-term-of-series/train/javascript

function SeriesSum(n)
{
  // Happy Coding ^_^
  if (n === 0) return "0.00";
  var sum=1;
  var denom = 1;
  for (var i=1;i<n;i++) {
    denom = denom + 3;
    sum = sum + 1/denom;
  }
  sum = sum.toFixed(2);
  n=sum.toString();
  return sum
}
