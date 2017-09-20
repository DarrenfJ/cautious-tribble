// Growth of a Population
// https://www.codewars.com/kata/growth-of-a-population/train/javascript

function nbYear(p0, percent, aug, p) {
    // your code
    var pop = p0;
    var year = 0;
    // added 100 condition so while I play around I don't involke an infinite loop
    while (pop < p && year < 1000) {
      year++;
      pop = pop * (1 + percent/100) + aug;   
    }
    // I would add a conditional that you round to a full person each year and recalc (round down)
    return year;
}
