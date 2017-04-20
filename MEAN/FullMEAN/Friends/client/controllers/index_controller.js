var app = angular.module('app');

app.controller('indexController', ['$scope','friendsFactory', "$location", "$routeParams", function($scope, friendsFactory, $location, $routeParams) {
  $scope.friends = {};
  var index = function () {
      friendsFactory.index(function(data) {
          $scope.friends = data.friends;
      })
      $location.url("/")
  };
  index();
    $scope.delete = function (id) {
      console.log(id);
      friendsFactory.delete(id, function(data) {
        if(data.errors){
          console.log(data.errors);
        }
      });
      index();
      $location.url("/")
    }

}]);
