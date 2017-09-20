// Exclamation marks series #3: Remove all exclamation marks from sentence except at the end
// https://www.codewars.com/kata/exclamation-marks-series-number-3-remove-all-exclamation-marks-from-sentence-except-at-the-end

function remove(s){
  //coding and coding....
   // this is a test from end to first character to reset end of for loop
   var endIndex = s.length-1;
   // probably should figure out a better way to prevent an endless loop
   var count = 0;
   var endOfExclam = endIndex;
   while (endIndex >= 0 && count < 100) {
      if (s.charAt(endIndex) === "!")
      { 
        endOfExclam = endIndex;
        endIndex--;
      }
     count++;
   }
  for (var i = 0; i<endOfExclam;i++) {
    if (s.charAt(i)=== "!") {
      var strFront = s.slice(0, i);
      var strBack = s.slice(i+1, s.length);
      s = strFront + strBack;
      // you cut out an item so move back '1' and change your ending point of for loop
      i--;
      endOfExclam --;
    }
  }
  return s;
}