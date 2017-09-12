// diff.arr
// https://www.codewars.com/kata/array-dot-diff/train/javascript
// used:
// cloning an array
// https://davidwalsh.name/javascript-clone-array

function array_diff(a, b) {
  var arr = [];
  for (var i = 0; i < a.length;i++) {
    if (a[i] !== b[0]) {
      arr.push(a[i]);       
     }
  }
 return arr;
}
