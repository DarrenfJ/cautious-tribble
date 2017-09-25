// Age Range Compatibility Equation
// https://www.codewars.com/kata/age-range-compatibility-equation/train/javascript

function datingRange(age){
  var max = 0;
  var min = 0;
  var range = "";
  if (age <= 14 ) {
    max = Math.floor(age + 0.10 * age);
    min = Math.floor(age - 0.10 * age);  
  } else {
    max = Math.floor((age-7)*2);
    min = Math.floor((age/2) + 7);  
  }
  range = min + "-" + max;
  //return min-max
  return range;
}
