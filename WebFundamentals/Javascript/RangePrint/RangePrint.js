//x = Start point
//y = End point
//z = Skip Amount

function printRange(x, y, z) {
  if (z == undefined){
    z = 1;
  }

  if (y == undefined) {
    y = x;
    x = 0;
  }

  for (x; x<y; x+=z){
    console.log(x);
  }
}
printRange(-8);
