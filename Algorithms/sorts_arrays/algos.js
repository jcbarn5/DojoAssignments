// function BubbleSort(arr) {
//   var temp = 0;
//   var not_sorted = true;
//
//   while(not_sorted){
//     not_sorted = false;
//     for (var i = 0; i <= arr.length-1; i++) {
//       if(arr[i] > arr[i + 1]){
//         temp = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = temp;
//         not_sorted = true;
//       }
//     }
//   }
//   console.log(arr);
//   return arr;
// };
//
// function SelectionSort(arr) {
//   var minDex;
//   var temp;
//   var length = arr.length
//
//   for (var z = 0; z < length; z++) {
//     minDex = z;
//     for (var i = z+1; i < length; i++) {
//       if(arr[i] < arr[minDex]){
//         minDex = i;
//       }
//     }
//     temp = arr[z];
//     arr[z] = arr[minDex];
//     arr[minDex] = temp;
//   }
//   console.log(arr);
//   return arr;
// };
//
// function InsertionSort(arr) {
//   var temp;
//   for (var i = 0; i < arr.length; i++) {
//     if(arr[i] < arr[i - 1]){
//       temp = arr[i];
//       for (var z = i; z > -1; z--) {
//         if (temp < arr[z-1]) {
//           arr[z] = arr[z - 1];
//           arr[z - 1] = temp;
//         }
//         else{
//           break;
//         }
//       }
//     }
//   }
//   console.log(arr);
//   return arr;
// };

function CombineSorted(arr1,arr2) {
  // arr1.length = arr1.length + arr2.length;

    for (var i = 0; i <= arr1.length; i++) {
        if (arr2[0] <= arr1[i]) {
          var temp = arr2.shift();
          console.log(temp);
          arr1.splice(i, 0, temp);

        }
        else {
          continue;
        }
      }
      if(arr2.length > 0){
        arr1 = arr1.concat(arr2);
      }
    console.log(arr1);
    return arr1;
};

function Partition(arr) {
  var partition = arr[0];
  var temp;
  var partIdx = 0;

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < partition) {
      temp = arr[i];
      for (var m = i; m > partIdx; m--) {
        arr[m] = arr[m - 1];
      }
      arr[partIdx] = temp;
      partIdx += 1;
    }
    else {
      continue;
    }
  }
  console.log(arr);
  console.log(partIdx);
  return partIdx;
}

var my_arr = [5,4,9,2,5,3];
var ans = [4,2,3,5,9,5]
var my_sorted_arr2 = [-2,0,2];
var my_sorted_arr1 = [-2,1,3,3,3,3,3];

// BubbleSort(my_arr);
// SelectionSort(my_arr);
// InsertionSort(my_arr);
// CombineSorted(my_sorted_arr1,my_sorted_arr2);
// Partition(my_arr);



























//break
