// Lowercase strings in array
// https://www.codewars.com/kata/lowercase-strings-in-array/train/javascript

function arrayLowerCase(arr) {
  // return array of strings in lowercase
  for (var i = 0 ; i < arr.length;i++) {
    if (typeof arr[i] === 'string') {
      //lowercase it
      arr[i] = arr[i].toLowerCase();      
    }
  }
  return arr;
}

