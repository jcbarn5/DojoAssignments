app.controller('dashCtrl', function($scope, storeFactory){
  $scope.products = [];
  $scope.orders = [];
  $scope.customers = [];
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

  function getOrders(){
    storeFactory.getOrders()
    .then( function(data){
      $scope.orders = data;
    })
  }

})
