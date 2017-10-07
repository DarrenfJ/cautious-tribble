// All unique
// https://www.codewars.com/kata/all-unique/train/javascript

function hasUniqueChars(str){
  // ...
  var arr = str.split('');
  for (var i = 0; i < arr.length;i++) {
    for (var j = i+1; j < arr.length;j++) {
      if (arr[i] === arr[j]) {
        return false;
      }
    }
  }
  return true;
}


