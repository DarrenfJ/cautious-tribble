// Basic Mathematical Operations
// https://www.codewars.com/kata/57356c55867b9b7a60000bd7/train/ruby
// using:
// http://ruby-doc.com/docs/ProgrammingRuby/html/tut_expressions.html#S5

def basic_op(operator, value1, value2)
  #your code here
  case operator
    when '+'
      value1 + value2
    when '-'
      value1 - value2
    when '*'
      value1 * value2
    when '/'
      value1 / value2
  end
end

