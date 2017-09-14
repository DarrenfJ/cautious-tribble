// Descending Order
// https://www.codewars.com/kata/descending-order/train/javascript

function descendingOrder(n){
  //...
  var arr = n.toString().split('');
  var sortStr = arr.sort().reverse().join('');
  n = parseInt(sortStr, 10)
  return n;
}
