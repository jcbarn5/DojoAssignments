app.controller('custCtrl', function($scope, storeFactory) {
  $scope.customers = [];
  getCustomers();

  function getCustomers(){
    storeFactory.getCustomers()
      .then(function(data){
        $scope.customers = data;
      })
  };
  $scope.createCustomer = function (){
    storeFactory.createCustomer($scope.newCustomer)
      .then(function(){ $scope.newCustomer = {};
    }).then(getCustomers)
  }
  $scope.deleteCustomer = function(id){
    storeFactory.deleteCustomer(id)
      .then( getCustomers )
}

});
