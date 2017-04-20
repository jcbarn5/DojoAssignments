var app = angular.module('app');

app.controller('editController', ['$scope','friendsFactory', "$location", '$routeParams', function($scope, friendsFactory, $location, $routeParams) {
  var show = function(id) {
    console.log(id);
    friendsFactory.show(id, function(data){
      if(data.errors){
        console.log(data.errors);
      }
      console.log($location.url());
      $scope.friend = data.friend
      console.log($scope.friend);

    });
  }
  show($routeParams.id);
   $scope.update = function(id) {
      friendsFactory.update(id, $scope.friend, function(data){
        console.log(data);
      });
      $location.url('/')
    }
}]);
