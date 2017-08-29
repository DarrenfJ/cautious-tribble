//Reverse a Number
//https://www.codewars.com/kata/reverse-a-number/train/javascript

// using toString() and parseInt()

function reverseNumber(n) {
  // ...
  // convert to string, then array
  var numStr = n.toString();
  var arr = numStr.split('');
  // is it a negative?
  var neg = false;
  if (arr[0] === '-') {
  neg = "true";
  arr.shift();
  }
  //reverse and join
  var newStr = arr.reverse().join('');
  var newNum = parseInt(newStr, 10); 
  //make it negative again!
  if (neg) {
    newNum = 0 - newNum;
  }
  return newNum;
}