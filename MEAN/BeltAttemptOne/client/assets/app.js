var app = angular.module('app', ['ngRoute', 'ngCookies']);
app.config(function ($routeProvider) {
	$routeProvider
	.when('/', {templateUrl:'partials/new.html'})
	.when('/bids', { templateUrl: 'partials/bids.html'})
  // .when('/results', { templateUrl: 'partials/result.html'})
  .otherwise({
    redirectTo: '/'
  });
});
