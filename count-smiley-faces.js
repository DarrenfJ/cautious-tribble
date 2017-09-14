// Count the smiley faces!
// https://www.codewars.com/kata/583203e6eb35d7980400002a/train/javascript

// refactor these into one function next cut
function checkEyes(eyes) {
  if (eyes === ":" || eyes === ";") {
    return true;
  }
  return false;
}
function checkNose(nose) {
  if (nose === "-" || nose === "~") {
    return true;
  }
  return false;
}
function checkMouth(mouth) {
  if (mouth === ")" || mouth === "D") {
    return true;
  }
  return false;
}
//return the total number of smiling faces in the array
function countSmileys(arr) {
  var count = 0;
  var smileyArr = [];
    for (var i = 0; i < arr.length;i++) {
      smileyArr = arr[i].split('');
      // passes --> : ; - ~ ) D
      if (smileyArr.length === 2) {
      // can probably figure out how to refactor these into something smaller
      // switch statements?
        if (checkEyes(smileyArr[0]) && checkMouth(smileyArr[1])) {
        count++;
        }
      } else if (smileyArr.length === 3) {
        if (checkEyes(smileyArr[0]) && checkNose(smileyArr[1]) && checkMouth(smileyArr[2])) {
        count++;
        }
       }    
    }
   return count;
}
