// Mumbling
// https://www.codewars.com/kata/mumbling/train/javascript

function accum(s) {
	// your code
  var mmble = "";
  var mmbleArr = [];
  var arr = s.split('');
  for (var i = 0;i<arr.length;i++) {
    mmble = arr[i].toUpperCase();
    for (var j = 1; j <i+1;j++) {
      mmble = mmble + arr[i].toLowerCase();
    }
    mmbleArr.push(mmble);
  }
  var mmble = mmbleArr.join('-');
  return mmble;
}
