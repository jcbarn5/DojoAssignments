class MathDojo
  attr_reader :total

  def initialize
    @total = 0
  end

  def add(*numbers)
    @total += numbers.flatten.reduce(0, :+)
    self
  end

  def subtract(*numbers)
    @total -= numbers.flatten.reduce(0, :+)
    self
  end

end
challenge1 = MathDojo.new.add(2).add(2, 5).subtract(3, 2).total # => 4
challenge2 = MathDojo.new.add(1).add([3, 5, 7, 8], [2, 4.3, 1.25]).subtract([2,3], [1.1, 2.3]).total # => 23.15

puts challenge1
puts challenge2
