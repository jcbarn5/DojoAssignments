app.controller('userController', ['wallFactory','$scope','$location','$routeParams', '$cookies', function(wallFactory, $scope, $location, $routeParams, $cookies) {
  $scope.enter = function(){
      wallFactory.enter($scope.user, function(data){

          if(data.errors){

              $location.url("/");
          }
          else{
              $cookies.put("user_id", data._id);
              $location.url("/wall");
          }
      })
  }}]);
