//MakeUpperCase
//https://www.codewars.com/kata/makeuppercase/train/javascript

// we're gonan try this oldschool with ASCI code
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode

function makeUpperCase(str) {
  // Code here
  // we're gonna try this oldschool with ASCI code
  var strArray = str.split('');
  var capArray = [];
   for(var i=0;i<strArray.length;i++) {
    var asci = strArray[i].charCodeAt(0);
    if (asci <=122 && asci >= 97) {
      var asciCap = asci - 32;
      var cap = String.fromCharCode(asciCap);
      capArray.push(cap);
    } else {
    capArray.push(strArray[i]);
    }
  }
  str = capArray.join('');
   return str;
}