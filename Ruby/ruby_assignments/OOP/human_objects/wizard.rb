require_relative "human"

class Wizard < Human
  def initialize
    super
    @intelligence = 25
    @health = 50
  end
  def heal
    @health += 10
    self
  end
  def fireball(target)
    if target.class.ancestors.include?(Human)
      target.health -= 20
      true
    else
      puts "Your fireball missed... Maybe try magic missel?"
      false
    end
  end

def
