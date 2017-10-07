// Calculate average
// https://www.codewars.com/kata/calculate-average/train/javascript

function find_average(array) {
  // your code here
  var sum = 0;
  var avg = 0;
  for (var i = 0; i < array.length;i++) {
    sum = sum + array[i];
  }
  avg = sum/(array.length);
  return avg;
}
