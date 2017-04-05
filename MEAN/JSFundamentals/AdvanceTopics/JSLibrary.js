var _ = {
   map: function(arr,callback) {
    var newArr=[];
    for(var i = 0;i<arr.length;i++){
      newArr.push(callback(arr[i]));
    }
    return newArr;
   },
   reduce: function(arr, callback, memo) {
    for (var i = 0; i < arr.length; i++) {
        memo = callback(arr[i], memo)
    }
    return memo;
   },
   find: function(arr, callback) {
     for(var i = 0; i < arr.length; i++){
       if(callback(arr[i]) == true){
         return arr[i];
       }
     }
   },
   filter: function(arr, callback) {
    var newArr = [];
    for(var i = 0;i < arr.length; i++){
     if(callback(arr[i])){
       newArr.push(arr[i]);
     }
    }
    return newArr;
   },
   reject: function(arr, callback) {
     var newArr = [];
     for(var i = 0;i < arr.length; i++){
       if(!callback(arr[i])){
         newArr.push(arr[i]);
       }
     }
     return newArr;
   }
 }
// you just created a library with 5 methods!

var evens = _.reduce([1, 2, 3], function(num, memo){ return memo + num; }, 0);
console.log(evens); // if things are working right, this will return [2,4,6].
