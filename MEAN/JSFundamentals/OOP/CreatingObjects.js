//We are going to create our very own constructor. Create a VehicleConstructor that takes in the name, number of wheels, and the number of passengers. Then complete the following tasks:
function VehicleConstructor(name, numWheels, passengers){
  var vehicle = {};

  vehicle.name = name;
  vehicle.numWheels = numWheels;
  vehicle.passengers = passengers;

  //Each vehicle should have a makeNoise method
  vehicle.makeNoise = function(){
    console.log('Vroom Vroom');
  }
  return vehicle;
}

//Using the constructor, create a Bike
var bike = new VehicleConstructor('Trek', 2, 1);
console.log(bike);
console.log(bike.makeNoise());

//Redefine the Bike’s makeNoise method to print “ring ring!”
bike.makeNoise = function(){
  console.log("ring ring!")
}
console.log(bike.makeNoise());

//Create a Sedan
var Sedan = new VehicleConstructor('Camry', 4, 5);
console.log(Sedan);
Sedan.makeNoise = function(){
  console.log("beep!")
}
console.log(Sedan.makeNoise());
//Using the constructor, create a Bus
var Bus = new VehicleConstructor('MagicSchoolbus', 10, 36);
Bus.riders = function(people){
  Bus.passengers -= people
  console.log(Bus.passengers);
  return Bus.passengers;
}
Bus.riders(5)
console.log(Bus);

//Add a method to Bus that takes in the number of passengers to pick up and adds them to the passenger count​
