// Middle Me
// https://www.codewars.com/kata/middle-me/train/javascript

function isEven(n) {
   return n % 2 == 0;
}

function isOdd(n) {
   return Math.abs(n % 2) == 1;
}

function middleMe(N, X, Y){
    //get a working solution then try to make it less than 70 characters!
    var YY = "";
    var middleMe = "";
    if (isOdd(N)) {
      return X;
    } else if (isEven(N)) {
      // create half of character Y
      for (var j = 0; j < N/2;j++) {
        YY = YY+Y;
      }
      // add 1/2Y then X then 1/2Y again
      middleMe=YY+X+YY;
    } else {
      console.log("cannot compute, not a number?");
    }
    return middleMe;
}

