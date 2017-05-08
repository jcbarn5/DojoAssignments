app.controller('newController', ['beltFactory','$scope','$location','$routeParams', '$cookies', function(beltFactory, $scope, $location, $routeParams, $cookies) {
  $scope.user = $cookies.get('name');
  $scope.user_id = $cookies.get('_id');
  //
  // if(!$scope.user){
  //   $location.url('/');
  // }
  $scope.newUser = {};
  $scope.errors = {};

  var index = function(){
    $cookies.remove("user_id")
    $cookies.remove("user_name")
  }
  index();

  $scope.login = function(){
    beltFactory.login($scope.newUser, function(data){
      if(data.errors){
        $scope.errors = data.errors;
        $location.url("/")
      }
      else{
        $cookies.put("user_id", data._id)
        $cookies.put("user_name", data.name)
        $location.url("/bids")
      }
      $scope.newUser = {};
    })
  }

}]);
