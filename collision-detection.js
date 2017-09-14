// Collision Detection
// https://www.codewars.com/kata/collision-detection/train/javascript

function collision(x1, y1, radius1, x2, y2, radius2) {
  // collision?
  var dx = x2 - x1;
  var dy = y2 - y1;
  var hyp = Math.sqrt((Math.pow(dx, 2) + Math.pow(dy, 2)));
  var totRad = radius1 + radius2;
  if (totRad >= hyp) {
    return true;
  } 
  return false;
}

