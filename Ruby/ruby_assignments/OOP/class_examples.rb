class CodingDojo
  @@no_of_branches = 0

  def initialize(id, name, address)
    @branch_id = id
    @branch_name = name
    @branch_address = address
    @@no_of_branches += 1
    puts "\nCreated branch #{@@no_of_branches}"
  end

  def Hello
    puts "Hello CodingDojo!"
  end

  def displayAll
    puts "Branch ID: %d" % @branch_id
    puts "Branch Name: %s" % @branch_name
    puts "Branch Address: %s" % @branch_address
  end

end

branch = CodingDojo.new(253, "SF CodingDojo", "Sunnyvale")
branch.displayAll

branch2 = CodingDojo.new(155, "Boston Dojo", "Whereverton")
branch2.displayAll

=begin
Variables
  Local Variable
    A regular variable in Ruby.

  Instance Variable
    Begins with @ and are available to instances of the class.

  Class Variable
    Begins with @@ and are available to the class itself

  Global Variable
    Begins with $. Avoid using this, if possible, since it is available everywhere.
=end

class CodingDojo
  @@no_of_branches = 0
  def initialize(id, name, address) 
    @branch_id = id
    @branch_name = name
    @branch_address = address
    @@no_of_branches += 1
    puts "Created branch #{@@no_of_branches}"
  end
  def hello
    puts "Hello CodingDojo!"
  end
  def display_all
    puts "Branch ID: #{@branch_id}"
    puts "Branch Name: #{@branch_name}"
    puts "Branch Address: #{@branch_address}"
  end
  def self.num_of_branches
    @@no_of_branches
  end
end
seattle = CodingDojo.new(1, "Seattle", "123 Seattle Avenue")
san_jose = CodingDojo.new(2, "San Jose", "456 San Jose Boulevard")
burbank = CodingDojo.new(3, "Burbank", "789 Burbank Street")











#-----------
