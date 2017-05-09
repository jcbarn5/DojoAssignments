# Print 1 to 255
# for i in 1..255
#   print i
# end

# Print odds from 1 to 255
# for i in 1..255
#   print i if i % 2 == 1
# end

# Print Sum
# for i in 0..255
#   sum = i + i-1
#   if i == 0
#     puts "New number: #{i} Sum: 0"
#   else
#   puts "New number: #{i} Sum: #{sum}"
# end
# end

# Iterating through an Array
# x = [1,3,5,7,9,13]
# x.each {|i| puts i}

# Find Max
# x = [1,3,5,7,9,13]
# max = x[0]
# x.each {|i| max = i if i > max}
# puts max

# Odd values to array
# y = []
# for i in 1..255
#   y.push(i) if i % 2 == 1
# end
# puts y.to_s

# Greater than Y
# x = [1,3,5,7,9,13]
# y = 5
# count = 0
# x.each {|i| count = (count + 1) if i > y}
# puts count

# Square the values
# x = [1,3,5,7,9,13]
#
# x.map! {|i| i * i}
# puts x

# Eliminate Negative Numbers
# x = [2,-3,9,-4,8,5,-7]
#
# x.map! { |e|
#   if e<0
#     e*e
#   else
#     e = 0
#   end
#   }
# puts x.to_s

# Max, Min, Avg
# x = [1, 5, 10, -2]
#   puts x.min
#   puts x.max
#   puts x.sum/x.length.to_f

# Shifting the Values in the Array
# x = [1, 5, 10, 7, -2]
# puts x.rotate!.to_s
# x[x.length-1] = 0
# puts x

#Number to String
# x = [1,3,-5,-7,9,-13]
#
# puts x.each_index { |i| x[i] = "Dojo" if x[i] < 0 }
