# x = [3,5,1,2,7,9,8,13,25,32]
# z = []
# puts x.sum
# puts x.find_all {|i| i > 10 }

# arr = ["John", "KB", "Oliver", "Cory", "Matthew", "Christopher"]
# puts arr.shuffle
# puts arr.find_all {|i| i.length > 5 }

# arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','x','y','z']
#
# def alph(arr)
#   i = 0
#   arr.shuffle!
#   puts arr.last
#   if arr.first == 'a' or arr.first == 'e' or arr.first == 'i' or arr.first == 'o' or arr.first == 'u'
#     puts 'your first letter is a vowell'
#   else
#     puts arr.first
#   end
# end
#
# alph(arr)

# x = []
# 10.times { x << rand(55..100) }
# puts x
# puts x.sort!
# puts x.max
# puts x.min

# str = ""
# 5.times { str << rand(65..90).chr}
# puts str

str_arr = []
5.times do
  str = ''
  5.times { str << rand(65..90).chr}
  str_arr << str
end

puts str_arr
