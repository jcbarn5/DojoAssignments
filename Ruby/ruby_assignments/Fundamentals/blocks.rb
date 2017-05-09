# def test
#   puts "You are in the method"
#   yield
#   puts "You are again back to the method"
#   yield
# end
# test { puts "You are in the block" }

# def test
#   yield 5
#   puts "You are in the method test"
#   yield 100
# end
# test { |i| puts "You are in the block #{i}" }

# def square(num)
#   puts "num is #{num}"
#   puts "yield(num) has a value of #{yield(num)}"
# end
#
# square(5) {|i| i*i}

# puts Array.new(3)
# puts Array.new(3, true)
# puts Array.new(3, true).to_s
puts Array.new(4, 2).reject {|elem| elem.even?}
