// Changing letters
// https://www.codewars.com/kata/changing-letters/train/javascript

function change(letter) {
  return letter.toUpperCase();
}
function swap(st){
var arr = st.split('');
for (var i = 0; i < arr.length; i++ ) {
  if (arr[i] === "a" || arr[i] === "e" || arr[i] === "i" || arr[i] === "o" || arr[i] === "u") {
   arr[i] = change(arr[i]);
  }  
}
  st = arr.join('');
  return st //with uppercased vowels 
}
