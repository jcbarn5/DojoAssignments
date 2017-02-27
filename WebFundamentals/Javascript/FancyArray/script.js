var arr = ["Jack","Jill","James","John"];

function fancyArray(arr, sym) {
  for (var i = 0; i < arr.length; i++){
    console.log(i, sym, arr[i]);
  }
}
fancyArray(arr, "->")
