// Simple Pig Latin
// https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript

function pigIt(str){
  //Code here
  var arr = str.split(' ');
  for(var i = 0;i<arr.length;i++) {
    var wordArr = arr[i].split('');
    var firstLetter = wordArr[0];
    wordArr.shift();
    wordArr.push(firstLetter + "ay");
    arr[i] = wordArr.join('');
  }
  str = arr.join(' ');
  return str;
}