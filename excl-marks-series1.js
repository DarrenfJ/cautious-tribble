// Exclamation marks series #1: Remove a exclamation mark from the end of string
// https://www.codewars.com/kata/exclamation-marks-series-number-1-remove-a-exclamation-mark-from-the-end-of-string/train/javascript

function remove(s){
  //coding and coding...
  if (s.charAt(s.length-1)=== "!") {
    var s = s.slice(0, s.length-1);
  }
  return s;
}