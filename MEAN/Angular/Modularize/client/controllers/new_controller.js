
app.controller('newController', ['$scope','userFactory', function($scope, userFactory) {
  console.log('test');
  $scope.create = function(){
    console.log('hello');
    userFactory.create($scope.newUser, function(returned_data){
      console.log('blerp');
      $scope.newUser = {};
    });
  }
}]);
