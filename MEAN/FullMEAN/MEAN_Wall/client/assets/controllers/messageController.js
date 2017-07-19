app.controller('messageController', ['wallFactory','$scope','$location','$routeParams', '$cookies', function(wallFactory, $scope, $location, $routeParams, $cookies) {
  var index = function(){
      if(!$cookies.get('user_id')){
          $location.url('/');
      }
      wallFactory.getMessages(function(data){
          $scope.messages = data.messages;
      })
  }
  index();
  $scope.message = {};
//////////////////////////////////
  $scope.createMessage = function(){
      wallFactory.createMessage($scope.message, $cookies.get("user_id"), function(data){
          if(data.errors){
          }
          index();
          $scope.message = {};
      })
  }

//////////////////////////////////
  $scope.logout = function(){
      $cookies.remove("user_id");
      $location.url("/");
  }
//////////////////////////////////
  $scope.newComment = {};
  $scope.createComment = function(message_id, i){
      wallFactory.createComment($scope.newComment[i], $cookies.get("user_id"), message_id, function(data){
          if(data.errors){
              console.log(data.errors);
          }
          index();
          $scope.newComment[i] = {};
      })
  }
}]);
