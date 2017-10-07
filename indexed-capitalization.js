// Indexed capitalization
// https://www.codewars.com/kata/indexed-capitalization/train/javascript

function capitalize(s,arr){
  var arrStr = s.split('');
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > arrStr.length) {
      continue;
    }
    arrStr[arr[i]] = arrStr[arr[i]].toUpperCase();
  }
  s = arrStr.join('');
  return s;
};

