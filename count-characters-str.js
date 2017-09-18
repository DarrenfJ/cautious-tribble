// Count characters in your string
// https://www.codewars.com/kata/count-characters-in-your-string/train/javascript

function count (string) {  
  // The function code should be here
  var aCount = 0;
  var bCount = 0;
  var arr = string.split('');
  for (var i = 0;i<arr.length;i++) {
    if (arr[i] === "a") {
      aCount++;
    } else if (arr[i] === "b") {
      bCount++;
    }   
  }
  if (aCount === 0 && bCount === 0) {
    return {};
  }
   if (aCount === 0) {
    return {b: bCount};
  }
   if (bCount === 0) {
    return {a: aCount};
  }
   return {a: aCount, b: bCount};
}