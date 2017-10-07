// Most digits
// https://www.codewars.com/kata/most-digits/train/javascript

function findLongest(array){
  // code here
  var maxlength = 0;
  var maxNum = 0;
  for (var i = 0; i<array.length;i++) {
    var arrStr = array[i].toString();
    if (arrStr.length > maxlength) {
      maxNum = array[i];
      maxlength = arrStr.length;
    }
  }
  return maxNum;
}


