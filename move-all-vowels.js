// Move all vowels
// https://www.codewars.com/kata/move-all-vowels/train/javascript
//
// using:
// https://www.elated.com/articles/manipulating-javascript-arrays/

function moveVowel(input) {
  var arr = input.split('');
  var arrMove = [];
  var arrVowel = [];
  for (var i = 0; i < arr.length; i++ ) {
    if (arr[i] === 'a' || arr[i] === 'e' || arr[i] === 'i' || arr[i] === 'o' || arr[i] === 'u') {
      arrVowel.push(arr[i]);
    } else {
      arrMove.push(arr[i]);
    }
  }
  var move = arrMove.join('') + arrVowel.join('');
  return move;
}