class Bike(object):
    def __init__(self, price, max_speed, miles=0):
        print "You bought a bike!"
        self.price = price
        self.max_speed = max_speed
        self.miles = miles

    def displayInfo(self):
        print [self.price, self.max_speed, self.miles]


    def ride(self):
        print "Riding->->->->"
        self.miles += 10
        return self.miles

    def reverse(self):
        if self.miles > 0:
            print "Reversing................"
            self.miles -= 5
        else:
            print "bike odomoter can't go below 0"

Trek2 = Bike(550, 25)
print Trek2.ride()
print Trek2.ride()
print Trek2.ride()
print Trek2.reverse()
print Trek2.displayInfo()

print "----------------------------------------------------"

Trek3 = Bike(555, 25.5)
print Trek3.ride()
print Trek3.ride()
print Trek3.reverse()
print Trek3.reverse()
print Trek3.displayInfo()

print "----------------------------------------------------"

Trek4 = Bike(555, 25.5)
print Trek4.reverse()
print Trek4.reverse()
print Trek4.reverse()
print Trek4.displayInfo()
