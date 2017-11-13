// String matchup
// https://www.codewars.com/kata/string-matchup/train/javascript

function solve(a,b){
  var solved = [];
  var count = 0;
  for (var i = 0 ; i < b.length;i++) {
    count = 0;
    for (var j = 0; j < a.length; j++ ) {
     if (b[i] === a[j]) {
       count++;
     }
    }
    solved.push(count);
  }
  return solved;
}