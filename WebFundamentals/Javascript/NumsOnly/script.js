var arr = [1, "apple", -3, "orange", 0.5];

function onlyNumbers(arr) {

  var newArr = [];

  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      newArr.push(arr[i]);
    }
  }
  return newArr
}

//function that removes without creating newArr

//\/DOES\/NOT\/WORK

// var arr = [1, "apple", -3, "orange", 0.5];
//
// function onlyNumbersSame(arr) {
//
//   var count = 0;
//
//   for (var i = 0; i < arr.length; i++) {
//     if (typeof arr[i] !== "number") {
//       arr[i] = arr [i + 1];
//     }
//     arr.splice(1,1);
//   }
//
//   return (arr);
// }
