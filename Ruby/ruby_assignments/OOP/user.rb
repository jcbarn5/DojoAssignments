# class User
#   @first_name
# end
# user1 = User.new
# user2 = User.new
# user1.first_name = "Matz"

# class User
#   def first_name=(val)
#     @first_name = val
#   end
# end

# user1.first_name = "Matz"
# puts user1.inspect
#
# class User
#   def first_name
#     @first_name
#   end
# end
#
# class User
#   @last_name
# end

# class User
#   attr_accessor :first_name
#   attr_accessor :last_name
# end
#
# class User
#   attr_accessor :first_name, :last_name
# end
# kobe = User.new
# kobe.first_name= "Kobe"
# kobe.last_name = "Bryant"

# class User
#   attr_accessor :first_name, :last_name
#   def initialize(f_name, l_name)
#     @first_name = f_name
#     @last_name = l_name
#   end
# end
# steph = User.new("Stephen", "Curry")

class User
  # creating instance methods that get and set the first_name and last_name attributes
  attr_accessor :first_name, :last_name

  def initialize(f_name, l_name)
    @first_name = f_name
    @last_name = l_name
  end

  def full_name
    puts "I am #{@first_name} #{@last_name}"
  end

  def say_hello
    puts "Hello!"
  end
end
u = User.new("John", "Doe")
puts u.full_name
puts u.say_hello
puts '-----------'

class User
  # previous code removed for brevity

  def self.foo
    puts "This is a class method"
  end
end
u = User.new("Jane", "Doe")
# u.foo # => NoMethodError: undefined method `foo'
# User.foo # => "This is a class method"
