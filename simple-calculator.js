// simple calculator
// https://www.codewars.com/kata/simple-calculator/train/javascript
// using:
// https://stackoverflow.com/questions/7390426/better-way-to-get-type-of-a-javascript-variable

function calculator(a,b,sign){
// switch statement - default is unknown value.. then if a, b not numbers unknown value (error check first?)
  if(typeof a !== 'number' || typeof b !== 'number' ) {
    return "unknown value";
  }
  switch (sign) {
  case '+':
    return a + b;
    break;
  case '-':
    return a - b;
    break;
  case '*':
    return a * b;
    break;
  case '/':
    return a / b;
    break;  
  default:
    return "unknown value";
  }
}

