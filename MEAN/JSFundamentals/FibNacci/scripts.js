function fib() {
  // Some variables here
  this.count1 = 0;
  this.count2 = 1;
  // console.log(count1);
  console.log(count2);

  function nacci() {
    // do something to those variables here
    var curCount= count1 + count2;
    this.count1 = count2;
    this.count2 = curCount;
    console.log(curCount);
  }
  return nacci
}
var fibCounter = fib();
fibCounter() // should console.log "1"
fibCounter() // should console.log "1"
fibCounter() // should console.log "2"
fibCounter() // should console.log "3"
fibCounter() // should console.log "5"
fibCounter() // should console.log "8"
fibCounter() // should console.log "13"
fibCounter() // should console.log "21"
fibCounter() // should console.log "34"
fibCounter() // should console.log "55"
fibCounter() // should console.log "144"
