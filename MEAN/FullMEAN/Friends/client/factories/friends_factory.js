console.log('friends factory front');
app.factory('friendsFactory', ['$http', function($http) {
  var friends = [];
  var friend = {};
  function FriendsFactory() {
    var _this = this;
    this.index = function(callback) {
        $http.get('/friends').then(function(returned_data){
          callback(returned_data.data);
        });
    };
    this.show = function(id, callback) {
      $http.get('/friends/' + id).then(function(returned_data){
        console.log(returned_data.data);
        if(typeof(callback) == 'function'){
          callback(returned_data.data);
        }
      })
      .catch(function(err){
        console.log(err);
      })
    };
    this.delete = function(id, callback) {
      $http.delete('/friends/'+ id).then(function(returned_data){
        console.log(returned_data.data);
        if(typeof(callback) == 'function') {
          callback(returned_data.data);
        }
      })
      .catch(function(err){
        console.log(err);
      });
    }
    this.create = function(newfriend, callback) {
      console.log(newfriend);
        $http.post('/friends', newfriend).then(function(returned_data){
          var friend = returned_data.data;
          if (typeof(callback) == 'function'){
            callback(returned_data.data);
          }
        });
    };
    this.update = function(id, newdata, callback) {
      $http.patch('/friends/' + id, newdata).then(function(returned_data) {
          console.log(returned_data.data);
          if (typeof(callback) == 'function'){
            callback(returned_data.data);
          };
      }).catch(function(err){
      console.log(err);
    });
  }
  }
  return new FriendsFactory();
}]);
