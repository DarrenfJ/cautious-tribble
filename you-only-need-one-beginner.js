// You only need one - Beginner
// https://www.codewars.com/kata/you-only-need-one-beginner/train/javascript

function check(a,x){
  for (var i =0;i<a.length;i++) {
   if(a[i] === x) {
     return true;
   }
  }
  return false;
};
