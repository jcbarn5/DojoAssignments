app.controller('prodCtrl', function($scope, storeFactory) {
  $scope.products = [];
  index();

  function index(){
    storeFactory.getProducts()
      .then(function(data){
        $scope.products = data;
      })
  };

  $scope.createProduct = function (){
    storeFactory.createProduct($scope.newProduct)
      .then(function(){ $scope.newProduct = {};
    }).then(index)
  }
  $scope.deleteProduct = function(id){
  StoreFactory.deleteProduct(id)
  .then( fetchProducts )
}

});
