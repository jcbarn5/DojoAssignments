app.controller('bidController', ['beltFactory','$scope','$location','$routeParams',"$cookies", function(beltFactory, $scope, $location, $routeParams, $cookies) {
  var user_id = $cookies.get('user_id');
  // $scope.user_id = $cookies.get('user_id');
  $scope.newCarBid = {};
  $scope.errors = {};

  var index = function(){
    if(!$cookies.get("user_id") || !$cookies.get("user_name")){
      $location.url("/")
    }
  }
  $scope.getCarBids = function(){
    beltFactory.getCarBids(function(data){
      if(data.errors){
        $scope.errors = data.errors;
      }
      else{

      }
    })
  }
  $scope.newCarBid = {}

  $scope.createBid = function (){
    console.log($scope.newCarBid);
    beltFactory.carBid($scope.newCarBid, $cookies.get('user_id'), function(data) {
      if(data.errors){}
      $scope.newCarBid = {};
    })
  }

  // $scope.destroy = function(id){
  //   console.log(id);
  //   beltFactory.deleteThing(id, function(data){
  //     if(data.errors){
  //       $scope.errors = data.errors
  //     }
  //     $location.url("/welcome");
  //     index();
  //   })
  // }
  $scope.productIndex = function() {
    beltFactory.index(function(products){
      console.log(products);
    })
  }
  $scope.productIndex();

  $scope.logout = function(){
    $cookies.remove("user_name")
    $cookies.remove("user_id")
    $location.url("/")
  }

}]);
