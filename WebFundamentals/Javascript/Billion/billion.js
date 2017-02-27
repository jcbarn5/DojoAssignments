//function for a penny multiplied by 2 over 30 days

// function billion(sum) {
//   var sum = 0.01;
//   for (var i = 1; i <= 30; i++){
//     sum *= 2;
//   }
//   console.log(sum);
// }

// function for how many days for the servant to reach $10000

function billion(sum, dollarCap) {

  for (var i = 2; i <= Infinity; i++){
    sum *= 2;
    if (sum > dollarCap){
      console.log("After", i, "days, the servant has", sum, "dollars");
      break;
    }
  }
}
