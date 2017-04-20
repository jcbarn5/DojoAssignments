// var app = angular.module('app');

app.controller('showController', ['$scope','friendsFactory',"$location", '$routeParams', function($scope, friendsFactory,$location, $routeParams) {
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
  show($routeParams.id)
}]);
