// Find the unique number
// https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript

function findUniq(arr) {
  // do magic
  if (arr[0] !== arr [1] && arr[0] === arr[2]) {
     return arr[1];
  } else if (arr[0] !== arr [1] && arr[0] !== arr[2] && arr[1] === arr[2]) {
    return arr[0];
  } else { 
     for(var i = 1; i < arr.length;i++) {
     if (arr[i] !== arr[1]) {
        return arr[i];
       } 
     }
      return arr[i+1];
  }
}
