// Get the Middle Character
// https://www.codewars.com/kata/get-the-middle-character/train/javascript

function isOdd(n) {
   return Math.abs(n % 2) == 1;
}

function getMiddle(s)
{
  //Code goes here!
  var returnArr = [];
  var arr = s.split('');
  var len = arr.length;
  var midIndex = Math.floor(len/2);
  if (isOdd(len)) {
    s = arr[midIndex]; 
  } else {
    returnArr.push(arr[midIndex-1]);
    returnArr.push(arr[midIndex]);
    s = returnArr.join('');
  }
  return s;
}
