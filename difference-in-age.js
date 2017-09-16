// Find the Difference in Age between Oldest and Youngest Family Members
// https://www.codewars.com/kata/find-the-difference-in-age-between-oldest-and-youngest-family-members/train/javascript

function differenceInAges(ages){
  var sortAges = ages.sort(function(a, b) {
  return a - b;
  });
  var answer = [sortAges[0], sortAges[sortAges.length-1], (sortAges[sortAges.length-1] - sortAges[0])]
  return answer;
}

