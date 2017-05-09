require_relative 'mammal'

class Human < Mammal # Human inherits from Mammal
  def subclass_method
    breath
  end
  def another_method
    self.eat
  end
  def explicitily_speak
    self.speak
  end

  def implicitily_speak
    speak
  end
  def explicitily_cry
    self.cry
  end

  def implicitily_cry
    cry
  end
end
human = Human.new
