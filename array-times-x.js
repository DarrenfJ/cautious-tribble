// Array Array Array
// https://www.codewars.com/kata/array-array-array/train/javascript

function explode(x){
  // find if all number and do exceptions
  var score;
  var array = [];
  // calcualte score
  if (typeof(x[0]) === "number"  && typeof(x[1]) === "number") {
    score = x[0] + x[1];
  } else if (typeof(x[0]) === "number"  || typeof(x[1]) === "number") {
      if (typeof(x[0]) === "number") {
        score = x[0];
      } else if (typeof(x[1]) === "number") {
        score = x[1];
      }
  } else {
    return 'Void!';
  }
  // then push array into new array 'score' times
  for (var i = 1; i <= score; i++) {
    array.push(x);
  }
  return array;
}