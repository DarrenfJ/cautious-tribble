// Multiply the strings in the array
// https://www.codewars.com/kata/multiply-the-strings-in-the-array/train/javascript

function arrMultiply(arr){
   //your solution
   var intArr = [];
   //convert items to integers
   for (var i =0; i < arr.length; i++ ) {
     intArr.push(parseInt(arr[i]));
   }
   var mult = arr[0]*arr[1];
   //convert back to string
   answer = "" + mult;
   return answer;
}

