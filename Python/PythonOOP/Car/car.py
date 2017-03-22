class Car(object):
    def __init__(self, price, speed, fuel, mileage):
        print "You bought a car!"
        self.price = price
        self.speed = speed
        self.fuel = fuel
        self.mileage = mileage

        if price > 10000:
            # price = price*1.15
            self.tax = 0.15
        else:
            # price = price*1.12
            self.tax = 0.12
        self.display_all()

    def display_all(self):
        print [self.price]
        print [self.speed]
        print [self.fuel]
        print [self.mileage]
        print [self.tax]

Car1 = Car(2000, "35mph", "Empty", "10mpg", )
print "----------------------------------------------------"
Car1 = Car(4000, "50mph", "Half", "15mpg", )
print "----------------------------------------------------"
Car1 = Car(8000, "75mph", "Almost Full", "25mpg", )
print "----------------------------------------------------"
Car1 = Car(25000, "95mph", "Full", "35mpg", )
print "----------------------------------------------------"
Car1 = Car(60000, "115mph", "Full", "35mpg", )
print "----------------------------------------------------"
Car1 = Car(1000000, "305mph", "Full", "4mpg", )
print "----------------------------------------------------"
