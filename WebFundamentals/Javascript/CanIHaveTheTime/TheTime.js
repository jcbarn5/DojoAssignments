// I'm only able to get the program to run when I manually set the variables at the start....

var hour = 2; // $('#hour').val()
var minute = 15;
var period = "AM";
var BFhour;
var morf;

// $('#button').click(function(){
//   var hour = $('#hour').val()
// })
//
// $('#button1').click(function(){
//   var minute = $('#minute').val()
// })
//
// $('#button2').click(function(){
//   var period = $('#period').val()
// })

// Test minut to see whether or not time is just after the hour, or almos the next hour
if (minute > 30) {
  BFhour = "almost";
} else {
  BFhour = "just after";
}

// if it is almost the next hour, add 1 to hour. i.e. "it's 8:50" but display "it's almost 9"
if (BFhour == "almost") {
  hour++;
}

//if period is AM then it is morning, afternoon vs evening tested with PM
while (period == "AM") {
  morf = "morning";
}
// these if and if else statements could be combined into 1 statment using maybe if/else/else or if/else if/else...

// testing if PM, then before 5 is afternoon, after is evening
while (hour < 5 && period == "PM") {
  morf = "afternoon";
} else {
  morf = "evening";
}

// was able to get everything working by changing the below loop to a
if (period !== undefined) {
  console.log("It's ", BFhour, hour, "in the ", morf)
}



// if (hour !== 0) {
//   alert("It's ", BFhour, hour, "in the ", morf)
// }
