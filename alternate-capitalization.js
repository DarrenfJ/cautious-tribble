// Alternate capitalization
// https://www.codewars.com/kata/alternate-capitalization/train/javascript

function capitalize(s){
  var arr = s.split('');
  var arrOdd = [];
  arrOdd.push(arr[0]);
  arr[0] = arr[0].toUpperCase();
  for (var i = 1; i < arr.length;i++) {
    if (i%2 === 0) {
      arrOdd.push(arr[i]);
      arr[i] = arr[i].toUpperCase();    
    } else {
      arrOdd[i] = arr[i].toUpperCase();
    }
  }
  var sEven = arr.join('');
  var sOdd = arrOdd.join('');
  return [sEven, sOdd];
};

