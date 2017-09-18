// The Hashtag Generator
// https://www.codewars.com/kata/the-hashtag-generator/train/javascript
// using
// https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript?noredirect=1&lq=1

function generateHashtag (str) {
  if (str === "") {
    return false;
  }
  if (str.length>140) {
  // str = str.slice(0, 141)
  return false;
  }
  var arr = str.split(' ');
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    if (arr[i] === " ") {
      arr[i] = '';
    }
  }
  str = arr.join('');
  str = "#" + str;
  return str;
}
