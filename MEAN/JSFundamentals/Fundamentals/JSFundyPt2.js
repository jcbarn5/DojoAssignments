//Create a simple for loop that sums all the integers between x and y (inclusive). Have it console log the final sum.
function sumUp(x,y){
  var count = 0;
  for (var i = 0; i <= y-x; i++){
    count += x + i;
  }
  console.log(count);
}
// sumUp(5,10);

//Write a loop that will go through an array, find the minimum value, and then return it
function findMin(arr) {
  var min = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if(min > arr[i]){
      min = arr[i];
      console.log(min);
      return min;
    }
  }
}
var arr = [1, 5, 90, 25, -3, 0];
// findMin(arr);

//Write a loop that will go through an array, find the average of all of the values, and then return it
function findAvg(arr) {
  var counter = 0;
  for (var i = 0; i < arr.length; i++) {
    counter += arr[i];
  }
  var avg = counter/arr.length;
  console.log(avg);
}
var array = [1, 5, 90, 25, -3, 0];
// findAvg(array);
//Rewrite these 3 as anonymous functions assigned to variables.
var LemmeSumUp = function sumUp(x,y){
  var count = 0;
  for (var i = 0; i <= y-x; i++){
    count += x + i;
  }
  console.log(count);
}
//Rewrite these 3 as anonymous functions assigned to variables.
var MinnyMin = function findMin(arr) {
  var min = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if(min > arr[i]){
      min = arr[i];
      console.log(min);
      return min;
    }
  }
}
//Rewrite these 3 as anonymous functions assigned to variables.
var Averager = function findAvg(arr) {
  var counter = 0;
  for (var i = 0; i < arr.length; i++) {
    counter += arr[i];
  }
  var avg = counter/arr.length;
  console.log(avg);
}
//Rewrite these as methods of an object
var MyThreeFunc = {
  sumUp: function sumUp(x,y){
    var count = 0;
    for (var i = 0; i <= y-x; i++){
      count += x + i;
    }
    console.log(count);
  },
  findMin: function findMin(arr) {
    var min = arr[0];
    for (var i = 1; i < arr.length; i++) {
      if(min > arr[i]){
        min = arr[i];
        console.log(min);
        return min;
      }
    }
  },
  findAvg: function findAvg(arr) {
    var counter = 0;
    for (var i = 0; i < arr.length; i++) {
      counter += arr[i];
    }
    var avg = counter/arr.length;
    console.log(avg);
  },
}
// console.log(MyThreeFunc)
//Create a JavaScript object called person with the following properties/methods

var person ={
  name: "Constantine",
  distance_traveled: 0,
  say_name : function(){
    console.log(person.name);
  },
  say_something : function(phrase){
   console.log(person.name, 'says', phrase);
  },
  //VS the below uses TEMPLATE LITERALS, "" and '' are interchangeable, ``->backticks can run expressions inside them
  // say_something : function(phrase){
  //   console.log(`${person.name} says: ${phrase}`);
  // },
  walk : function(){
   console.log(`${person.name} is walking!`);
   person.distance_traveled += 3;
   return person;
  },
  run : function(){
   console.log(`${person.name} is running!`);
   person.distance_traveled += 10;
   return person;
  },
  crawl : function(){
   console.log(`${person.name} is crawling!`);
   person.distance_traveled += 1;
   return person;
  },
  chewGum:function(){
   console.log("I can walk and chew gum, but I can't chew gum and walk...");
   return person;
  }
  }

person.say_something('blerp')
