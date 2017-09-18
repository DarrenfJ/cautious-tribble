// Mutate My Strings
// https://www.codewars.com/kata/mutate-my-strings/train/javascript

function mutateMyStrings(stringOne, stringTwo){
var arrOne = stringOne.split('');
var arrTwo = stringTwo.split('');
var stepwiseResult = stringOne + "\n";
  for (var i = 0; i < arrOne.length;i++) {
    var tempStr = "";
      if (arrOne[i] !== arrTwo[i]) {
        arrOne[i] = arrTwo[i];
        tempStr = arrOne.join('');
        stepwiseResult = stepwiseResult + tempStr + "\n";
      }
  }
  return stepwiseResult;
}