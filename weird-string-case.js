// WeIrD StRiNg CaSe
// https://www.codewars.com/kata/52b757663a95b11b3d00062d/train/javascript
// using:
// https://stackoverflow.com/questions/6211613/testing-whether-a-value-is-odd-or-even

function isEven(n) {
   return n % 2 == 0;
}

function toWeirdCase(string){
  var sentenceArr = [];
  //TODO
  // split it into words
  var wordArr=string.split(' ');
    for (var i = 0;i < wordArr.length;i++) {
    //split each word into an array of letters
      var arr=wordArr[i].split('');
      //first [0 index] to upper case
      arr[0] = arr[0].toUpperCase();
       for (var j = 1;j<arr.length;j++) {
       //is it even?
        if (isEven(j)) {
          arr[j] = arr[j].toUpperCase();
        } else {
        // odd
          arr[j] = arr[j].toLowerCase();
        }
      }
      // join the array into a word
      var word=arr.join('');
      // push the word into another array
      sentenceArr.push(word);
      console.log(sentenceArr);
    }
    string = sentenceArr.join(' ');
   return string;
}

// for future reference if I want odd
/*
function isEven(n) {
   return n % 2 == 0;
}

function isOdd(n) {
   return Math.abs(n % 2) == 1;
}
*/