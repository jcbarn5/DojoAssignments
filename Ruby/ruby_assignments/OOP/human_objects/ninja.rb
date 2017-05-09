require_relative "human"

class Ninja < Human
  def initialize
    super
    @stealth = 175
  end
  def get_away
    @health -= 15
    self
  end

  def steal(target)
    if target.class.ancestors.include?(Human)
      target.health -= 10
      @health += 10
      true
    else
      puts "Steal failed young grasshopper"
      false
    end
  end
end

frank = Ninja.new
bob = Ninja.new

frank.get_away
puts "#{frank.health}" + "frank's health after get away"
frank.steal(bob)
puts "#{bob.health}" + "bob's health after frank stole from him"
puts "#{frank.health}" + "frank's health after stealing from bob"
