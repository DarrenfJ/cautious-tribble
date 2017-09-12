// noobCode 01: SUPERSIZE ME.... or rather, this integer!
// https://www.codewars.com/kata/noobcode-01-supersize-me-dot-dot-dot-or-rather-this-integer/train/javascript

function superSize(num){
  //split into an array
  var str = num.toString();
  arr = str.split("");
  arr.sort().reverse();
  str = arr.join('');
  num = parseInt(str);
  return num
}
