// find the remainder
// https://www.codewars.com/kata/find-the-remainder/train/javascript
//

function remainder(a, b){
  // Divide the larger argument by the smaller argument and return the remainder
  var large;
  var small;
  if (a > b) {
    large = a;
    small = b;
  } else {
    large = b;
    small = a;
  }
  var rem = large%small;
  return rem;
}

