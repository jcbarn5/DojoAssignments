class Bike(object):
    def __init__(self, price, max_speed, miles=0):
        print "You bought a bike!"
        self.price = price
        self.max_speed = max_speed
        self.miles = miles


    def displayInfo(self):
        print "Bike Price:", [self.price]
        print "Maximum Speed:", [self.max_speed]
        print "Odomoter Miles:", [self.miles]
        return self


    def ride(self):
        print "Riding->->->->"
        self.miles += 10
        return self

    def reverse(self):
        if self.miles > 0:
            print "Reversing................"
            self.miles -= 5
            return self
        else:
            print "bike odomoter can't go below 0"
            return self

Trek2 = Bike(550, 25)
print Trek2.ride().ride().ride().reverse().displayInfo()

print "----------------------------------------------------"

Trek3 = Bike(555, 25.5)
print Trek3.ride().ride().reverse().reverse().displayInfo()

print "----------------------------------------------------"

Trek4 = Bike(555, 25.5).reverse().reverse().reverse().displayInfo()
