//Unique Words
// function UW(phrase){
//   var rOBJ = {};
//   var hold = phrase.split(" ");
//   console.log(hold);
//   var result = '';
//   for (var i = 0; i < hold.length; i++) {
//     rOBJ[hold[i]] = 1;
//   }
//   for (var key in rOBJ) {
//     result += key + " "
//   }
//   console.log(result);
//   return result
// }
//
// UW("Sing! Sing a song; sing out loud; sing out strong.")

//Rotate String
function RotateString(str, num) {
  var str_arr = str.split("");
  var temp;
  for(var i = str_arr.length-1; i >= str_arr.length-num; i--) {
    temp = str_arr[i];
    str_arr.unshift(temp);
    i++;
  }
  str_arr.length -= num;
  var ans = str_arr.join("");
  console.log(ans);
  return ans
}
//
var strger = "Boris Godunov"
// // var strger = "The Eagles are the worst team"
//
// RotateString(strger, 5)

var strger2 = "dunovoris Go"

function IonRot(str1, str2) {
  console.log('Hey');
  var flag = true;
  var i = 1;
  while(flag){
    var ans = RotateString(str1, i)
    if(ans === str2){
      break;
    }
    if(i >= str1.length){
      flag = false;
    }
    i++;
  }
  console.log(flag);
  return flag;
}


IonRot(strger, strger2);












































//Break
