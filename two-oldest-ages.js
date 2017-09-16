// Two Oldest Ages
// https://www.codewars.com/kata/two-oldest-ages-1

// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages){
  var oldestAges = [];
  var arr = ages.sort(function(a, b) {
  return a - b;
  });
  oldestAges.push(arr[arr.length-2]);
  oldestAges.push(arr[arr.length-1]);
  return oldestAges;
}

