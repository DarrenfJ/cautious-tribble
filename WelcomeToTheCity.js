// Welcome to the City
// https://www.codewars.com/kata/welcome-to-the-city/train/javascript

function sayHello( name, city, state ) {
  var fullName=name.join(" ");
  var hello = "Hello, " + fullName + "! Welcome to " + city + ", " + state + "!";
  console.log(hello);
  return hello;
}