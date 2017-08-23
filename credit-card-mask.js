//Credit Card Mask

//https://www.codewars.com/kata/5412509bd436bd33920011bc/train/javascript
//because why not?

// return masked string
function maskify(cc) {
//if statements to leave if less than 4 
  if (cc.length<=4) {
    return cc;
  } else {
    // split it into two strings using splice.. replace one with all #
    var hash = cc.slice(0, (cc.length - 4));
    var rest = cc.slice((cc.length - 4), cc.length);
    var newHash = hash.replace(/./g, "#");
    var hashCc = newHash + rest; 
  }
  return hashCc;
}

// using:
//https://stackoverflow.com/questions/9311258/how-do-i-replace-special-characters-with-regex-in-javascript#9311282
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
//https://stackoverflow.com/questions/19555551/how-do-i-replace-all-the-letters-in-a-string-with-another-character-using-java
//https://stackoverflow.com/questions/2116558/fastest-method-to-replace-all-instances-of-a-character-in-a-string
//https://stackoverflow.com/questions/8317281/how-to-replace-all-characters-in-a-string




