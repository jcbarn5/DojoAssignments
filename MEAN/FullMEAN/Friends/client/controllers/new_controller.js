var app = angular.module('app');

app.controller('newController', ['$scope','friendsFactory', function($scope, friendsFactory) {
  // var self = this;

  $scope.create = function() {
      friendsFactory.create($scope.newFriend, function(data) {
          $scope.friend = data;
          // $scope.newFriend = {};
      });
  };

}]);
