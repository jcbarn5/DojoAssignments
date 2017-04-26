var app = angular.module('app', ['ngRoute','ngCookies']);

app.factory('usersFactory', ['$http', function($http) {
  var usersFactory = function(){
    this.login = function(data,callback,errback){
      $http.post('/login',data).then(callback,errback);
    }
    this.index = function(callback){
      $http.get('/users').then(callback);
    }
    this.register = function(data,callback,errback){
      $http.post('/register',data).then(callback,errback);
    }
  }
  return new usersFactory;
}]);
app.controller('logController', ['$scope', 'usersFactory', '$cookies', '$location' function($scope, uF, $cookies, $location){
  $scope.user = $cookies.get("user_id");

  $scope.register = function(){
    uF.register($scope.registration, function(data){
      if (data.data.errors){
        $scope.errors = data.data.errors;
      }
      else{
        $scope.user = data.data;
        $cookies.put('user_id', data.first_name);
        $location.url("/success");
      }
    }, function(err){
      console.log("I am an error:",err);
    })
  }
  $scope.login = function(){
    uF.login(
      $scope.userLogin,
      function(data){
        if (data.data.errors){
          $scope.errors = data.data.errors;
        }
        else{
          $scope.user = data.data;
          $cookies.put("user_id", data.first_name);
          $location.url("/success");
        }
      },
      function(err){
        console.log("I am an error",err);
      });
  }
  $scope.logout = function(){
    var cookies = $cookies.getAll();
    angular.forEach(cookies, function(v, k){
        $cookies.remove(k);
      })
    console.log($cookies.get("user_id"));
    $location.url("/");
  }
}]);
