function removeNegatives(arr){
  var count = 0;
  for (var i = 0; i < arr.length; i++){
    if (arr[i] < 0){
      count++;
      for (var m = i; m < arr.length; m++){
        arr[m] = arr[m+1];
      }
      i--;
    }
  }
  arr.length -= count;
  return arr;
}

function FizzBuzz() {
  for (var n = 1; n <= 100; n++) {
    var output = "";
    if (n % 3 == 0)
      output += "Fizz";
    if (n % 5 == 0)
      output += "Buzz";
    console.log(output || n);
  }
}
FB();
