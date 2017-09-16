// Possiblities Array
// https://www.codewars.com/kata/possiblities-array/train/javascript

function zeroAndLengthCheck(arr) {
  // for loop. is there a 0? is there a a.length-1?
 var zero = false;
 var lengthNo = false;
   for (var i = 0;i <arr.length;i++) {
     if (arr[i] === 0) {zero = true;}
     if (arr[i] === arr.length-1) {lengthNo = true;}
   }
   if (zero && lengthNo) {
     return true;
   } else {
      return false;
   }
}

function isAllPossibilities(x){
   var prepCheck = zeroAndLengthCheck(x);
   // check array of 1 as exception
   if (prepCheck && x.length === 1) {return true;}
   // reject anything wihtout a zero or a value x.length-1
   if (!prepCheck) {return false};
   // sort array,
   var checkArr = x.sort();
  // edge case where a otherwise valid value is a neg
  if (checkArr[0] !== 0 ) {return false;}
  for (var i = 0;i<x.length;i++) {
    // check for sequential numbers
      if (checkArr[i] !== checkArr[i+1]-1) {
        return false;
      } else {
        return true;
      }
  }
}