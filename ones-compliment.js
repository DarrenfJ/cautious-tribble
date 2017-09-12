// Ones' Complement
// https://www.codewars.com/kata/ones-complement/train/javascript

function onesComplement(n) {
  // your code here
  arr = n.split('');
  for (var i =0;i<arr.length;i++) {
    if (arr[i] === "1" ) {
      arr[i] = "0";
    } else {
      arr[i] = "1";
    }
  }
  n = arr.join('');
  return n;
};