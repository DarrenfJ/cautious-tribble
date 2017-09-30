// Remove the minimum
// https://www.codewars.com/kata/remove-the-minimum/train/javascript

function removeSmallest(numbers) {
  var lowest = 0;
  if (numbers.length === 1) {
    numbers.pop();
    return numbers;
  } else if(numbers.length > 0){   
    //or **if(arrayName.length)**
    //this array is not empty 
    // clone array
    var arr = numbers.slice(0);
    // sort
    arr.sort(function(a, b){return b-a});
    lowest = arr[arr.length-1];
    arr.pop();
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] === lowest) {
          // splice out lowest
          numbers.splice(i, 1);
          return numbers;
      }
    }
  } else {
   //this array is empty
   return numbers;
  }
}