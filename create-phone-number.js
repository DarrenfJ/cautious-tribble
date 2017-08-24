//Create Phone Number
//https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript

function createPhoneNumber(numbers){
  var phoneNumber = "(";
  for (i=0;i<3;i++) {
    phoneNumber += numbers[i];
  }
  phoneNumber = phoneNumber + ") ";
  for (i=3;i<6;i++) {
    phoneNumber += numbers[i];
  }
  phoneNumber += "-";
  for (i=6;i<numbers.length;i++) {
    phoneNumber += numbers[i];
  }
  return phoneNumber;
}
