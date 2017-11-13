// What dominates your array?
// https://www.codewars.com/kata/what-dominates-your-array/train/javascript

/* took too long to run
my original code

function countFreq(arr, n) {
  var freq = 0;
  for (var i = 0; i<arr.length;i++) {
    if (arr[i] === n) {
      freq++;
    }
  }
  return freq;
}
function dominator(arr) {
   //code me
   var dominator = -1;
   var half = (arr.length/2);
   console.log("orig: " +arr);
   console.log("half: " +half);
   arr.sort(function(a, b){return b-a});
   console.log("rev: " +arr);
   // count number of times an element occurs
   for (var i = 0; i < arr.length; i++ ) {
   console.log("i: " +i);
   console.log("val: " +arr[i]);
   // if the arr value is same as last, ignore, else
     if (arr[i] !== arr[i-1]) {
       var freq = countFreq(arr, arr[i]);
       console.log("freq: " +freq);
       //compare to 'half'
       if (freq > half) {
       // if greater than, pass it
       console.log("greater than half!");
         return arr[i];
       } 
      } /*else {
      console.log("not half");
     } */
   }
   return -1; 
} */

//final code

function dominator(numbers) {
   //code me
   var half = (numbers.length/2);
   var countedNum = numbers.reduce(function (num, nums) {
      if (typeof num[nums] == 'undefined') {
        num[nums] = 1;
      } else {
        num[nums] += 1;
      }
    return num;
  }, {});
  for (var key in countedNum) {
    if (countedNum[key] > half) {
    var number = parseInt(key);
      return number;
    }
  }

   return -1;
   
}



