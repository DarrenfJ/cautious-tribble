//Complementary DNA
//https://www.codewars.com/kata/complementary-dna/train/javascript
// using
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

function DNAStrand(dna){
  //your code here
  var dnaArray = dna.split('');
  for (var i=0;i<dnaArray.length;i++) {
  switch (dnaArray[i]) {
  case 'A':
    dnaArray[i] = "T";
    break;
  case 'T':
    dnaArray[i] = "A";
    break;
  case 'C':
    dnaArray[i] = "G";
    break;
    case 'G':
    dnaArray[i] = "C";
    break;
  c
  default:
    console.log('Sorry, not an dna strand');
  }
dna=dnaArray.join('');
}
return dna;
}