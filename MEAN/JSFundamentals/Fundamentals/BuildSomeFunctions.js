function runnerLogger(){
  console.log('I am running!');
}

function multiplyByTen(num) {
  var result = num * 10;
  console.log(result);
  return result;
}
// multiplyByTen(5);
function stringReturnOne() {
  console.log('This is the string from stringReturnOne');
}
function stringReturnTwo() {
  console.log('This is the string from stringReturnTwo');
}
function caller(param) {
  if( typeof(param) == 'function' ){
    console.log("it's a parameter")
    param();
  }
  else{
    console.log('parameter is not a function')
  }
}
// caller(stringReturnTwo);
function myDoubleConsoleLog(func1, func2){
  if( typeof(func1) == 'function' && typeof(func2) == 'function'){
    console.log(func1(), func2());
  }
}
// myDoubleConsoleLog(stringReturnOne, stringReturnTwo);

function caller2(singleParam) {
  console.log('starting');
  var x = setTimeout(function(){
    if( typeof(singleParam) == 'function' ){
      stringReturnOne(singleParam)
      console.log('ending');
    }
  }, 2000);
    return 'interesting';
  }

// caller2(stringReturnOne);
