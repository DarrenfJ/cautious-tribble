// Ch4113ng3
// https://www.codewars.com/kata/ch4113ng3/train/javascript

function nerdify(txt){
  var arrTxt = txt.split('');
  for (var i = 0; i < arrTxt.length; i++) {
    var letter = arrTxt[i];
    switch(letter) {
    case ("a"):
        arrTxt[i] =  "4";
        break;
    case ("A"):
        arrTxt[i] =  "4";
        break;
    case ("e"):
        arrTxt[i] =  "3";
        break;
    case ("E"):
        arrTxt[i] =  "3";
        break;
    case ("l"):
        arrTxt[i] =  "1";
        break;
    }
  }
  txt = arrTxt.join('');
  return txt;
}