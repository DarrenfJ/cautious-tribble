// remove anchor from URl
// https://www.codewars.com/kata/remove-anchor-from-url/train/javascript

function removeUrlAnchor(url){
  // TODO: complete
  var cut = "";
  for (var i = 0; i < url.length; i++ ) {
     if (url.charAt(i) === "#") {
        cut = url.slice(0, i);
        break;
     }
     if (i === url.length-1) {
       cut = url;
     }
  }
  return cut;
}