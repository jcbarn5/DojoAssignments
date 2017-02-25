var money = 0.01;
// var money2 = 0.01;
// var money3 = 0.01;
var count = 1;
// var count2 = 1;
// var count3 = 1;

for (var i = 1; i <= 30; i++){
  money = money * 2;
  if (money == 10485.76) {
    console.log("The servant has more than $10,000 after " + count + "days.")
  }
  count++;
}
console.log(money);

// var i = 1;
// while (var i <= 30){
//   money = money * 2;
//   if (money == 10485.76) {
//     console.log("The servant has more than $10,000 after " + count + "days.")
//   i++;
// }
// console.log(money);

// while (money2 < 10000) {
//   money = money * 2;
//   count2++;
// }
// console.log("The servant has more than $10,000 after " + count + "days.")

while (money < 1400000000) {
  money = money * 2;
  count++;
}
console.log("The servant has more than $1,000,000,000 after " + count + "days.")
