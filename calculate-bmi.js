// Calculate BMI
// https://www.codewars.com/kata/calculate-bmi/train/javascript

function bmi(weight, height) {
  var bodyMassIndex =  weight/(height*height);
  console.log(bodyMassIndex);
  if (bodyMassIndex <= 18.5) {
    return "Underweight";
  } else if (bodyMassIndex <= 25.0) {
    return "Normal";
  } else if (bodyMassIndex <= 30.0) {
    return "Overweight";
  } else if (bodyMassIndex > 30.0) {
    return "Obese";
  } else { 
    return "cannot calculate";
  }
}
