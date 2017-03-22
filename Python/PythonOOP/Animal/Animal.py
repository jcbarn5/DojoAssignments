class Animal(object):
    def __init__(self, name):
        self.name = name
        self.health = 100

    def walk(self):
        print "Walking along, doot doo doot doo doo"
        self.health += 1
        self.displayHealth()
        return self

    def run(self):
        print "RRRRUUUUUUUUUUUUUUUUUUUUUUUUUUUUNNNNNNNNNNNNNNNNNNNNNNNNN!!!!!!"
        self.health -= 5
        self.displayHealth()
        return self

    def displayHealth(self):
        print "Animal Name", [self.name]
        print "Animal Health", [self.health]

creature = Animal("Bugs Bunny", 100)

print creature.displayHealth()
print creature.walk().walk().walk().walk().run().run()

class Dog(Animal):
    def __init__(self, name):
        super(Dog, self).__init__(name)
        self.health = 150

    def pet(self):
        self.health += 5
        return self

spot = Dog("Spot")
print spot.walk().walk().walk().run().run().pet().displayHealth()

class Dragon(Animal):
    def __init__(self, name):
        super(Dragon, self).__init__(name)
        self.health = 170

    def fly(self):
        self.health += 10
        return self

    def displayHealth(self):
        print "Animal Name", [self.name]
        print "Animal Health", [self.health]
        print "This is a Dragon"

Puff = Dragon("Puff")
print Puff.walk().walk().walk().run().run().fly().fly().displayHealth()

# print creature.fly() <---------- doesn't work, tested per assignment
