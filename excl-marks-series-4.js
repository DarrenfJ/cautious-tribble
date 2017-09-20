// Exclamation marks series #4: Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string
// https://www.codewars.com/kata/exclamation-marks-series-number-4-remove-all-exclamation-marks-from-sentence-but-ensure-a-exclamation-mark-at-the-end-of-string

function remove(s){
  //coding and coding....
  var end = s.length-1;
  for (var i = 0; i<end;i++) {
    if (s.charAt(i)=== "!") {
      var strFront = s.slice(0, i);
      var strBack = s.slice(i+1, s.length);
      s = strFront + strBack;
      // you cut out an item so move back '1' and change your ending point of for loop
      i--;
      end--;
    }
  }
  // ensure a ! at end if not
  if (s.charAt(s.length-1) !== "!") {
    s = s + "!";
  }
  return s;
}
