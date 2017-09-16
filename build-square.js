// Build a square
// https://www.codewars.com/kata/build-a-square/train/javascript

function generateShape(int){
  var sqr = "";
  for (var i = 0;i < int;i++) {
    for (var j = 0;j < int;j++) {
      sqr = sqr + "+";
  }
    if (i !== int-1) {
      var sqr = sqr + "\n"
    }
  }
  return sqr;
}

