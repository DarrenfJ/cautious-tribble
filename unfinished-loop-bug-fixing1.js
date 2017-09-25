// Unfinished Loop - Bug Fixing #1
// https://www.codewars.com/kata/unfinished-loop-bug-fixing-number-1/train/javascript

function createArray(number){
  var newArray = [];  
  for(var counter = 1; counter <= number; counter++){
    newArray.push(counter);
  }  
  return newArray;
}