
def guess_number guess
  number = 15
  if guess > 15
    return "You're guess was too high!"
  elsif guess < 15
    return "You're guess was too low!"
  else
    return "You guessed right!"
  end
end

puts guess_number 16
puts guess_number 15
puts guess_number 14
