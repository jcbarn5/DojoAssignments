require_relative "human"

class Samurai < Human
  @@samurai_count = 0
  def initialize
    super
    @health = 200
    @@samurai_count += 1
  end
  def meditate
    @health = 200
  end
  def how_many
    puts @@samurai_count
  end
  def deathblow(target)
    if target.class.ancestors.include?(Human)
      target.health = 0
      true
    else
      puts "Deathblow, more like... um... you missed"
      false
    end
  end
end
