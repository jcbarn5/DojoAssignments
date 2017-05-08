app.factory('beltFactory', ['$http', function($http) {
  var factory = {};

  factory.login = function(user, callback){
    $http.post("/users", user)
      .then(function(returned_data){
        if(typeof(callback) == "function"){
            callback(returned_data.data);
        }
      })
  }
  factory.carBid = function(newCarBid, user_id, callback){
    $http.post("/newCarBid/" + user_id, newCarBid)
      .then(function(returned_data){
        if(typeof(callback) == "function"){
            callback(returned_data.data);
        }
      })
  }
  factory.index = function(callback){
    $http.get('/Products')
      .then(function(returned_data){
        if(typeof(callback) == "function"){
            callback(returned_data.data);
        }
      })
  }


  return factory;
}]);
