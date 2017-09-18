// Abbreviate a Two Word Name
// https://www.codewars.com/kata/abbreviate-a-two-word-name/train/javascript

function abbrevName(name){
    // code away
  var arr = name.split(" ");
  var firstLetter = arr[0].charAt(0);
  var lastLetter = arr[1].charAt(0);
  var abb = (firstLetter + "." + lastLetter).toUpperCase();
  return abb;
}



