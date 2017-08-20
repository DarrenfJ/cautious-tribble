// Who likes it?
// https://www.codewars.com/kata/who-likes-it
https://www.codewars.com/kata/who-likes-it/train/ruby
// ruby

def likes(names)
  #your code here
   more = names.length - 2;
   str = more.to_s
  if names.length === 0 
    return "no one likes this"
  elsif names.length === 1
    return names[0] << " likes this"
  elsif names.length === 2 
    return names[0] << " and " << names[1] << " like this"
  elsif names.length === 3 
    return names[0] << ", " << names[1] << " and " << names[2] << " like this"
  else 
  return names[0] << ", " << names[1] << " and " << str << " others like this"
  end
end