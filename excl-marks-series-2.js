// Exclamation marks series #2: Remove all exclamation marks from the end of sentence
// https://www.codewars.com/kata/exclamation-marks-series-number-2-remove-all-exclamation-marks-from-the-end-of-sentence/train/javascript

function remove(s){
  //coding and coding....
  while (s.charAt(s.length-1) === "!") {
    s = s.slice(0, s.length-1);
  }
  return s;
}