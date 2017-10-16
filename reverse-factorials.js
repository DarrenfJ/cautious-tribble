// Reverse Factorials
// https://www.codewars.com/kata/reverse-factorials/train/javascript

function reverseFactorial(num) {
  // happy coding!
  var factorial = 1;
  var answer = "None";
  var newNum = num;
  if (num === 1) {
    answer = '1!';
    return answer;
  }
  for (var i = 2; i < 1000; i++) {
    if (newNum/i !== 1 ) {
      newNum = newNum/i;
    } else {
      factorial = i;
    }
    if (factorial !== 1) {
      var answer = factorial +'!';
    }
  }
  return answer;
}