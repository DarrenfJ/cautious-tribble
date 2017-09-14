// Nice Array
// https://www.codewars.com/kata/nice-array/train/javascript

function isNice(arr){
  var test = false;
  if (arr === []) {
    return false;
  }
  for (var i = 0 ; i < arr.length;i++) {
    test = false;
    for (var j = 0 ; j < arr.length;j++) {
      if (arr[i] === (arr[j]+1) || arr[i] === (arr[j]-1) ) {
        test = true; 
        break;
      }
        if (j === arr.length-1 && test === false) {
          return test;
        }
    }
  }
    return test;
}