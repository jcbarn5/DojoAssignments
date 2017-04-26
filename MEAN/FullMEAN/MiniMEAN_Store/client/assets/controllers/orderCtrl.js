app.controller('ordrCtrl', function($scope, storeFactory) {
  $scope.products = [];
  $scope.customers = [];
  $scope.orders = [];
  index();
  getCustomers();
  getOrders();

  function index(){
    storeFactory.getProducts()
      .then(function(data){
        $scope.products = data;
      })
  };

  function getCustomers(){
    storeFactory.getCustomers()
      .then(function(data){
        $scope.customers = data;
      })
  };

  $scope.createOrder = function (){
    storeFactory.createOrder($scope.newOrder)
      .then(function(){ $scope.newOrder = {};
    })
    getOrders();
  }

  function getOrders(){
    storeFactory.getOrders()
    .then( function(data){
      $scope.orders = data;
    })
  }

  $scope.deleteOrder = function(id) {
    storeFactory.deleteOrder(id)
      .then( getOrders )
  }


});
