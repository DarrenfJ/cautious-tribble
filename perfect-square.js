// Find the next perfect square!
// http://www.codewars.com/kata/56269eb78ad2e4ced1000013/train/javascript
// using:
// https://stackoverflow.com/questions/14636536/how-to-check-if-a-variable-is-an-integer-in-javascript

function isPerSq(value) {
var sRoot = Math.sqrt(value);
  var remTest = sRoot % 1;
 if (remTest === 0 ) {
   return true;
 } else {
  return false;
  }
}
function findNextSquare(sq) {
  // Return the next square if sq if a perfect square, -1 otherwise 
  var test = isPerSq(sq);
  if (test) {
    var sqTest = sq + 1;
    test = false;
    while (!test) { 
      test =  isPerSq(sqTest);
      if (test) {
      return sqTest;
    }
    sqTest++;
  }
  
  } else {
    return -1;
  } 
}
