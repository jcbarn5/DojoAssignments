//Create a vehicleConstructor that takes in the name, number of wheels, and number of passengers
//Have the Vehicle constructor also take in a “speed” //Store the speed as an attribute

function VehicleConstructor(name, numWheels, passengers,speed){
  if (!(this instanceof VehicleConstructor)){
  return new VehicleConstructor(name,numWheels,passengers,speed);
  }
  //Create a private variable called distance_travelled that starts at 0
  var distance_travelled = 0;
  this.name = name;
  this.numWheels = numWheels;
  this.passengers = passengers;
  this.speed = speed;
  //Create a private method called updateDistanceTravelled that increments distance traveled by speed
  var updateDistanceTravelled = function() {
    distance_travelled += speed
    console.log(distance_travelled);
    return this
  }

  //Add a method to the Vehicle called “move” that calls updateDistanceTravelled and then makeNoise
  this.move = function() {
    this.makeNoise();
    updateDistanceTravelled();
    return this
  }
//Add a method called checkMiles that console.logs the distance_travelled
  this.checkMiles = function(){
    console.log(distance_travelled);
  }

  //Each vehicle should have a makeNoise method
  this.makeNoise = function(){
    console.log('Vroom Vroom');
    return this;
  }

}
var Kia = VehicleConstructor('Optima',4,5)
// console.log(Kia.makeNoise());
//Using the constructor, create a Bike
var Bike = VehicleConstructor('Trek', 2, 1)
// console.log(Bike);
// console.log(Bike.makeNoise());
//redefine the Bike’s makeNoise method to print “ring ring!”
Bike.makeNoise = function(){
  console.log("ring ring!");
}
// console.log(Bike.makeNoise());
//Using the constructor, create a Sedan
var Sedan = VehicleConstructor('Camry',4,5);
//redefine the Sedan’s makeNoise method to print “Honk Honk!”
Sedan.makeNoise = function(){
  console.log("Honk Honk!");
}
// Sedan.makeNoise()
//Using the constructor, create a Bus
var Bus = VehicleConstructor('SchoolBus', 8, 36, 20);
//Give the bus a pickUpPassengers method that takes in the number of passengers to pick up and adds them to the passenger count

Bus.riders = function(people){
  this.passengers -= people
  console.log(this.passengers);
  return this.passengers;
}
// Bus.move().move();
// Bus.checkMiles();

// Bus.riders(5)
var car = new VehicleConstructor('car', 4, 2, 112);
// car.move();
// car.checkMiles();
// console.log(car.speed);
//Have each vehicle generate a random VIN number (study Math.random & Math.floor). Don’t worry about potential duplicates for now.
VehicleConstructor.prototype.generateVIN = function(){
  this.vin = (Math.floor(Math.random(100000000000000000,999999999999999999)*100000000000000000));
  console.log(this.vin);
  return this.vin;
}

Bus.generateVIN();
Sedan.generateVIN();
Bike.generateVIN();
car.generateVIN();
