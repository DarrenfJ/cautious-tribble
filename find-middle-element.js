// Find the middle element
// https://www.codewars.com/kata/find-the-middle-element/train/javascript
// using:
// https://davidwalsh.name/javascript-clone-array

var gimme = function (inputArray) {
  // Implement this function
  // clone array to play with
  var arr = inputArray.slice(0);
  // sort max to min
  arr.sort(function(a, b){return b-a});;
  // find middle value
  var middle = arr[1];
  // find index of middle
  for (var i = 0; i< inputArray.length;i++) {
   if (inputArray[i] === middle ) {
     return i;
   }
  }
  // this will never return, but let's say in the future someone sends an array wiht a letter or something buwahahaha!
  return "couldn't find it";
};
