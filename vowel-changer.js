// Vowel Changer
// https://www.codewars.com/kata/vowel-changer/train/javascript

function vowelChange(str, vow) {
  var arrStr = str.split('');
  for (var i = 0; i < arrStr.length ; i++) {
    if (arrStr[i] === 'a' || arrStr[i] === 'e' || arrStr[i] === 'i' || arrStr[i] === 'o' || arrStr[i] === 'u') {
      arrStr[i] = vow;
    }
  }
  str = arrStr.join('');
  return str;
}
